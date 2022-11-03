const cron = require("node-cron");

const User = require("./models/User");

const { getUserByName } = require("./controller/user");

const main = async () => {
  const sito = new User();
  const data = await getUserByName("sito8943");
  // sito.createUser();
  console.log(data);
};

main();
