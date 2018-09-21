const nameHelper = require("../helpers/nameHelper").helper;

exports.name = {
  firstName: () => nameHelper.generateFirstName(),
  lastName: () => nameHelper.generateLastName(),
  fullName: () => nameHelper.generateFullName()
};
