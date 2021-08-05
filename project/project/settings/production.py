"""
Override Django Settings.
"""

from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
STAGING_PUBLIC_URL = '127.0.0.1'