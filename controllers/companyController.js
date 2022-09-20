

const express = require('express')
var router = express.Router();
const mongoose = require('mongoose');
const Company = mongoose.model('Company');

router.get('/',(req,res)=>{
    res.render("company/display",{
        viewTitle : "Insert Info"
    });
});
router.post('/',(req,res)=>{
    console.log(req.body);
    insertData(req,res);
});

function insertData(req,res){
    var company = new Company();
    company.cname = req.body.cname;
    company.about = req.body.about;
    company.doe =req.body.doe;
    company.save((err,doc)=>{
        if(!err){
        res.redirect('company/list');
        }else{
            console.log('Error: '+err);
        }
    });
}
router.get('/list',(req,res)=>{
    res.json('Added');
});

module.exports = router;