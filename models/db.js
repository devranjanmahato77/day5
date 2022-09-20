const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/companyDB', (err) => {
    if(!err){ 
        console.log('Mongo successfully connected') 
    }else{
        console.log('Error' + err)
    }
});

require('./companydata');