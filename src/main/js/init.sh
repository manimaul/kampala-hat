#!/usr/bin/env bash

mkdir -p main/js
mkdir ../site/gen
npm init
npm install --save-dev webpack
npm install --save-dev webpack-dev-server
npm install --save-dev style-loader css-loader
npm install --save-dev rx-lite
npm install --save-dev react react-dom react-router
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react
npm install --save-dev react-gmaps
sudo gem install sass
