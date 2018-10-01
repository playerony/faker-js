const helper = require("../helpers/dateHelper").helper;

exports.date = {
  recent: () => helper.generateRecentDate(),
  future: () => helper.generateFutureDate(),
  past: () => helper.generatePastDate()
};
