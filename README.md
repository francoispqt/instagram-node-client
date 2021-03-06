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
#### getSelf | [GET/users/self](https://www.instagram.com/developer/endpoints/users/#get_users_self)
```js
Client.users.getSelf({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getSelfFollows | [GET/users/self/follows](https://www.instagram.com/developer/endpoints/relationships/#get_users_follows)
```js
Client.users.getSelfFollows({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getSelfFollowedBy | [GET/users/self/followed-by](https://www.instagram.com/developer/endpoints/relationships/#get_users_followed_by)
```js
Client.users.getSelfFollowedBy({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getSelfRequestedBy | [GET/users/self/requested-by](https://www.instagram.com/developer/endpoints/relationships/#get_incoming_requests)
```js
Client.users.getSelfRequestedBy({
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### getRelationshipWithUser | [GET/users/${id}/relationship](https://www.instagram.com/developer/endpoints/relationships/#get_relationship)
```js
Client.users.getRelationshipWithUser("SOMEUSERID", {
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

#### updateRelationshipWithUser | [POST/users/${id}/relationship](https://www.instagram.com/developer/endpoints/relationships/#post_relationship)
```js
Client.users.updateRelationshipWithUser("SOMEUSERID", {
    accessToken: "SOMEACCESSTOKEN",
    action: "follow",
})
.then(result => {})
.catch(error => {})
```

#### getByID | [GET/users/${id}](https://www.instagram.com/developer/endpoints/users/#get_users)
```js
Client.users.getByID("SOMEUSERID", {
    accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
.catch(error => {})
```

### Media
#### getByID | [GET/media/${id}](https://www.instagram.com/developer/endpoints/media/#get_media)
#### getByShortcode | [GET/media/shortcode/${shortcode}](https://www.instagram.com/developer/endpoints/media/#get_media_by_shortcode)
#### search | [GET/media/search](https://www.instagram.com/developer/endpoints/media/#get_media_search)

### Comments
#### getByMediaID | [GET/media/${mediaID}/comments](https://www.instagram.com/developer/endpoints/comments/#get_media_comments)
#### create | [POST/media/${mediaID}/comments](https://www.instagram.com/developer/endpoints/comments/#post_media_comments)
#### del | [DELETE/media/${mediaID}/comments/${commentID}](https://www.instagram.com/developer/endpoints/comments/#delete_media_comments)

### Likes
#### getByMedia | [GET/media/${mediaID}/likes](https://www.instagram.com/developer/endpoints/likes/#get_media_likes)
#### likeMedia | [POST/media/${mediaID}/likes](https://www.instagram.com/developer/endpoints/likes/#post_likes) 
#### unlikeMedia | [DELETE/media/${mediaID}/likes](https://www.instagram.com/developer/endpoints/likes/#delete_likes)

### Tags
#### getByName | [GET/tags/${tagName}](https://www.instagram.com/developer/endpoints/tags/#get_tags)
#### getMediaRecent | [GET/tags/${tagName}/media/recent](https://www.instagram.com/developer/endpoints/tags/#get_tags_media_recent)
#### search | [GET/tags/search](https://www.instagram.com/developer/endpoints/tags/#get_tags_search)

### Locations
#### getByID | [GET/locations/${id}](https://www.instagram.com/developer/endpoints/locations/#get_locations)
#### getMediaRecent | [GET/locations/${id}/media/recent](https://www.instagram.com/developer/endpoints/locations/#get_locations_media_recent)
#### search | [GET/locations/search](https://www.instagram.com/developer/endpoints/locations/#get_locations_search)

### Subscriptions
[Instagram doc](https://www.instagram.com/developer/subscriptions/)
#### list
#### create
#### delete

## Basic methods

### Get
### Post
### Del

## API Doc
## Classes

<dl>
<dt><a href="#Comments">Comments</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.comments</p>
<pre><code class="language-javascript">// example
Client.comments.create(&quot;MEDIAID&quot;, {
 text: &quot;some comment&quot;,
 accessToken: &quot;SOMEACCESSTOKEN&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#Likes">Likes</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.likes</p>
<pre><code class="language-javascript">// example
Client.likes.getByMedia(&quot;MEDIAID&quot;, {
 accessToken: &quot;SOMEACCESSTOKEN&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#Locations">Locations</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.locations</p>
<pre><code class="language-javascript">// example
Client.locations.getByID(&quot;LOCATIONID&quot;, {
 accessToken: &quot;SOMEACCESSTOKEN&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#Media">Media</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.media</p>
<pre><code class="language-javascript">// example
Client.media.getByID(&quot;SOMEMEDIAID&quot;, {
 accessToken: &quot;SOMEACCESSTOKEN&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#OAuth">OAuth</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.oauth</p>
<pre><code class="language-javascript">// example
Client.oauth.getAccessToken({
 grantType: &quot;&quot;,
 redirectURI: &quot;&quot;,
 code: &quot;&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#Subscriptions">Subscriptions</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.subscriptions</p>
<pre><code class="language-javascript">// example
Client.subscriptions.create({
 object: &quot;&quot;,
 aspect: &quot;&quot;,
 verifyToken: &quot;&quot;,
 callbackURL: &quot;&quot;,
 accessToken: &quot;SOMEACCESSTOKEN&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#Tags">Tags</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.tags</p>
<pre><code class="language-javascript">// example
Client.tags.getByName(&quot;travel&quot;, {
 accessToken: &quot;SOMEACCESSTOKEN&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#Users">Users</a> ⇐ <code>Endpoint</code></dt>
<dd><p>Client.users</p>
<pre><code class="language-javascript">// example
Client.users.getSelf({
 accessToken: &quot;SOMEACCESSTOKEN&quot;,
})
.then(result =&gt; {})
</code></pre>
</dd>
<dt><a href="#V1">V1</a> ⇐ <code>InstagramClient</code></dt>
<dd><p>InstagramClient V1</p>
<pre><code class="language-javascript">const Instagram = require(&quot;instragram-client&quot;).v1

const Client = new Instagram({
 CLIENT_ID: &quot;SOMECLIENTID&quot;,
 CLIENT_SECRET: &quot;SOMECLIENTSECRET&quot;,
})
</code></pre>
</dd>
</dl>

<a name="Comments"></a>

## Comments ⇐ <code>Endpoint</code>
Client.comments
```js
// example
Client.comments.create("MEDIAID", {
 text: "some comment",
 accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [Comments](#Comments) ⇐ <code>Endpoint</code>
    * [.create(id, opts, cb)](#Comments+create)
    * [.del(id, opts, cb)](#Comments+del)
    * [.getByMediaID(id, opts, cb)](#Comments+getByMediaID)

<a name="Comments+create"></a>

### comments.create(id, opts, cb)
Creates a comment for a media by media id

**Kind**: instance method of [<code>Comments</code>](#Comments)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media ID |
| opts | <code>object</code> | the options object { accessToken, sign, text } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Comments+del"></a>

### comments.del(id, opts, cb)
Deletes a comment for a media by media id

**Kind**: instance method of [<code>Comments</code>](#Comments)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media ID |
| opts | <code>object</code> | the options object { accessToken, sign, text } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Comments+getByMediaID"></a>

### comments.getByMediaID(id, opts, cb)
Get comments for a media by media id

**Kind**: instance method of [<code>Comments</code>](#Comments)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media ID |
| opts | <code>object</code> | the options object { accessToken, sign, text } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Likes"></a>

## Likes ⇐ <code>Endpoint</code>
Client.likes
```js
// example
Client.likes.getByMedia("MEDIAID", {
 accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [Likes](#Likes) ⇐ <code>Endpoint</code>
    * [.getByMedia(id, opts, cb)](#Likes+getByMedia)
    * [.likeMedia(id, opts, cb)](#Likes+likeMedia)
    * [.unlikeMedia(id, opts, cb)](#Likes+unlikeMedia)

<a name="Likes+getByMedia"></a>

### likes.getByMedia(id, opts, cb)
Gets likes for a media by media id

**Kind**: instance method of [<code>Likes</code>](#Likes)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media ID |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Likes+likeMedia"></a>

### likes.likeMedia(id, opts, cb)
Like a media by media id with user from accessToken

**Kind**: instance method of [<code>Likes</code>](#Likes)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media ID |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Likes+unlikeMedia"></a>

### likes.unlikeMedia(id, opts, cb)
Unlike a media by media id with user from accessToken

**Kind**: instance method of [<code>Likes</code>](#Likes)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media ID |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Locations"></a>

## Locations ⇐ <code>Endpoint</code>
Client.locations
```js
// example
Client.locations.getByID("LOCATIONID", {
 accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [Locations](#Locations) ⇐ <code>Endpoint</code>
    * [.getByID(id, opts, cb)](#Locations+getByID)
    * [.getMediaRecent(id, opts, cb)](#Locations+getMediaRecent)
    * [.search(opts, cb)](#Locations+search)

<a name="Locations+getByID"></a>

### locations.getByID(id, opts, cb)
Gets a location by id

**Kind**: instance method of [<code>Locations</code>](#Locations)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the location ID |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Locations+getMediaRecent"></a>

### locations.getMediaRecent(id, opts, cb)
Gets recent media for location by location id

**Kind**: instance method of [<code>Locations</code>](#Locations)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the location ID |
| opts | <code>object</code> | the options object { accessToken, sign, maxTagID, minTagID } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Locations+search"></a>

### locations.search(opts, cb)
Search locations

**Kind**: instance method of [<code>Locations</code>](#Locations)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign, lat, lng, facebookPlacesID } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Media"></a>

## Media ⇐ <code>Endpoint</code>
Client.media
```js
// example
Client.media.getByID("SOMEMEDIAID", {
 accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [Media](#Media) ⇐ <code>Endpoint</code>
    * [.getByID(id, opts, cb)](#Media+getByID)
    * [.getByShortcode(id, opts, cb)](#Media+getByShortcode)
    * [.search(id, opts, cb)](#Media+search)

<a name="Media+getByID"></a>

### media.getByID(id, opts, cb)
Gets a media by id

**Kind**: instance method of [<code>Media</code>](#Media)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media ID |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Media+getByShortcode"></a>

### media.getByShortcode(id, opts, cb)
Gets a media by shortcode

**Kind**: instance method of [<code>Media</code>](#Media)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media shortcode |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Media+search"></a>

### media.search(id, opts, cb)
Search media by locations

**Kind**: instance method of [<code>Media</code>](#Media)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the media shortcode |
| opts | <code>object</code> | the options object { accessToken, sign, lng, lat, distance } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="OAuth"></a>

## OAuth ⇐ <code>Endpoint</code>
Client.oauth
```js
// example
Client.oauth.getAccessToken({
 grantType: "",
 redirectURI: "",
 code: "",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [OAuth](#OAuth) ⇐ <code>Endpoint</code>
    * [.getAccessToken(opts, cb)](#OAuth+getAccessToken)
    * [.getAuthURL(opts)](#OAuth+getAuthURL)

<a name="OAuth+getAccessToken"></a>

### oAuth.getAccessToken(opts, cb)
It returns the accessToken

**Kind**: instance method of [<code>OAuth</code>](#OAuth)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { code, grantType, redirectURI } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="OAuth+getAuthURL"></a>

### oAuth.getAuthURL(opts)
It returns the authURL

**Kind**: instance method of [<code>OAuth</code>](#OAuth)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { CLIENT_ID, CLIENT_SECRET, responseType, redirectURI, scope } |

<a name="Subscriptions"></a>

## Subscriptions ⇐ <code>Endpoint</code>
Client.subscriptions
```js
// example
Client.subscriptions.create({
 object: "",
 aspect: "",
 verifyToken: "",
 callbackURL: "",
 accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [Subscriptions](#Subscriptions) ⇐ <code>Endpoint</code>
    * [.create(opts, cb)](#Subscriptions+create)
    * [.list(opts, cb)](#Subscriptions+list)
    * [.del(opts, cb)](#Subscriptions+del)

<a name="Subscriptions+create"></a>

### subscriptions.create(opts, cb)
Creates a subscription

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign, object, aspect, verifyToken, callbackURL } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Subscriptions+list"></a>

### subscriptions.list(opts, cb)
Lists the subscriptions for the client

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign, object, aspect, verifyToken, callbackURL } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Subscriptions+del"></a>

### subscriptions.del(opts, cb)
Deletes subscriptions for the client

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign, object, aspect, verifyToken, callbackURL } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Tags"></a>

## Tags ⇐ <code>Endpoint</code>
Client.tags
```js
// example
Client.tags.getByName("travel", {
 accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [Tags](#Tags) ⇐ <code>Endpoint</code>
    * [.getByName(tagName, opts, cb)](#Tags+getByName)
    * [.getMediaRecent(tagName, opts, cb)](#Tags+getMediaRecent)
    * [.search(tagName, opts, cb)](#Tags+search)

<a name="Tags+getByName"></a>

### tags.getByName(tagName, opts, cb)
Gets a tag by name

**Kind**: instance method of [<code>Tags</code>](#Tags)  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | the tag name |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Tags+getMediaRecent"></a>

### tags.getMediaRecent(tagName, opts, cb)
Gets a tag's recent media by tag name

**Kind**: instance method of [<code>Tags</code>](#Tags)  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | the tag name |
| opts | <code>object</code> | the options object { accessToken, sign, minTagID, maxTaxID, count } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Tags+search"></a>

### tags.search(tagName, opts, cb)
Searches a tag by tag name

**Kind**: instance method of [<code>Tags</code>](#Tags)  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | the tag name |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users"></a>

## Users ⇐ <code>Endpoint</code>
Client.users
```js
// example
Client.users.getSelf({
 accessToken: "SOMEACCESSTOKEN",
})
.then(result => {})
```

**Kind**: global class  
**Extends**: <code>Endpoint</code>  

* [Users](#Users) ⇐ <code>Endpoint</code>
    * [.getSelf(opts, cb)](#Users+getSelf)
    * [.getSelfFollows(opts, cb)](#Users+getSelfFollows)
    * [.getSelfFollowedBy(opts, cb)](#Users+getSelfFollowedBy)
    * [.getSelfRequestedBy(opts, cb)](#Users+getSelfRequestedBy)
    * [.getRelationshipWithUser(id, opts, cb)](#Users+getRelationshipWithUser)
    * [.updateRelationshipWithUser(id, opts, cb)](#Users+updateRelationshipWithUser)
    * [.getByID(id, opts, cb)](#Users+getByID)
    * [.getUserRecentMedia(id, opts, cb)](#Users+getUserRecentMedia)
    * [.getSelfRecentMedia(opts, cb)](#Users+getSelfRecentMedia)
    * [.getSelfMediaLiked(opts, cb)](#Users+getSelfMediaLiked)
    * [.search(opts, cb)](#Users+search)

<a name="Users+getSelf"></a>

### users.getSelf(opts, cb)
Gets the user from the access token

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getSelfFollows"></a>

### users.getSelfFollows(opts, cb)
Gets the users followed by the user from the access token

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getSelfFollowedBy"></a>

### users.getSelfFollowedBy(opts, cb)
Gets the user's follower of the user from the access token

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getSelfRequestedBy"></a>

### users.getSelfRequestedBy(opts, cb)
Gets the pending follow requests of the user from the access token

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getRelationshipWithUser"></a>

### users.getRelationshipWithUser(id, opts, cb)
Gets the relationship between a user and the user from the access token

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the ID of the user to check the relatioship with the accessToken user |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+updateRelationshipWithUser"></a>

### users.updateRelationshipWithUser(id, opts, cb)
Updates the relationship between a user and the user from the access token

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the ID of the user to check the relatioship with the accessToken user |
| opts | <code>object</code> | the options object { accessToken, sign, action } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getByID"></a>

### users.getByID(id, opts, cb)
Gets a user by ID

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the ID of the user to get |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getUserRecentMedia"></a>

### users.getUserRecentMedia(id, opts, cb)
Gets a user's recent media by user ID

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the ID of the user to get |
| opts | <code>object</code> | the options object { accessToken, sign, count } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getSelfRecentMedia"></a>

### users.getSelfRecentMedia(opts, cb)
Gets a self recent media from the accessToken

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+getSelfMediaLiked"></a>

### users.getSelfMediaLiked(opts, cb)
Gets a self media liked from the accessToken

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="Users+search"></a>

### users.search(opts, cb)
Search a users

**Kind**: instance method of [<code>Users</code>](#Users)  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { accessToken, sign, q } |
| cb | <code>function</code> | callback called if paseed, otherwise returns a promise |

<a name="V1"></a>

## V1 ⇐ <code>InstagramClient</code>
InstagramClient V1
```js
const Instagram = require("instragram-client").v1

const Client = new Instagram({
 CLIENT_ID: "SOMECLIENTID",
 CLIENT_SECRET: "SOMECLIENTSECRET",
}) 
```

**Kind**: global class  
**Extends**: <code>InstagramClient</code>  

* [V1](#V1) ⇐ <code>InstagramClient</code>
    * [new V1(opts)](#new_V1_new)
    * [.get(endpoint, opts, cb)](#InstagramClient+get)
    * [.post(endpoint, opts, formData, cb)](#InstagramClient+post)
    * [.del(endpoint, opts, formData, cb)](#InstagramClient+del)

<a name="new_V1_new"></a>

### new V1(opts)

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>object</code> | the options object { CLIENT_ID, CLIENT_SECRET } |

<a name="InstagramClient+get"></a>

### v1.get(endpoint, opts, cb)
**Kind**: instance method of [<code>V1</code>](#V1)  

| Param | Type |
| --- | --- |
| endpoint | <code>string</code> | 
| opts | <code>object</code> | 
| cb | <code>function</code> | 

<a name="InstagramClient+post"></a>

### v1.post(endpoint, opts, formData, cb)
**Kind**: instance method of [<code>V1</code>](#V1)  

| Param | Type |
| --- | --- |
| endpoint | <code>string</code> | 
| opts | <code>object</code> | 
| formData | <code>object</code> | 
| cb | <code>function</code> | 

<a name="InstagramClient+del"></a>

### v1.del(endpoint, opts, formData, cb)
**Kind**: instance method of [<code>V1</code>](#V1)  

| Param | Type |
| --- | --- |
| endpoint | <code>string</code> | 
| opts | <code>object</code> | 
| formData | <code>object</code> | 
| cb | <code>function</code> | 

