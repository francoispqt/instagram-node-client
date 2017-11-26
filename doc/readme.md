# Instagram node client
[![codecov](https://codecov.io/gh/francoispqt/instagram-node-client/branch/master/graph/badge.svg)](https://codecov.io/gh/francoispqt/instagram-node-client)
[![Build Status](https://travis-ci.org/francoispqt/instagram-node-client.svg?branch=master)](https://travis-ci.org/francoispqt/instagram-node-client)

# Get started
```bash
npm i instagram-client
```
```js
const Instagram = require("instagram-client").v1
const Client = new Instagram({
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
})
```

