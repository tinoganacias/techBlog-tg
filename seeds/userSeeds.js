const { User } = require('../models');

const userData = [
    {
        username: "tino_ganacias",
        email: "tino@tino.tino",
        password: "tinotinotino"
    },
    {
        username: "terra_luthi",
        email: "terra@terra.terra",
        password: "terraterraterra"
    },
    {
        username: "ella_luthi",
        email: "ella@ella.ella",
        password: "ellaellaella"
    },
    {
        username: "athina_blesoff_ganacias",
        email: "athina@athina.athina",
        password: "athinaathinaathina"
    },
   
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;