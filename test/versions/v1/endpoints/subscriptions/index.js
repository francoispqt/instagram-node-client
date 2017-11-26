const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    describe("#subscriptions.create", function() {
        this.timeout(20000)
        it("Calls the api with the right parameters", done => {
            Client.subscriptions.create({
                object: "user",
                aspect: "media",
                verifyToken: "testtoken",
                callbackURL: "https://9568692d.ngrok.io",
                sign: true,
            })
            .then(result => {
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.opts.statusCode).to.be.equal(408)
                expect(error.opts.body).to.be.equal("Request Timeout")
                done()
            })
        })

        it("Should throw an error if no object is provided", done => {
            Client.subscriptions.create({
                object: null,
                aspect: "media",
                verifyToken: "testtoken",
                callbackURL: "https://9568692d.ngrok.io",
                sign: true,
            })
            .then(() => {
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide an object")
                done()
            })
        })

        it("Should throw an error if no aspect is provided", done => {
            Client.subscriptions.create({
                object: "user",
                aspect: null,
                verifyToken: "testtoken",
                callbackURL: "https://9568692d.ngrok.io",
                sign: true,
            })
            .then(() => {
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide an aspect")
                done()
            })
        })

        it("Should throw an error if no verifyToken is provided", done => {
            Client.subscriptions.create({
                object: "user",
                aspect: "media",
                verifyToken: null,
                callbackURL: "https://9568692d.ngrok.io",
                sign: true,
            })
            .then(() => {
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide a verify token")
                done()
            })
        })

        it("Should throw an error if no callbackUrl is provided", done => {
            Client.subscriptions.create({
                object: "user",
                aspect: "media",
                verifyToken: "testtoken",
                callbackURL: null,
                sign: true,
            })
            .then(() => {
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide a callback url")
                done()
            })
        })
        
        it("Should throw an error if now client id is provided", done => {
            const clientID = Client.opts.CLIENT_ID
            Client.opts.CLIENT_ID = null
            Client.subscriptions.create({
                object: "user",
                aspect: "media",
                verifyToken: "testtoken",
                callbackURL: "https://9568692d.ngrok.io",
                sign: true,
            })
            .then(() => {
                Client.opts.CLIENT_ID = clientID
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide a client id")
                Client.opts.CLIENT_ID = clientID
                done()
            })
        })

        it("Should throw an error if now client secret is provided", done => {
            const clientSecret = Client.opts.CLIENT_SECRET
            Client.opts.CLIENT_SECRET = null
            Client.subscriptions.create({
                object: "user",
                aspect: "media",
                verifyToken: "testtoken",
                callbackURL: "https://9568692d.ngrok.io",
                sign: true,
            })
            .then(() => {
                Client.opts.CLIENT_SECRET = clientSecret
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide a client secret")
                Client.opts.CLIENT_SECRET = clientSecret
                done()
            })
        })

    })

    describe("#subscriptions.list", () => {
        it("Calls the api with the right parameters", done => {
            Client.subscriptions.list({})
            .then(result => {
                done()
            })
            .catch(error=> {
                console.error(error)
                done(error)
            })
        })
        it("Should throw an error if now client id is provided", done => {
            const clientID = Client.opts.CLIENT_ID
            Client.opts.CLIENT_ID = null
            Client.subscriptions.list({})
            .then(() => {
                Client.opts.CLIENT_ID = clientID
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide a client id")
                Client.opts.CLIENT_ID = clientID
                done()
            })
        })

        it("Should throw an error if now client secret is provided", done => {
            const clientSecret = Client.opts.CLIENT_SECRET
            Client.opts.CLIENT_SECRET = null
            Client.subscriptions.list({})
            .then(() => {
                Client.opts.CLIENT_SECRET = clientSecret
                done(new Error("Should not be called"))
            })
            .catch(error => {
                // assert timeout error because callbackurl is invalid
                expect(error.message).to.be.equal("You must provide a client secret")
                Client.opts.CLIENT_SECRET = clientSecret
                done()
            })
        })
    })
}
