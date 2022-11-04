const cron = require("node-cron");

const { error, log, info, good } = require("../utils/chalk");

const usersOnline = {};

const resourcesChronons = () => {
  cron.schedule("* * * * * *", async () => {
    const length = Object.keys(usersOnline).length;
    if (length) {
    }
  });
};

const playerCounter = () => {
  cron.schedule("* * * * *", async () => {
    const length = Object.keys(usersOnline).length;
    if (length) {
      log(`${length} players online`);
    } else log(info("Zzz No users online Zzz"));
  });
};

module.exports = { resourcesChronons, playerCounter, usersOnline };
