import os
import pathlib
from dotenv import load_dotenv

current_file_path = pathlib.Path(__file__).parent.absolute()
load_dotenv(os.path.join(current_file_path, '.env'))

ENV = os.environ.get('DJANGO_ENV', 'local')
print(ENV)

if ENV == 'staging':
    from .staging import *
elif ENV == 'production':
    from .production import *
elif ENV == 'local':
    from .local import *
else:
    from .local import *

# print(DATABASES)
