const names = require("../names").names;

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.helper = {
  generateFirstName: function() {
    return capFirst(
      names.firstNames[getRandomInt(0, names.firstNames.length + 1)]
    );
  },

  generateLastName: function() {
    return capFirst(
      names.lastNames[getRandomInt(0, names.lastNames.length + 1)]
    );
  },

  generateFullName: function() {
    var name =
      capFirst(names.firstNames[getRandomInt(0, names.firstNames.length + 1)]) +
      " " +
      capFirst(names.lastNames[getRandomInt(0, names.lastNames.length + 1)]);

    return name;
  }
};
