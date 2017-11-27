const fs = require("fs")
const sinon = require("sinon")
const chai = require("chai")
const path = require("path")
const testUtils = require("../../../../utils/test_utils")

const expect = chai.expect

module.exports = Client => {
    describe("#oauth.getAccessToken", () => {
        testUtils.bootstrapStubTest(Client)
        it("Calls the api with the right parameters - Promise syntax", done => {
            testUtils.stubApiRequest(Client)
            Client.oauth
                .getAccessToken({
                    grantType: "code",
                    code: "DUMMYCODE",
                    redirectURI: "https://heyhey.com",
                })
                .then(() => {
                    const callOpts = Client.api.call.getCall(0).args[0]
                    // check uri
                    expect(callOpts.uri).to.equal("/oauth/access_token")
                    // @ToDo
                    done()
                })
                .catch(done)
        })

        it("Calls the api with the right parameters - Callback syntax", done => {
            testUtils.stubApiRequest(Client)
            Client.oauth.getAccessToken(
                {
                    grantType: "code",
                    code: "DUMMYCODE",
                    redirectURI: "https://heyhey.com",
                },
                (error, result) => {
                    try {
                        const callOpts = Client.api.call.getCall(0).args[0]
                        // check uri
                        expect(callOpts.uri).to.equal("/oauth/access_token")
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Throws an error if no redirectURI is provided - Promise syntax", done => {
            testUtils.stubApiRequest(Client)
            Client.oauth
                .getAccessToken({
                    grantType: "code",
                    code: "DUMMYCODE",
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a redirect URI"
                    )
                    done()
                })
        })

        it("Throws an error if no redirectURI is provided - Callback syntax", done => {
            testUtils.stubApiRequest(Client)
            Client.oauth.getAccessToken(
                {
                    grantType: "code",
                    code: "DUMMYCODE",
                },
                (error, result) => {
                    try {
                        expect(error).to.be.an.instanceof(Error)
                        expect(error.message).to.be.equal(
                            "You must provide a redirect URI"
                        )
                        done()
                    } catch (error) {
                        done(error)
                    }
                }
            )
        })

        it("Throws an error if no code is provided - Promise syntax", done => {
            testUtils.stubApiRequest(Client)
            Client.oauth
                .getAccessToken({
                    grantType: "code",
                    redirectURI: "https://someredirecturi.com",
                })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.be.equal(
                        "You must provide a code"
                    )
                    done()
                })
        })
    })

    describe("#oauth.getAuthURL", () => {
        it("Sould return the right authorization URL - with scopes", () => {
            const url = Client.oauth.getAuthURL({
                CLIENT_ID: "DUMMYCLIENTID",
                redirectURI: "http://someredirecturi.com",
                scope: ['public_content', 'likes'],
            })

            expect(url).to.equal(
                "https://api.instagram.com/oauth/authorize?client_id=DUMMYCLIENTID&response_type=code&redirect_uri=http://someredirecturi.com&scope=public_content+likes"
            )
        })

        it("Sould return the right authorization URL - no scopes", () => {
            const url = Client.oauth.getAuthURL({
                CLIENT_ID: "DUMMYCLIENTID",
                redirectURI: "http://someredirecturi.com",
            })

            expect(url).to.equal(
                "https://api.instagram.com/oauth/authorize?client_id=DUMMYCLIENTID&response_type=code&redirect_uri=http://someredirecturi.com"
            )
        })


        it("Should throw an error if no client id is provided", done => {
            const clientID = Client.opts.CLIENT_ID
            Client.opts.CLIENT_ID = null
            try {
                const url = Client.oauth.getAuthURL({
                    CLIENT_ID: null,
                    redirectURI: "http://someredirecturi.com",
                })
                Client.opts.CLIENT_ID = clientID
                done(new Error("Should not be called"))
            } catch (error) {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.be.equal("You must provide a client ID")
                Client.opts.CLIENT_ID = clientID
                done()
            }
        })

        it("Should throw an error if no redirect uri is provided", done => {
            try {
                const url = Client.oauth.getAuthURL({
                    CLIENT_ID: "DUMMYCLIENTID",
                    redirectURI: null,
                })
                done(new Error("Should not be called"))
            } catch (error) {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.be.equal("You must provide a redirect URI")
                done()
            }
        })

        it("Should throw an error if response type is not string", done => {
            try {
                const url = Client.oauth.getAuthURL({
                    CLIENT_ID: "DUMMYCLIENTID",
                    redirectURI: null,
                    responseType: 1,
                })
                done(new Error("Should not be called"))
            } catch (error) {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.be.equal("Your must provide a valid response type")
                done()
            }
        })
    })
}
