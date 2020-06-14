
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

#### Fakeit

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