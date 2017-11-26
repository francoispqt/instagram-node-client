const express = require("express")
const fs = require("fs")
const path = require("path")
const chai = require("chai")

const app = express()
const versions = require("./versions")

// run all tests for each versions
return Object.keys(versions).forEach(v => {
    describe("Instagram Client", function() {
        this.timeout(20000)
        return versions[v]()
    })
})
