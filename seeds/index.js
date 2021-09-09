const sequelize = require('../config/connection');

const seedUsers = require('./userSeeds');
const seedPosts = require('./postSeeds');
const seedComments = require('./commentSeeds');

const seedEverything = async () => {
    await sequelize.sync({ force: true });
    console.log("you got data");

    await seedUsers();
    console.log('johnny just showed up because you got seeds');

    await seedPosts();
    console.log('hope you like raisin bran bc you got Post');

    await seedComments();
    console.log('say hello to the peanut gallery');

    process.exit(0)
};

seedEverything();