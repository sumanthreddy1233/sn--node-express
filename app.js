
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.listen(port)
console.log(`App is running on ${port}`)
app.get("/",(req,res)=>{
    res.send("Hello World from Sumanth's app!!")
})

app.get('/about',(req,res)=>{
    res.send("This is a sample app")
})

app.get('/contact',(req,res)=>{
    res.send("you can contact me at S538359@nwmissouri.edu")
})

app.get('/help',(req,res)=>{
    res.send("I am happy to help you ")
})

app.get('/help/users', (req, res) => {
    res.send(`help response for users`)
  })