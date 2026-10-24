<?php
/**
 * Recensioni Google in tempo reale (facoltativo).
 * Legge le recensioni dalla scheda Google dello studio tramite l'API "Places" e le
 * restituisce al sito in formato JSON. Il risultato resta in cache per 6 ore, così
 * l'API viene chiamata poche volte (costo praticamente nullo).
 *
 * Per attivarlo:
 *  1. copia config.sample.php in config.php e inserisci chiave API e Place ID;
 *  2. in js/config.js imposta  recensioniApi: true
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=900');

$cfgFile = __DIR__ . '/config.php';
$cacheFile = __DIR__ . '/cache.json';
$ttl = 6 * 3600;
$empty = json_encode(['recensioni' => []]);

if (!is_file($cfgFile)) { echo $empty; exit; }
require $cfgFile;
if (empty($PLACES_API_KEY) || empty($PLACE_ID)) { echo $empty; exit; }

if (is_file($cacheFile) && (time() - filemtime($cacheFile) < $ttl)) {
    readfile($cacheFile);
    exit;
}

$url = 'https://places.googleapis.com/v1/places/' . rawurlencode($PLACE_ID) . '?languageCode=it';
$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 8,
    CURLOPT_HTTPHEADER => [
        'X-Goog-Api-Key: ' . $PLACES_API_KEY,
        'X-Goog-FieldMask: rating,userRatingCount,reviews',
    ],
]);
$raw = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($raw === false || $code !== 200) {
    // in caso di errore restituisco l'ultima copia valida, se esiste
    if (is_file($cacheFile)) { readfile($cacheFile); } else { echo $empty; }
    exit;
}

$d = json_decode($raw, true);
$out = [
    'riepilogo' => [
        'rating' => isset($d['rating']) ? round((float)$d['rating'], 1) : null,
        'count'  => isset($d['userRatingCount']) ? (int)$d['userRatingCount'] : null,
    ],
    'recensioni' => [],
];
foreach (($d['reviews'] ?? []) as $r) {
    $testo = trim($r['text']['text'] ?? ($r['originalText']['text'] ?? ''));
    if ($testo === '') { continue; }   // salto le valutazioni senza testo
    $out['recensioni'][] = [
        'nome'   => $r['authorAttribution']['displayName'] ?? 'Paziente',
        'stelle' => (int)($r['rating'] ?? 5),
        'testo'  => mb_substr($testo, 0, 420),
        'quando' => $r['relativePublishTimeDescription'] ?? '',
    ];
}
$json = json_encode($out, JSON_UNESCAPED_UNICODE);
@file_put_contents($cacheFile, $json);
echo $json;
