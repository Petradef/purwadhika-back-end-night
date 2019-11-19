const shortid = require('shortid')

let techStacks = {}

techStacks.getAll = function(req,res) {
    const result = req.db.get('techStacks').value()
    console.log('RESULT', JSON.stringify(result))
    res.send(result)
}

techStacks.getinsert = function(req,res) {
    const data = {
        id: shortid.generate(),
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    }
    const result = req.db
    .get('techStacks')
    .push(data)
    .write()
    if (result) {
        console.log('RESULT', JSON.stringify(data))
        res.send(data)
    } else {
        req.status(500).send('General Error')
    }
    
}

module.exports = techStacks