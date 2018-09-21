exports.helper = {
  generatePhoneNumber: function(length = 9) {
    let result = "";
    for (let i = 0; i < length; i++) result += Math.floor(Math.random() * 10);

    return result;
  }
};
