const cron = require("node-cron");

const User = require("./models/User");

const { getUser } = require("./controller/user");

const sito = new User();

cron.schedule("* * * * * *", async () => {
  console.log("hola");
});
