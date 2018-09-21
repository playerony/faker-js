const helper = require("../helpers/internetHelper").helper;

exports.internet = {
  email: () => helper.generateEmail(),
  mac: () => helper.generateMacAddress(),
  ipv4: () => helper.generateIPAddress(),
  ipv6: () => helper.generateIPv6Address()
};
