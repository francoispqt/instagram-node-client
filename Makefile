.PHONY: build
build: 
	npm i
	./node_modules/.bin/babel lib -d bin

.PHONY: test
test: 
	npm test

.PHONY: babel
babel: 
	./node_modules/.bin/babel lib -d bin

.PHONY: doc
doc: 
	./node_modules/jsdoc-to-markdown/bin/cli.js "./lib/**/**/*.js" > ./doc/api.md 
	cat ./doc/readme.md ./doc/api.md > README.md

