const name = require("./modules/name").name;
const phone = require("./modules/phone").phone;
const internet = require("./modules/internet").internet;
const type = require("./modules/type").type;

exports.faker = {
  name,
  phone,
  internet,
  type
};
