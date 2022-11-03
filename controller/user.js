// @ts-check

const { insert, getValue, update, getTable } = require("../db/local");

/**
 *
 * @param {object} remoteData
 */
const createUser = async (remoteData) => {
  try {
    const data = await getValue("user", remoteData.id);
    if (data) return "exist";
    else {
      await insert("user", remoteData.id, remoteData);
      return data;
    }
  } catch (err) {
    return err;
  }
};

/**
 *
 * @param {string} id
 * @returns
 */
const getUser = async (id) => {
  try {
    const data = await getValue("user", id);
    if (data) return data;
    return undefined;
  } catch (err) {
    return err;
  }
};

/**
 *
 * @param {object} remoteData
 */
const updateUser = async (remoteData) => {
  try {
    const data = await update("user", remoteData.id, remoteData);
    if (data) return "exist";
    else {
      await insert("user", remoteData.id, remoteData);
      return data;
    }
  } catch (err) {
    return err;
  }
};

/**
 *
 * @param {object} condition
 * @param {object} toFetch
 * @return
 */
const getUsers = async (condition = {}, toFetch = {}) => {
  try {
    const data = await getTable("user");
    if (data) {
      const toReturn = [];
      Object.values(data).forEach((item) => {
        let itsOk = true;
        for (const jtem of Object.keys(condition))
          if (item[jtem] !== condition[jtem]) {
            itsOk = false;
            break;
          }
        if (itsOk) {
          const parsedItem = {};
          Object.keys(toFetch).forEach((jtem) => {
            parsedItem[jtem] = item[jtem];
          });
          toReturn.push(parsedItem);
        }
      });
    }
    return undefined;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  getUsers,
};
