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

app.post('/', async(req,res,next)=>{
    try{
        res.status(201).send(await Task.create(req.body));
    }catch(ex){
        next(ex)
    }
})


app.delete('/:id', async(req,res,next)=>{
    try {
        const task = await Task.findByPk(req.params.id); //find task
        await task.destroy();
        res.sendStatus(204)
    }
    catch(ex) {
        next(ex);
    }
})
//need to remove /api/tasks because of router

module.exports = app;