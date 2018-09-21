const helper = require("../helpers/phoneHelper").helper;

exports.phone = {
  phoneNumber: () => helper.generatePhoneNumber()
};
