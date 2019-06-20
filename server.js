const express = require('express');

const server = express();

// your code here
const dbaccount = require('./data/accounts-model.js');

  server.get('/', (req, res) => {
    res.send(`
      <h2>DB TEST</h2>
    `)
  })

  server.get('/api/accounts', (req, res) =>{
    dbaccount.find()
      .then( accounts => {
        res.status(200).json(accounts)
      })
      .catch( err => {
        res.status(500).json({ error: err, message:"Could not update data"})
      })
  })

  server.get("/api/accounts/:id", (req, res) =>{
    const id = req.params.id
    dbaccount.findById(id)
      .then( projectaccounts => {
        res.status(200).json(projectaccounts)
      })
      .catch( err => {
        res.status(500).json({ error: err, message:"Could not update data"})
      })
  })

module.exports = server;