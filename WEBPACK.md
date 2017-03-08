####initial setup
```bash
cd src/main/js
sh init.sh
```

####gen css
```bash
cd src/main/js
sass style.scss ../resources/public/style.css
```

####run dev server
```bash
cd src/main/js
node_modules/.bin/webpack-dev-server --open
```

####debug build
```bash
cd src/main/js
PROD_ENV=0 node_modules/.bin/webpack
```

####release build
```bash
cd src/main/js
PROD_ENV=1 node_modules/.bin/webpack
```
