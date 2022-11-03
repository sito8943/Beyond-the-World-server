const cron = require("node-cron");

const { error, log, info, good } = require("../utils/chalk");

const usersOnline = {};

const resourcesChronons = () => {
  cron.schedule("* * * * * *", async () => {
    if (Object.keys(usersOnline).length) {
      log("Production");
    } else log(info("Zzz No users online Zzz"));
  });
};

module.exports = { resourcesChronons, usersOnline };
