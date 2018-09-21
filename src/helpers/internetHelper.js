exports.helper = {
  generateEmail: function() {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    return (
      chars[Math.floor(Math.random() * 26)] +
      Math.random()
        .toString(36)
        .substring(2, 11) +
      "@domain.com"
    );
  },
  generateMacAddress: function() {
    const hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      if (i != 5) macAddress += ":";
    }

    return macAddress;
  },
  generateIPAddress: function() {
    return (
      (Math.floor(Math.random() * 255) + 1) + "." +
      (Math.floor(Math.random() * 255) + 0) + "." +
      (Math.floor(Math.random() * 255) + 0) + "." +
      (Math.floor(Math.random() * 255) + 0)
    );
  },
  generateIPv6Address: function() {
    const hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 8; i++) {
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
      if (i != 7) macAddress += ":";
    }

    return macAddress;
  }
};
