const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomUsername, getRandomEmail } = require('./data');

connection.on('error', (err) => (err));

connection.once('open', async () => {
    console.log('connected');
    
    let userCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    if(userCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [];

    for(let i = 0; i < 20; i++) {
        const username = getRandomUsername();
        const email = getRandomEmail();
        users.push({ username, email });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})