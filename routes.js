const express = require('express')
const routes = express.Router()

//middlewares interceptam as requisiçòes
routes.get('/', function(req, res) {
    return res.send("ok 👍")
})

module.exports = routes