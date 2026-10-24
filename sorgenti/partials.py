# -*- coding: utf-8 -*-
"""Elementi condivisi: icone, <head>, JSON-LD comune."""
import json, html as _html
from config import *

WA_PATH = json.load(open(__import__('os').path.join(__import__('os').path.dirname(__file__), 'wa_path.json')))['whatsapp_path']

def _s(d, extra=''):
    return f'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"{extra}>{d}</svg>'

ICON = {
    'phone': _s('<path d="M5 4h3.5l1.8 4.6-2.3 1.5a11 11 0 0 0 5.4 5.4l1.5-2.3L19.5 15v3.5a1.5 1.5 0 0 1-1.6 1.5C10.6 19.600 4.400 13.400 4 6.100A1.500 1.500 0 0 1 5.500 4.500Z"/>'),
    'whatsapp': f'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="{WA_PATH}"/></svg>',
    'arrow': _s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    'arrow-left': _s('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    'calendar': _s('<rect x="3.500" y="5" width="17" height="15.500" rx="3"/><path d="M8 3v4M16 3v4M3.500 10h17"/>'),
    'clock': _s('<circle cx="12" cy="12" r="8.500"/><path d="M12 7.500V12l3 2"/>'),
    'pin': _s('<path d="M12 21s-6.500-5.600-6.500-11a6.500 6.500 0 0 1 13 0c0 5.400-6.500 11-6.500 11Z"/><circle cx="12" cy="10" r="2.300"/>'),
    'mail': _s('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7.500 8 6 8-6"/>'),
    'search': _s('<circle cx="11" cy="11" r="6.500"/><path d="m20 20-4.300-4.300"/>'),
    'close': _s('<path d="M6 6l12 12M18 6 6 18"/>'),
    'menu': _s('<path d="M4 8h16M4 16h16"/>'),
    'chev': _s('<path d="m6 9 6 6 6-6"/>'),
    'check': _s('<path d="m5 12.500 4.500 4.500L19 7.500"/>'),
    'plus': _s('<path d="M12 5v14M5 12h14"/>'),
    'external': _s('<path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>'),
    'qr': _s('<rect x="3.500" y="3.500" width="6.500" height="6.500" rx="1"/><rect x="14" y="3.500" width="6.500" height="6.500" rx="1"/><rect x="3.500" y="14" width="6.500" height="6.500" rx="1"/><path d="M14 14h3v3h-3zM20.500 14v.01M14 20.500h.01M17 20.500h3.500v-3.500"/>'),
    'screen': _s('<rect x="3" y="4" width="18" height="13" rx="2.500"/><path d="M8 21h8M12 17v4"/>'),
    'tooth': _s('<path d="M7.500 4.500c1.500 0 2.800.9 4.500.9s3-.9 4.500-.9c2.500 0 4 2 3.800 4.600-.2 2.200-1.200 3.200-1.600 5.600-.4 2.400-.6 5.300-2 5.300-1.500 0-1.500-4-2.700-4s-1.200 4-2.700 4c-1.400 0-1.600-2.900-2-5.300-.4-2.400-1.400-3.400-1.600-5.600C3.500 6.500 5 4.500 7.500 4.500Z"/>'),
    'info': _s('<circle cx="12" cy="12" r="8.500"/><path d="M12 11v5M12 8v.01"/>'),
    'star': _s('<path d="m12 3.500 2.600 5.400 5.900.8-4.300 4.100 1 5.800-5.200-2.800-5.300 2.800 1-5.800L3.500 9.700l5.900-.8Z"/>'),
    'car': _s('<path d="M5 16.500V13l1.700-4.700A2 2 0 0 1 8.600 7h6.800a2 2 0 0 1 1.900 1.300L19 13v3.500M5 16.500h14M5 16.500v2M19 16.500v2"/><circle cx="8" cy="13.500" r=".6"/><circle cx="16" cy="13.500" r=".6"/>'),
    'baby': _s('<circle cx="12" cy="12" r="8.500"/><path d="M9 10.500v.01M15 10.500v.01M9.500 14.500c1.500 1.300 3.500 1.300 5 0"/>'),
    'bolt': _s('<path d="M13 3 5 13.500h6L10 21l8-10.500h-6Z"/>'),
    'smile': _s('<circle cx="12" cy="12" r="8.500"/><path d="M8.500 13.500c1 1.700 2.200 2.500 3.500 2.500s2.500-.8 3.500-2.500M9 9.500v.01M15 9.500v.01"/>'),
    'shield': _s('<path d="M12 3.500 5 6v5.500c0 4.300 2.900 7.700 7 9 4.100-1.300 7-4.700 7-9V6Z"/><path d="m9 12 2.200 2.200L15.200 10"/>'),
    'file': _s('<path d="M7 3.500h7l4.500 4.500v11a1.500 1.500 0 0 1-1.500 1.500H7A1.500 1.500 0 0 1 5.500 19V5A1.500 1.500 0 0 1 7 3.500Z"/><path d="M14 3.500V8h4.500M8.500 13h7M8.500 16.500h5"/>'),
}

def esc(s):
    return _html.escape(s, quote=True)

import re as _re
_LINK_RE = _re.compile(r'<a href="([a-z0-9\-/.]+\.html)" class="link-underline">(.*?)</a>')
def rich(s, prefix=''):
    """Escape il testo ma lascia passare i soli link interni scritti nei contenuti."""
    out, pos = '', 0
    for m in _LINK_RE.finditer(s):
        out += esc(s[pos:m.start()]) + f'<a href="{prefix}{m.group(1)}" class="link-underline">{esc(m.group(2))}</a>'
        pos = m.end()
    return out + esc(s[pos:])
def jsonld(obj):
    return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False, separators=(',', ':')) + '</script>'

