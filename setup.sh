#!/bin/sh
# This installs the tools

# Install Node Version Manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# Use node v14
nvm install v14
nvm use v14

# install prism
npm install -g @stoplight/prism-cli

# mock OpenAPI spec
prism mock openapi.yaml 

# install apisprout
wget https://github.com/danielgtaylor/apisprout/archive/v1.3.0.tar.gz
tar -zxvf v1.3.0.tar.gz
mv apisprout-1.3.0 apisprout
cd apisprout
go get
go build
./apisprout ../openapi.yml

wget https://github.com/muonsoft/openapi-mock/archive/v0.2.0.tar.gz
tar -zxvf v0.2.0.tar.gz
mv openapi-mock-0.2.0 openapi-mock
cd openapi-mock/cmd/openapi-mock
go get
go build
./openapi-mock serve --specification-url ../../../../openapi.yaml 

sudo gem install fakeit
fakeit --spec openapi.yaml

pip install hmt 
wget https://github.com/meeshkan/hmt/archive/v0.2.22.tar.gz
tar -zxvf v0.2.22.tar.gz
mv hmt-0.2.22 hmt

# Demo unmock 


___

This will conclude the breadth of the xemo 