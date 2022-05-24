const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'hoge'
  })
})

app.get('/advice', async (req, res) => {
  const advice = await axios.get('	https://api.adviceslip.com/advice')
  res.json(advice.data)
})

module.exports = {
  path: '/api/',
  handler: app
}
