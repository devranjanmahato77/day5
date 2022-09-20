const mongoose = require('mongoose');

var cSchema = new mongoose.Schema({

    cname: {
        type: String,
        requried: true
    },
    about: {
        type: String
    },
    doe: {
        type: String
    }
});



mongoose.model('Company', cSchema);