OPENING = [
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "08:30", "closes": "12:30"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "16:00", "closes": "20:00"},
    {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "08:30", "closes": "12:30"},
]

def dentist_ref():
    """Riferimento compatto all'organizzazione (per publisher / provider)."""
    return {"@id": SITE_URL + "/#studio"}

def dentist_full():
    return {
        "@context": "https://schema.org",
        "@type": ["Dentist", "MedicalBusiness"],
        "@id": SITE_URL + "/#studio",
        "name": SITE_NAME,
        "alternateName": ["Studio Colombo", "Dentista Colombo Patti"],
        "url": SITE_URL + "/",
        "logo": SITE_URL + "/assets/logo.png",
        "image": [SITE_URL + "/assets/og-cover.jpg", SITE_URL + "/assets/logo.png"],
        "description": "Studio dentistico di famiglia a Patti (Messina), con tre dentisti: Alfredo, Roberto e Aurora Colombo. Igiene, conservativa, endodonzia, parodontologia, chirurgia orale, implantologia, protesi, ortodonzia, gnatologia, estetica e pedodonzia.",
        "telephone": PHONE_SCHEMA,
        "email": EMAIL,
        "vatID": "IT" + VAT,
        "address": {"@type": "PostalAddress", "streetAddress": "Via Fontanella", "addressLocality": "Patti", "addressRegion": "ME", "postalCode": "98066", "addressCountry": "IT"},
        "geo": {"@type": "GeoCoordinates", "latitude": LAT, "longitude": LNG},
        "areaServed": [{"@type": "City", "name": n} for n in ["Patti", "Gioiosa Marea", "Brolo", "Capo d'Orlando", "Oliveri", "Montagnareale", "Sant'Angelo di Brolo", "Piraino", "Librizzi", "Falcone", "Furnari", "Barcellona Pozzo di Gotto"]]
                      + [{"@type": "AdministrativeArea", "name": "Provincia di Messina"}],
        "openingHoursSpecification": OPENING,
        "medicalSpecialty": ["Dentistry", "Endodontics", "Periodontics", "Orthodontics", "OralSurgery"],
        "founder": [{"@type": "Person", "name": "Alfredo Colombo", "jobTitle": "Odontoiatra"}],
        "employee": [
            {"@type": "Person", "name": "Roberto Colombo", "jobTitle": "Odontoiatra"},
            {"@type": "Person", "name": "Aurora Colombo", "jobTitle": "Odontoiatra"},
        ],
        "knowsLanguage": "it",
        "isAccessibleForFree": False,
        "potentialAction": {"@type": "ReserveAction", "target": {"@type": "EntryPoint", "urlTemplate": SITE_URL + "/prenota.html", "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]}, "result": {"@type": "Reservation", "name": "Prenota una visita"}},
    }

def breadcrumb(items):
    """items: [(nome, url_relativo_alla_root), ...]"""
    return {"@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": SITE_URL + "/" + u if u else SITE_URL + "/"} for i, (n, u) in enumerate(items)]}

FAVICONS = lambda p: (
    f'<link rel="icon" href="{p}favicon.ico" sizes="48x48">'
    f'<link rel="icon" href="{p}assets/icons/icon-192.png" type="image/png" sizes="192x192">'
    f'<link rel="apple-touch-icon" href="{p}assets/icons/apple-touch-icon.png">'
    f'<link rel="manifest" href="{p}site.webmanifest">'
    f'<meta name="theme-color" content="#FBF8F2">'
)
