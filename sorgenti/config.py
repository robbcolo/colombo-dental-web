# -*- coding: utf-8 -*-
"""Configurazione condivisa della build del sito Studio Dentistico Colombo."""
import os

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'sito'))                      # cartella del sito generato
SRC_SCHEDE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'schede-sorgenti')
SITE_URL = 'https://www.studiodentisticocolombo.it'       # DOMINIO SEGNAPOSTO: sostituire con quello reale
SITE_NAME = 'Studio Dentistico Colombo'
TODAY = '2026-10-24'                                      # data per sitemap/lastmod

PHONE = '0941 22749'
PHONE_HREF = '+39094122749'
PHONE_SCHEMA = '+39-0941-22749'
WHATSAPP = '+39 379 152 3085'
WHATSAPP_HREF = '393791523085'
EMAIL = 'colombostudiodentistico@gmail.com'
VAT = '01777580836'
ADDRESS_LINE = 'Via Fontanella, 98066 Patti (ME)'
LAT, LNG = 38.1404, 14.9708
