const app = require('express').Router();
const { User } = require('../db');

app.get('/', async(req,res,next)=>{
    try {
        res.send(await User.findAll());
    }
    catch(ex) {
        next(ex);
    }
})

app.delete('/:id', async(req,res,next)=>{
    try {
        const user = await User.findByPk(req.params.id); //find user
        await user.destroy();
        res.sendStatus(204)
    }
    catch(ex) {
        next(ex);
    }
})
module.exports = app;
