const getAll = require("./getAll");
const getById = require("./getById");
const createContact = require("./createContact");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");
const deleteContact = require("./deleteContact");

const register = require("./auth");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

module.exports = {
  getAll,
  getById,
  createContact,
  deleteContact,
  updateById,
  updateFavorite,
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
};
