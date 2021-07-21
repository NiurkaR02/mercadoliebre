// const express = require('express')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
});

app.get('/login', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'views/login.html'))
});

app.get('/register', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'views/register.html'))
});

