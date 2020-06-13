from urllib import request
from http_types import HttpExchange
from http_types.utils import RequestBuilder, ResponseBuilder, HttpExchangeWriter
from io import StringIO

def make_pokemon_request(path):
    req = request.Request('http://localhost:8000%s' % path, headers={
        'user-agent': 'python', 'Host': 'pokeapi.co', 'X-Meeshkan-Scheme': 'https'
    })
    res = request.urlopen(req)
    res.read()

PATHS = [
    '/api/v2/pokemon/1/',
    '/api/v2/pokemon/2/',
    '/api/v2/pokemon/3/',
    '/api/v2/pokemon/4/',
    '/api/v2/pokemon/5/',
    '/api/v2/pokemon/6/',
    '/api/v2/pokemon/7/',
    '/api/v2/pokemon/8/',
    '/api/v2/pokemon/9/',
    '/api/v2/pokemon/10/',
    '/api/v2/pokemon/',
    '/api/v2/type/1/',
    '/api/v2/type/2/',
    '/api/v2/type/3/',
    '/api/v2/type/4/',
    '/api/v2/type/5/',
    '/api/v2/type/6/',
    '/api/v2/type/7/',
    '/api/v2/type/8/',
    '/api/v2/type/9/',
    '/api/v2/type/10/',
    '/api/v2/type/',
    '/api/v2/ability/1/',
    '/api/v2/ability/2/',
    '/api/v2/ability/3/',
    '/api/v2/ability/4/',
    '/api/v2/ability/5/',
    '/api/v2/ability/6/',
    '/api/v2/ability/7/',
    '/api/v2/ability/8/',
    '/api/v2/ability/9/',
    '/api/v2/ability/10/',
    '/api/v2/ability/',
]

for x, path in enumerate(PATHS):
    print("  ** Calling https://pokeapi.co%s, path %d of %d" % (path, x + 1, len(PATHS)))
    make_pokemon_request(path)
