const cron = require("node-cron");

const User = require("./models/User");

// const 

const sito = new User();
sito.createUser()

cron.schedule("* * * * * *", async () => {
  console.log("hola");
});
