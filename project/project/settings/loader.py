import fnmatch
from manifest_loader.loaders import LoaderABC

class CustomLoader(LoaderABC):
    @staticmethod
    def get_single_match(manifest, key):
        return manifest.get('files').get(key)

    @staticmethod
    def get_multi_match(manifest, pattern):
        matched_files = []
        if pattern == 'entrypoint-js':
          matched_files = [file.replace('static', '') for file in manifest.get('entrypoints') if
                         fnmatch.fnmatch(file, '*.js')]
        elif pattern == 'entrypoint-css':
          matched_files = [file.replace('static', '') for file in manifest.get('entrypoints') if
                         fnmatch.fnmatch(file, '*.css')]
        else :
          matched_keys = [file for file in manifest.get('files').keys() if
                         fnmatch.fnmatch(file, pattern)]
          matched_files = [manifest.get('files').get(file).replace('/static', '') for file in matched_keys]
        return matched_files