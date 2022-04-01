const {Task, User, sequelize} = require('./db');
const express = require('express');
const path =require('path');
const app = express();

app.get('/', (req,res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.get('/api/tasks', async(req,res,next)=>{
    try {
        res.send(await Task.findAll());
    }
    catch(ex) {
        next(ex);
    }
})
app.get('/api/users', async(req,res,next)=>{
    try {
        res.send(await User.findAll());
    }
    catch(ex) {
        next(ex);
    }
})


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));

const init = async()=> {
    console.log('calling init');
    await sequelize.sync({ force: true });
    await Promise.all([
        User.create({ firstName: 'lucy '}),
        User.create({ firstName: 'Moe'}),
        User.create({ firstName: 'ethyl'}),
    ])
    await Promise.all([
        Task.create({ name: 'buy milk'}),
        Task.create({ name: 'walk dog'}),
        Task.create({ name: 'work out'}),
        Task.create({ name: 'call Fred'}),
    ]);
};



init();


