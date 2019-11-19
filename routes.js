const express = require('express')

const techStacksController = require('./controller/techStacks')

const Router = express.Router()

Router.get('/tech-stacks', techStacksController.getAll)
Router.post('/tech-stacks', techStacksController.getinsert)
Router.delete('/tech-stacks/:id', techStacksController.delete)

module.exports = Router