# AWS SAM Local Sample

## Requirements

- Docker
- Node.js

## Quick Start

### Setup

``` bash
$ npm install -g aws-sam-local
$ sam --version
```

### Validate your template

``` bash
$ sam validate
```

### Invoke function

``` bash
$ sam local invoke Index -e test/event.json
```

### Run a simple RESTful API

``` bash
$ sam local start-api
$ curl http://localhost:3000/products
$ curl -X DELETE http://localhost:3000/products/1
```
