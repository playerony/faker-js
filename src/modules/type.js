const helper = require("../helpers/typeHelper").helper;

exports.type = {
  number: () => helper.generateNumber(),
  string: () => helper.generateString(),
  boolean: () => helper.generateBoolean()
};
