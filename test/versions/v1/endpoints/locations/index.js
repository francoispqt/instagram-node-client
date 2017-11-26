const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    describe("#locations.getByName", function() {
        this.timeout(30000)
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.locations
                .getByID("1019853321", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(result => {
                    // check data
                    expect(result.data).to.not.be.undefined
                    // check meta
                    expect(result.meta.code).to.be.equal(200)
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.locations.getByID(
                "1019853321",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/locations/1019853321"
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Throws an error if no location id is provided - Promise syntax", done => {
            Client.locations
                .getByID(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a location id"
                    )
                    done()
                })
        })

        it("Throws an error if no location id is provided - Callback syntax", done => {
            Client.locations
                .getByID(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a location id"
                    )
                    done()
                })
        })
    })

    describe("#locations.getMediaRecent", function() {
        this.timeout(30000)
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.locations
                .getMediaRecent("1019853321", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.locations.getMediaRecent(
                "1019853321",
                {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal(
                            "/v1/locations/1019853321/media/recent"
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Throws an error if no location id is provided - Promise syntax", done => {
            Client.locations
                .getMediaRecent(null, {})
                .then(() => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a location id"
                    )
                    done()
                })
        })

        it("Throws an error if no location id is provided - Callback syntax", done => {
            Client.locations.getMediaRecent(null, {}, (error, result) => {
                try {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a location id"
                    )
                    done()
                } catch (error) {
                    done(error)
                }
            })
        })
    })

    describe("#locations.search", function() {
        this.timeout(30000)
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.locations
                .search({
                    lat: "0.00",
                    lng: "0.00",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/v1/locations/search")
                    // @ToDo validate qs
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            Client.locations.search(
                {
                    lat: "0.00",
                    lng: "0.00",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/v1/locations/search")
                        // @ToDo validate qs
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Throws an error if no location id is provided - Promise syntax", done => {
            Client.locations
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

        it("Throws an error if no location id is provided - Callback syntax", done => {
            Client.locations.search({}, (error, result) => {
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
