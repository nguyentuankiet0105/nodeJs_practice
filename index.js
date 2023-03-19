const express = require('express')
const app = express()
const port = 3000

const dump = [
 {
  id: 1,
  name: 'a',
  age: 20
 },
 {
  id: 2,
  name: 'b',
  age: 21
 },
 {
  id: 3,
  name: 'c',
  age: 22
 },
 {
  id: 4,
  name: 'd',
  age: 23
 },
]
app.get('/', (req, res) => {
 res.send("homepage")
 req.send('err !!!')
})

app.get('/user', (req, res) => {
 res.send(dump)
 req.send('err !!!')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})