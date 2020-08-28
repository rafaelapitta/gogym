const express = require('express')
const routes = express.Router()

//middlewares interceptam as requisiçòes
routes.get('/', function(req, res) {
    return res.redirect("instructors/index")
})

routes.get('/about', function(req, res) {
    return res.render("about")
})

routes.get('/members', function(req, res) {
    return res.send("members")
})

module.exports = routes