//could rename to router

const app = require('express').Router(); //create router that i can use

const {Task} = require('../db');

//error in app.use router.use requires middleware
app.get('/', async(req,res,next)=>{
    try {
        res.send(await Task.findAll());
    }
    catch(ex) {
        next(ex);
    }
})
//need to remove /api/tasks because of router

module.exports = app;