# Instagram node client
[![codecov](https://codecov.io/gh/francoispqt/instagram-node-client/branch/master/graph/badge.svg)](https://codecov.io/gh/francoispqt/instagram-node-client)
[![Build Status](https://travis-ci.org/francoispqt/instagram-node-client.svg?branch=master)](https://travis-ci.org/francoispqt/instagram-node-client)
[![Known Vulnerabilities](https://snyk.io/test/github/francoispqt/instagram-node-client/badge.svg)](https://snyk.io/test/github/francoispqt/instagram-node-client)


## Get started
Add instagram-client to your project
```bash
npm i instagram-client
```

Use the instagram client
```js
const Instagram = require("instagram-client").v1
const Client = new Instagram({
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
})
```     

## Endpoints
The client is built according to the documentation here: https://www.instagram.com/developer
Each endpoint is available as a property of the client object. Endpoints objects have multiple methods to interact with the Instagram API.
All async method return a Promise or can take an error first callback as last argument

### Users
#### getSelf | [/users/self](https://www.instagram.com/developer/endpoints/users/#get_users_self)
```js
Client.users.getSelf({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getSelfFollows | [/users/self/follows](https://www.instagram.com/developer/endpoints/relationships/#get_users_follows)
```js
Client.users.getSelfFollows({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getSelfFollowedBy | [/users/self/followed-by](https://www.instagram.com/developer/endpoints/relationships/#get_users_followed_by)
```js
Client.users.getSelfFollowedBy({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getSelfRequestedBy | [/users/self/requested-by](https://www.instagram.com/developer/endpoints/relationships/#get_incoming_requests)
```js
Client.users.getSelfRequestedBy({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getRelationshipWithUser | [/users/${id}/relationship](https://www.instagram.com/developer/endpoints/relationships/#get_relationship)
```js
Client.users.getRelationshipWithUser("SOMEUSERID", {
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### updateRelationshipWithUser | [/users/${id}/relationship](https://www.instagram.com/developer/endpoints/relationships/#post_relationship)
```js
```

#### getByID | [/users/${id}](https://www.instagram.com/developer/endpoints/users/#get_users)
```js
Client.users.getByID("SOMEUSERID", {
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

### Relationships
### Media
#### getByID | [/media/${id}](https://www.instagram.com/developer/endpoints/media/#get_media)
#### getByShortcode | [/media/shortcode/${shortcode}](https://www.instagram.com/developer/endpoints/media/#get_media_by_shortcode)
#### search | [/media/search](https://www.instagram.com/developer/endpoints/media/#get_media_search)

### Comments
#### getByMediaID | [/media/${mediaID}/comments](https://www.instagram.com/developer/endpoints/comments/#get_media_comments)
#### create | [/media/${mediaID}/comments](https://www.instagram.com/developer/endpoints/comments/#post_media_comments)
#### del | [/media/${mediaID}/comments/${commentID}](https://www.instagram.com/developer/endpoints/comments/#delete_media_comments)

### Likes
### Tags
### Locations
### Subscriptions

## Basic methods

### Get
### Post
### Del