
## Get started
```
npm i 
npm run dev
npm run test:cov
```
## OpenAPI Mock Server Tool Comparison

- unmock
- openapi-mock
- api-sprout
- prism

#### Apisprout

OpenAPI mock built with the motivation to control response generation in a non intrusive manner to support development against a contract.

##### Features
- radnom or static responses
- request validation for json and mutlipart/form-data responses


##### Installation
_make sure you are using ruby v2.7.1, if you have rvm use `rvm install 2.7.1` first_
```
gem install fakeit
```

##### Usage

    $ fakeit --spec <Local file or remote url>

Command line options:

    $ fakeit --help
    usage:
        --spec               spec file uri (required)
        -p, --port           custom port
        -q, --quiet          mute request and response log
        --permissive         log validation error as warning instead of denying request
        --use-example        use example provided in spec if exists
        --static             generate static response
        --static-types       generate static value for specified types, e.g. --static-types integer,string
        --static-properties  generate static value for specified properties, e.g. --static-properties id,uuid

    other options:
        -v, --version
        -h, --help

    example:
    $ fakeit --spec openapi.yml -p 3333 --static
    $ fakeit --spec openapi.yml -p 3333 --static-types

### apiaprout

Lightweight, blazing fast, cross-platform OpenAPI 3 mock server with Validation written in golang

##### Features
- radnom or static responses
- request validation for json and mutlipart/form-data responses
- health check


##### Installation
_make sure you have golang in your path_
```
go get github.com/danielgtaylor/apisprout
```

##### Usage

    $ ./apisproute <Local file or remote url>
Usage:
  apisprout [flags] FILE

Examples:
  # Basic usage
  apisprout openapi.yaml

  # Validate server name and use base path
  apisprout --validate-server openapi.yaml

  # Fetch API via HTTP with custom auth header
  apisprout -H 'Authorization: abc123' http://example.com/openapi.yaml

Flags:
 

Command line options:

    $ apisprout --help
    usage:
        --add-server string   Add a new valid server URL, use with --validate-server
        --disable-cors        Disable CORS headers
        -H, --header string       Add a custom header when fetching API
        -h, --help                help for apisprout
        -p, --port int            HTTP port (default 8000)
            --validate-request    Check request data structure
        -s, --validate-server     Check scheme/hostname/basepath 
        -w, --watch               Reload when input file changes

    example:
    $ ./apisprout -s openapi.yml
    $ ./apisprout openapi.yml -p 3333