const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    describe("#media.getByID", () => {
        testUtils.bootstrapTest(Client)
        it("Should call the api with the right - Promise syntax", done => {
            Client.media
                .getByID("1598000651921270649_234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/media/1598000651921270649_234961553")
                    // check method
                    expect(callOpts.method).to.equal("GET")
                    done()
                })
                .catch(done)
        })

        it("Should call the api with the right - Callback syntax", done => {
            Client.media.getByID(
                "1598000651921270649_234961553",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/media/1598000651921270649_234961553")
                        // check method
                        expect(callOpts.method).to.equal("GET")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.media
                .getByID("1598000651921270649_234961553", {
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

        it("Should throw an error if no media id is provided - Promise syntax", done => {
            Client.media
                .getByID(null)
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
        it("Should throw an error if no media id is provided - Callback syntax", done => {
            Client.media.getByID(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media id"
                    )
                    done()
                } catch (error) {
                    done(error)
                }
            })
        })
    })

    describe("#media.getByShortcode", () => {
        testUtils.bootstrapTest(Client)
        it("Should call the api with the right - Promise syntax", done => {
            Client.media
                .getByShortcode("BYtPSBYnCd5", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal(
                        "/v1/media/shortcode/BYtPSBYnCd5"
                    )
                    // check method
                    expect(callOpts.method).to.equal("GET")
                    done()
                })
                .catch(done)
        })

        it("Should call the api with the right - Callback syntax", done => {
            Client.media.getByShortcode(
                "BYtPSBYnCd5",
                { accessToken: process.env.INSTAGRAM_ACCESS_TOKEN },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/media/shortcode/BYtPSBYnCd5"
                        )
                        // check method
                        expect(callOpts.method).to.equal("GET")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.media
                .getByShortcode("BYtPSBYnCd5", {
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

        it("Should throw an error if no media id is provided - Promise syntax", done => {
            Client.media
                .getByShortcode(null)
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media shortcode"
                    )
                    done()
                })
                .catch(done)
        })
        it("Should throw an error if no media id is provided - Callback syntax", done => {
            Client.media.getByShortcode(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a media shortcode"
                    )
                    done()
                } catch (error) {
                    done(error)
                }
            })
        })
    })

    describe("#media.search", () => {
        testUtils.bootstrapTest(Client)
        it("Should call the api with the right - Promise syntax", done => {
            Client.media
                .search({
                    q: "test",
                    lat: "0.00",
                    lng: "0.01",
                    distance: "2000",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/media/search")
                    // check method
                    expect(callOpts.method).to.equal("GET")
                    // check lat
                    expect(callOpts.qs.lat).to.equal("0.00")
                    // check lng
                    expect(callOpts.qs.lng).to.equal("0.01")
                    // check distance
                    expect(callOpts.qs.distance).to.equal("2000")
                    done()
                })
                .catch(done)
        })

        it("Should call the api with the right - Callback syntax", done => {
            Client.media.search(
                {
                    lat: "0.00",
                    lng: "0.01",
                    distance: "2000",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/media/search")
                        // check method
                        expect(callOpts.method).to.equal("GET")
                        // check lat
                        expect(callOpts.qs.lat).to.equal("0.00")
                        // check lng
                        expect(callOpts.qs.lng).to.equal("0.01")
                        // check distance
                        expect(callOpts.qs.distance).to.equal("2000")
                        done()
                    } catch (error) {
                        done()
                    }
                }
            )
        })

        it("Signs the request if sign is true", done => {
            Client.media
                .search({
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    lat: "0.00",
                    lng: "0.01",
                    distance: "2000",
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
    })
}
