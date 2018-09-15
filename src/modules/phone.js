function rand(len) {
  const result = "";
  for (let i = 0; i < len; i++) result += Math.floor(Math.random() * 10);

  return result;
}

exports.phone = {
  phoneNumber: () => rand(9)
};
