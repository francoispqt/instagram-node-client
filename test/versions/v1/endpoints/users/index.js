const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    describe("#users.getSelf", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getSelf({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/self")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    // check data
                    expect(result.data).to.not.be.undefined
                    // check meta
                    expect(result.meta.code).to.be.equal(200)
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getSelf(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/users/self")
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        // check data
                        expect(result.data).to.not.be.undefined
                        // check meta
                        expect(result.meta.code).to.be.equal(200)
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getSelf({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .getSelf({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.getSelf({}, (error, result) => {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.be.equal(
                    "You must provide an access token"
                )
                done()
            })
        })
    })

    describe("#users.getSelfFollows", () => {
        testUtils.bootstrapTest(Client)

        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getSelfFollows({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/self/follows")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getSelfFollows(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/users/self/follows")
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getSelfFollows({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .getSelfFollows({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.getSelfFollows({}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.getSelfFollowedBy", () => {
        testUtils.bootstrapTest(Client)

        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getSelfFollowedBy({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/self/followed-by")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    done()
                })
                .catch(error => {
                    console.log(error)
                    done(error)
                })
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getSelfFollowedBy(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/users/self/followed-by"
                        )
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getSelfFollowedBy({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .getSelfFollowedBy({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.getSelfFollowedBy({}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.getSelfRequestedBy", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getSelfRequestedBy({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/self/requested-by")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getSelfRequestedBy(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/users/self/requested-by"
                        )
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getSelfRequestedBy({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .getSelfRequestedBy({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.getSelfRequestedBy({}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.getRelationshipWithUser", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getRelationshipWithUser("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal(
                        "/v1/users/234961553/relationship"
                    )
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getRelationshipWithUser(
                "234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/users/234961553/relationship"
                        )
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getRelationshipWithUser("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .getRelationshipWithUser("234961553", {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.getRelationshipWithUser(
                "234961553",
                {},
                (error, result) => {
                    try {
                        expect(error).to.be.an.instanceof(Error)
                        expect(error.message).to.be.equal(
                            "You must provide an access token"
                        )
                        return done()
                    } catch (error) {
                        return done(error)
                    }
                }
            )
        })
        it("Throws an error if no user id is provided - Promise syntax", done => {
            Client.users
                .getRelationshipWithUser(null, {})
                .then(() => {
                    return done(new Error("Should not be called"))
                })
                .catch(error => {
                    try {
                        expect(error).to.be.an.instanceof(Error)
                        expect(error.message).to.be.equal(
                            "You must provide a user id"
                        )
                        return done()
                    } catch (error) {
                        return done(error)
                    }
                })
        })
        it("Throws an error if no user id is provided - Callback syntax", done => {
            Client.users.getRelationshipWithUser(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a user id"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.updateRelationshipWithUser", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .updateRelationshipWithUser("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    action: "follow",
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal(
                        "/v1/users/234961553/relationship"
                    )
                    // check method
                    expect(callOpts.method).to.equal("POST")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    // check action
                    expect(callOpts.formData.action).to.equal("follow")
                    done()
                })
                .catch(done)
        })
        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.updateRelationshipWithUser(
                "234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    action: "follow",
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/users/234961553/relationship"
                        )
                        // check method
                        expect(callOpts.method).to.equal("POST")
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        // check action
                        expect(callOpts.formData.action).to.equal("follow")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .updateRelationshipWithUser("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    action: "follow",
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .updateRelationshipWithUser("SOMEUSERID", {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.updateRelationshipWithUser(
                "SOMEUSERID",
                {},
                (error, result) => {
                    try {
                        expect(error).to.be.an.instanceof(Error)
                        expect(error.message).to.be.equal(
                            "You must provide an access token"
                        )
                        return done()
                    } catch (error) {
                        return done(error)
                    }
                }
            )
        })
        it("Throws an error if no user id is provided - Promise syntax", done => {
            Client.users
                .updateRelationshipWithUser(null, {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    action: "approve",
                })
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a user id"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no user id is provided - Callback syntax", done => {
            Client.users.updateRelationshipWithUser(
                null,
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    action: "follow",
                },
                (error, result) => {
                    try {
                        expect(error).to.be.an.instanceof(Error)
                        expect(error.message).to.be.equal(
                            "You must provide a user id"
                        )
                        return done()
                    } catch (error) {
                        return done(error)
                    }
                }
            )
        })
    })

    //@ToDo
    describe("#users.getByID", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getByID("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/234961553")
                    // check method
                    expect(callOpts.method).to.equal("GET")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    return done()
                })
                .catch(done)
        })
        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getByID(
                "234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/users/234961553")
                        // check method
                        expect(callOpts.method).to.equal("GET")
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getByID("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        //@ToDo
        it("Throws an error if no user id is provided - Promise syntax", done => {
            Client.users
                .getByID(null)
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a user id"
                    )
                    return done()
                })
                .catch(done)
        })

        it("Throws an error if no user id is provided - Callback syntax", done => {
            Client.users.getByID(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a user id"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.getUserRecentMedia", function() {
        this.timeout(10000)
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getUserRecentMedia("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    count: 10,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal(
                        "/v1/users/234961553/media/recent"
                    )
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    // check count
                    expect(callOpts.qs.count).to.equal(10)
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getUserRecentMedia(
                "234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    count: 10,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/users/234961553/media/recent"
                        )
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        // check count
                        expect(callOpts.qs.count).to.equal(10)
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getUserRecentMedia("234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no user id is provided - Promise syntax", done => {
            Client.users
                .getUserRecentMedia(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a user id"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no user id is provided - Callback syntax", done => {
            Client.users.getUserRecentMedia(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a user id"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.getSelfRecentMedia", function() {
        this.timeout(10000)
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getSelfRecentMedia({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/self/media/recent")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getSelfRecentMedia(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/users/self/media/recent"
                        )
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getSelfRecentMedia({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .getSelfRecentMedia({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.getSelfRecentMedia({}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.getSelfMediaLiked", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .getSelfMediaLiked({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/self/media/liked")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.getSelfMediaLiked(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/users/self/media/liked"
                        )
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getSelfMediaLiked({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.users
                .getSelfMediaLiked({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                })
                .catch(done)
        })
        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.getSelfMediaLiked({}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide an access token"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })

    describe("#users.search", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.users
                .search({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    q: "testQ",
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/search")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    // check q
                    expect(callOpts.qs.q).to.equal("testQ")
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.users.search(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    q: "testQ",
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/users/search")
                        // check accessToken
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        // check q
                        expect(callOpts.qs.q).to.equal("testQ")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.users
                .getSelfMediaLiked({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no query is provided - Promise syntax", done => {
            Client.users
                .search({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must search with a q"
                    )
                    return done()
                })
                .catch(done)
        })

        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.users.search({}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must search with a q"
                    )
                    return done()
                } catch (error) {
                    return done(error)
                }
            })
        })
    })
}
