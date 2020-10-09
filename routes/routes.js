const express = require('express')
const router = express.Router()
const registerTemplate = require('../models/Register')

router.post('/register', (request, response) => {
    const signedUpUser = new registerTemplate({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(err)
        })
})

module.exports = router