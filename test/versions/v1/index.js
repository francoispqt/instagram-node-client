/**
 * Test for version 1 of the Instagram API
 * Creates a new client for v1 and a starts a new mock for v1
 */
const Instagram = require("../../../").v1
const endpoints = require("./endpoints")
const testUtils = require("../../utils/test_utils")
const errors = require("../../../lib/errors")

const chai = require("chai")
const expect = chai.expect

module.exports = function() {
    const Client = new Instagram({
        CLIENT_ID: process.env.INSTAGRAM_CLIENT_ID,
        CLIENT_SECRET: process.env.INSTAGRAM_CLIENT_SECRET,
    })

    // Api tests
    describe("#Client.api.call", () => {
        testUtils.bootstrapStubTest(Client)
        it("Should throw a ResponseError if receives error from Instagram API - Promise syntax", done => {
            testUtils.stubApiRequestError(Client)
            Client.api
                .call({
                    uri: "/v1/users/234961553",
                })
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(
                        Client.api.errors.ResponseError
                    )
                    done()
                })
        })

        it("Should throw a ResponseError if receives error from Instagram API - Callback syntax", done => {
            testUtils.stubApiRequestError(Client)
            Client.api.call(
                {
                    uri: "/v1/users/234961553",
                },
                (error, result) => {
                    try {
                        expect(error).to.be.an.instanceof(
                            Client.api.errors.ResponseError
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("It should call request package with the correct parameters", done => {
            testUtils.stubApiRequest(Client)
            Client.api
                .call({
                    uri: "/v1/users/234961553",
                })
                .then(() => {
                    const reqArgs = Client.api.request.getCall(0).args[0]
                    expect(reqArgs.uri).to.equal(
                        Client.api.opts.baseURI + "/v1/users/234961553"
                    )
                    done()
                })
                .catch(done)
        })
        // signAll enabled
        it("Should sign the request if signAll is set", done => {
            Client.opts.signAll = true
            testUtils.stubApiRequest(Client)
            Client.api
                .call({
                    uri: "/v1/users/234961553",
                })
                .then(() => {
                    const reqArgs = Client.api.request.getCall(0).args[0]
                    expect(reqArgs.qs.sig).to.not.be.null
                    Client.opts.signAll = false
                    done()
                })
                .catch(done)
        })
        // signAll disabled
        it("Should should not sign the request if signAll is not set", done => {
            testUtils.stubApiRequest(Client)
            Client.api
                .call({
                    uri: "/v1/users/234961553",
                    qs: {},
                })
                .then(() => {
                    const reqArgs = Client.api.request.getCall(0).args[0]
                    expect(reqArgs.qs.sig).to.be.undefined
                    done()
                })
                .catch(done)
        })
    })

    describe("#errors.ResponseError", () => {
        it("Should set the error message accordingly", () => {
            const testErrorMessage = "test error message"
            const err = new errors.ResponseError({
                body: {
                    meta: {
                        error_message: testErrorMessage
                    }
                }
            })

            expect(err.message).to.equal(testErrorMessage)
        })

        it("Should set the error message accordingly", () => {
            const testErrorMessage = "test error message"
            const err = new errors.ResponseError({
                body: {
                    error_message: testErrorMessage
                }
            })

            expect(err.message).to.equal(testErrorMessage)
        })
    })

    describe("#Client.api.signRequest", () => {
        it("Should create the right hash", () => {
            const hash = Client.api.signRequest({
                uri: "/media/657988443280050001_25025320",
                qs: {
                    access_token: "fb2e77d.47a0479900504cb3ab4a1f626d174d2d",
                    count: 10,
                },
                CLIENT_SECRET: "6dc1787668c64c939929c17683d7cb74",
            })

            expect(hash).to.equal(
                "260634b241a6cfef5e4644c205fb30246ff637591142781b86e2075faf1b163a"
            )
        })
    })

    // Client tests
    // Test the client creation
    describe("#Client.get", function() {
        this.timeout(20000)
        testUtils.bootstrapTest(Client)
        it("Should call the api with the right parameters", done => {
            Client.get("/users/234961553", {
                qs: {
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                sign: true,
            })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/234961553")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    // check method
                    expect(callOpts.method).to.equal("GET")
                    // check signing
                    expect(callOpts.sign).to.equal(true)
                    done()
                })
                .catch(done)
        })

        it("Should add the leading slash to the uri", done => {
            Client.get("users/234961553", {
                qs: {
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
            })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/234961553")
                    done()
                })
                .catch(done)
        })
    })

    // Test the client creation
    describe("#Client.post", () => {
        testUtils.bootstrapTest(Client)
        it("Should call the api with the right parameters", done => {
            Client.post("/users/234961553/relationship", {
                qs: {
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
                    action: "follow",
                },
                body: {
                    action: "follow",
                },
                sign: true,
            })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/234961553/relationship")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    // check method
                    expect(callOpts.method).to.equal("POST")
                    done()
                })
                .catch(error => {
                    console.log(error)
                    done(error)
                })
        })

        it("Should add the leading slash to the uri", done => {
            Client.post("users/234961553/relationship", {
                qs: {
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
                    action: "follow",
                },
                body: {
                    action: "follow",
                },
                sign: true,
            })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/234961553/relationship")
                    // check method
                    expect(callOpts.method).to.equal("POST")
                    done()
                })
                .catch(error => {
                    console.log(error)
                    done(error)
                })
        })
    })

    // Test the client creation
    describe("#Client.del", () => {
        testUtils.bootstrapStubTest(Client)
        it("Should call the api with the right parameters", done => {
            testUtils.stubApiRequest(Client)
            Client.del("/users/234961553", {
                qs: {
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                body: {},
                sign: true,
            })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/234961553")
                    // check accessToken
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    // check method
                    expect(callOpts.method).to.equal("DELETE")
                    done()
                })
                .catch(done)
        })

        it("Should add the leading slash to the uri", done => {
            testUtils.stubApiRequest(Client)
            Client.del("users/234961553", {})
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/users/234961553")
                    // check method
                    expect(callOpts.method).to.equal("DELETE")
                    done()
                })
                .catch(done)
        })
    })

    // test the client endpoints
    endpoints(Client)
}
