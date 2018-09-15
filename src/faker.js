const name = require("./modules/name").name;
const phone = require("./modules/phone").phone;
const internet = require("./modules/internet").internet;

exports.faker = {
  name,
  phone,
  internet
};
