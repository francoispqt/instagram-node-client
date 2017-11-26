const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    let commentID
    describe("#comments.create", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.comments
                .create("1598000651921270649_234961553", {
                    text: "Some comment",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    expect(result.data).to.not.be.undefined
                    commentID = result.data.id
                    expect(callOpts.uri).to.equal(
                        `https://api.instagram.com/v1/media/1598000651921270649_234961553/comments`
                    )
                    expect(callOpts.method).to.equal("POST")
                    done()
                })
                .catch(error => {
                    console.error(error)
                    done(error)
                })
        })
        
        it("Should throw an error if no media ID is provided", done => {
            Client.comments
                .create(null, {
                    text: "Some comment",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide a media id"
                    )
                    done()
                })
                .catch(done)
        })

        it("Should throw an error if no access token is provided", done => {
            Client.comments
                .create("1598000651921270649_234961553", {
                    text: "Some comment",
                    accessToken: null,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide an access token"
                    )
                    done()
                })
                .catch(done)
        })

        it("Should throw an error if no text is provided", done => {
            Client.comments
                .create("1598000651921270649_234961553", {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide a text"
                    )
                    done()
                })
                .catch(done)
        })
    })

    describe("#comments.getByMediaID", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            Client.comments
                .getByMediaID("1598000651921270649_234961553", {
                    text: "Some comment",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    expect(result.data).to.not.be.undefined
                    expect(callOpts.uri).to.equal(
                        `https://api.instagram.com/v1/media/1598000651921270649_234961553/comments`
                    )
                    expect(callOpts.method).to.equal("GET")
                    done()
                })
                .catch(error => {
                    console.error(error)
                    done(error)
                })
        })

        it("Should throw an error if no media ID is provided", done => {
            Client.comments
                .getByMediaID(null, {
                    text: "Some comment",
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide a media id"
                    )
                    done()
                })
                .catch(done)
        })

        it("Should throw an error if no access token is provided", done => {
            Client.comments
                .getByMediaID("1598000651921270649_234961553", {
                    text: "Some comment",
                    accessToken: null,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide an access token"
                    )
                    done()
                })
                .catch(done)
        })
    })

    describe("#comments.del", () => {
        testUtils.bootstrapTest(Client)
        it("Calls the api with the right parameters - Promise syntax", function(done) {
            this.timeout(10000)
            Client.comments
                .del("1598000651921270649_234961553", commentID, {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    const callOpts = Client.api.request.getCall(0).args[0]
                    expect(result.meta.code).to.equal(200)
                    expect(callOpts.uri).to.equal(
                        `https://api.instagram.com/v1/media/1598000651921270649_234961553/comments/${commentID}`
                    )
                    expect(callOpts.method).to.equal("DELETE")
                    done()
                })
                .catch(done)
        })

        it("Should throw an error if no media ID is provided", done => {
            Client.comments
                .del(null, commentID, {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide a media id"
                    )
                    done()
                })
                .catch(done)
        })

        it("Should throw an error if no comments ID is provided", done => {
            Client.comments
                .del("1598000651921270649_234961553", null, {
                    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide a comment id"
                    )
                    done()
                })
                .catch(done)
        })

        it("Should throw an error if no access token is provided", done => {
            Client.comments
                .del("1598000651921270649_234961553", commentID, {
                    accessToken: null,
                    sign: true,
                })
                .then(result => {
                    done(new Error("Should not be called"))
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(
                        "You must provide an access token"
                    )
                    done()
                })
                .catch(done)
        })
    })
}
