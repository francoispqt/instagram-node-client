const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    describe("#likes.getByMedia", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.likes
                .getByMedia("1598000651921270649_234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal(
                        "/v1/media/1598000651921270649_234961553/likes"
                    )
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
            Client.likes.getByMedia(
                "1598000651921270649_234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/media/1598000651921270649_234961553/likes"
                        )
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

        it("Throws an error if no media id is provided - Promise syntax", done => {
            Client.likes
                .getByMedia(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media id"
                    )
                    done()
                })
        })

        it("Throws an error if no media id is provided - Callback syntax", done => {
            Client.likes
                .getByMedia(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media id"
                    )
                    done()
                })
        })
    })

    describe("#likes.likeMedia", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.likes.likeMedia(
                "1598000651921270649_234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/media/1598000651921270649_234961553/likes"
                        )
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        expect(callOpts.method).to.equal("POST")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Throws an error if no media id is provided - Promise syntax", done => {
            Client.likes
                .likeMedia(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media id"
                    )
                    done()
                })
        })

        it("Throws an error if no media id is provided - Callback syntax", done => {
            Client.likes
                .likeMedia(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media id"
                    )
                    done()
                })
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.likes
                .likeMedia("1598000651921270649_234961553", {})
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
        })

        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.likes.likeMedia(
                "1598000651921270649_234961553",
                {},
                (error, result) => {
                    try {
                        expect(error).to.be.an.instanceof(Error)
                        expect(error.message).to.be.equal(
                            "You must provide an access token"
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })
    })

    describe("#likes.unlikeMedia", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.likes
                .unlikeMedia("1598000651921270649_234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal(
                        "/v1/media/1598000651921270649_234961553/likes"
                    )
                    expect(callOpts.qs.access_token).to.equal(
                        process.env.INSTAGRAM_ACCESS_TOKEN
                    )
                    expect(callOpts.method).to.equal("DELETE")
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.likes.unlikeMedia(
                "1598000651921270649_234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/media/1598000651921270649_234961553/likes"
                        )
                        expect(callOpts.qs.access_token).to.equal(
                            process.env.INSTAGRAM_ACCESS_TOKEN
                        )
                        expect(callOpts.method).to.equal("DELETE")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Throws an error if no media id is provided - Promise syntax", done => {
            Client.likes
                .unlikeMedia(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media id"
                    )
                    done()
                })
        })

        it("Throws an error if no media id is provided - Callback syntax", done => {
            Client.likes
                .unlikeMedia(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media id"
                    )
                    done()
                })
        })

        it("Throws an error if no access token is provided - Promise syntax", done => {
            Client.likes
                .unlikeMedia("1598000651921270649_234961553", {})
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
        })

        it("Throws an error if no access token is provided - Callback syntax", done => {
            Client.likes.unlikeMedia(
                "1598000651921270649_234961553",
                {},
                (error, result) => {
                    try {
                        expect(error).to.be.an.instanceof(Error)
                        expect(error.message).to.be.equal(
                            "You must provide an access token"
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })
    })
}
