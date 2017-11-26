const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    describe("#tags.getByName", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.tags
                .getByName("DUMMYTAGNAME", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    // @ToDo
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/tags/DUMMYTAGNAME")
                    done()
                })
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.tags.getByName(
                "DUMMYTAGNAME",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/tags/DUMMYTAGNAME")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.tags
                .getByName("DUMMYTAGNAME", {
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

        it("Throws an error if no tagName is provided - Promise syntax", done => {
            Client.tags
                .getByName(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a tag name"
                    )
                    done()
                })
        })

        it("Throws an error if no tagName is provided - Callback syntax", done => {
            Client.tags.getByName(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a tag name"
                    )
                    done()
                } catch (error) {
                    done(error)
                }
            })
        })
    })

    describe("#tags.getMediaRecent", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.tags
                .getMediaRecent("DUMMYTAGNAME", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.tags.getMediaRecent(
                "DUMMYTAGNAME",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/tags/DUMMYTAGNAME/media/recent"
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.tags
                .getMediaRecent("DUMMYTAGNAME", {
                    sign: true,
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    // check sig
                    expect(callOpts.qs.sig).to.not.be.undefined
                    done()
                })
                .catch(done)
        })

        it("Throws an error if no tagName is provided - Promise syntax", done => {
            Client.tags
                .getMediaRecent(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a tag name"
                    )
                    done()
                })
        })

        it("Throws an error if no tagName is provided - Callback syntax", done => {
            Client.tags.getMediaRecent(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a tag name"
                    )
                    done()
                } catch (error) {
                    done(error)
                }
            })
        })
    })

    describe("#tags.search", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.tags
                .search({
                    q: "SOMEQUERY",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/tags/search")
                    // @ToDo validate qs
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.tags.search(
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    q: "SOMEQUERY",
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/tags/search")
                        // @ToDo validate qs
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.tags
                .search({
                    q: "test",
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

        it("Throws an error if no tagName is provided - Promise syntax", done => {
            Client.tags
                .search({})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must search with a query"
                    )
                    done()
                })
        })

        it("Throws an error if no tagName is provided - Callback syntax", done => {
            Client.tags.search({}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must search with a query"
                    )
                    done()
                } catch (error) {
                    done(error)
                }
            })
        })
    })
}
