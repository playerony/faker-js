exports.helper = {
  generateNumber: function() {
    return Math.floor(Math.random() * (Math.random() * 1000));
  },
  generateBoolean: function() {
    return Boolean(Math.round(Math.random()));
  },
  generateString: function() {
    return Math.random()
      .toString(36)
      .substring(7);
  }
};
