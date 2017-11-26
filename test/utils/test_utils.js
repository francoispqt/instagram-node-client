const sinon = require("sinon")

exports.stubApiRequest = Client => {
    Client.api.request.callsArgWithAsync(1, null, { statusCode: 200 }, {})
}

exports.stubApiRequestError = Client => {
    Client.api.request.callsArgWithAsync(1, null, { statusCode: 500 }, {})
}

exports.bootstrapTest = Client => {
    // set spyies and stubs
    beforeEach(() => {
        sinon.spy(Client.api, "call")
        sinon.spy(Client.api, "request")
    })

    // Clear stubs for google maps client directions
    afterEach(() => {
        Client.api.call.restore()
        Client.api.request.restore()
    })
}

exports.bootstrapStubTest = Client => {
    // set spyies and stubs
    beforeEach(() => {
        sinon.spy(Client.api, "call")
        sinon.stub(Client.api, "request")
    })

    // Clear stubs for google maps client directions
    afterEach(() => {
        Client.api.call.restore()
        Client.api.request.restore()
    })
}