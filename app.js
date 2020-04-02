let server = require('express')
let app = server()
var bodyparser = require('body-parser')
var MONGOCONNECT = require('./connect')
var STUDENTAPI = require('./APIS/STUDENTAPI')
var CLASSAPI = require('./APIS/CLASSAPI')
let port = process.env.port || 9090

app.use(bodyparser.json())
MONGOCONNECT(app)
STUDENTAPI(app)
CLASSAPI(app)
app.get('/' , (req , res)=>{
    res.send(`runiing on port ${port}`)
})








app.listen(port , ()=>console.log((`app is listen to port ${port}`)))