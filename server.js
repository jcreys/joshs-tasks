const app = require('./app');
const {Task, User, sequelize} = require('./db');


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));

const init = async()=> {
    console.log('calling init');
    await sequelize.sync({ force: true });
   const [lucy, moe, ethyl] = await Promise.all([
        User.create({ firstName: 'lucy '}),
        User.create({ firstName: 'Moe'}),
        User.create({ firstName: 'ethyl'}),
        User.create({ firstName: 'fred'}),
    ])
    await Promise.all([
        Task.create({ name: 'buy milk,', userId: lucy.id}),
        Task.create({ name: 'walk dog', userId: lucy.id}),
        Task.create({ name: 'work out',userId: moe.id }),
        Task.create({ name: 'call Fred', userId: moe.id}),
    ]);
};



init();


