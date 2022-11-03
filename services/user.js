// @ts-check

const uuid = require("node-uuid");

const {
  getUser,
  getUserByName,
  getUsers,
  createUser,
  updateUser,
} = require("../controller/user");

const { keys } = require("../utils/secure");

const giveToken = () => {
  const date = new Date();
  const stringDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return stringDate;
};

/**
 *
 * @param {string} user
 * @returns
 */
const getUserNotifications = async (user) => {
  try {
    const data = await getUser(user.toLowerCase());
    if (data) {
      const { notifications } = data;
      return {
        status: 200,
        data: {
          notifications,
        },
      };
    }
    return { status: 422, error: "not found" };
  } catch (error) {
    return { status: 500, error: String(error) };
  }
};

/**
 *
 * @param {string} user
 * @param {string} pPassword
 * @returns user data
 */
const login = async (user, pPassword) => {
  try {
    const data = await getUserByName(user.toLowerCase());
    if (data) {
      const { name, password, theme, role, photo, email } = data;
      if (pPassword.toLowerCase() === password.toLowerCase()) {
        const token = uuid.v4();
        // @ts-ignore
        keys.push(token);
        return {
          status: 200,
          data: {
            name,
            role: role || "superadmin",
            theme,
            email,
            photo,
            token,
            expiration: giveToken(),
          },
        };
      } else return { status: 422, error: "wrong password" };
    }
    return { status: 422, error: "not found" };
  } catch (error) {
    return { status: 500, error: String(error) };
  }
};

/**
 *
 * @param {string} user
 * @param {object} notification
 */
const addNotification = async (user, notification) => {
  try {
    let userData = await getUser(user.toLowerCase());
    if (userData) {
      const { content, title } = notification;
      const date = new Date();
      userData.notifications.push({ content, title, date: date.getTime() });
      await updateUser(userData);
      return {
        status: 200,
        data: {
          user,
          notification,
        },
      };
    }
    return { status: 422, error: "not found" };
  } catch (err) {
    return { status: 500, error: String(err) };
  }
};

const loadUsers = async () => {
  try {
    const data = await getUsers();
    if (data) {
      const parsedData = [];
      Object.values(data).map((item) => {
        const { user, name, role, email } = item;
        parsedData.push({ id: user, name, role, email });
      });
      return { status: 200, data: parsedData };
    }
    return { status: 422, error: "not found" };
  } catch (error) {
    return { status: 500, error: String(error) };
  }
};

/**
 *
 * @param {object} user
 * @returns user data
 */
const register = async (user) => {
  try {
    const data = await createUser(user);
    if (data === undefined) {
      const token = uuid.v4();
      // @ts-ignore
      keys.push(token);
      return {
        status: 200,
        data: {
          ...user,
          token,
          expiration: giveToken(),
        },
      };
    }
    return { status: 422, error: "username taken" };
  } catch (err) {
    return { status: 500, error: String(err) };
  }
};

module.exports = {
  login,
  getUserNotifications,
  addNotification,
  register,
  loadUsers,
};
