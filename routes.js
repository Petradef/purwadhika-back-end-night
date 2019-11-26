//require express
const express = require('express')
//require techStacks.js di dalam folder controller
const techStacksController = require('./controller/techStacks')
const albumsController = require('./controller/albums')

//require Router
const Router = express.Router()

Router.get('/tech-stacks', techStacksController.getAll)
Router.post('/tech-stacks', techStacksController.getinsert)
Router.delete('/tech-stacks/:id', techStacksController.delete)

Router.get('/albums', albumsController.getAll)
Router.post('/albums', 
    albumsController.handleUpload,
    albumsController.insert)
Router.delete('/albums/:id', albumsController.delete)
module.exports = Router