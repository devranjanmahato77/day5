const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/companyDB")

// mongoose.connection.on("connected", ()=>{
//     console.log("connection with mongo success!")
// })

// app.listen(5008, ()=>{
//     console.log("server is working ")
// })

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('connected', function(){
    console.log('Mongo connected successfully');
});
db.on('error',function(err){
    console.log('Error:' + err)
})