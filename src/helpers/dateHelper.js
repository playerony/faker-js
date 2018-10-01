function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

exports.helper = {
  generateRecentDate: () => {
    const currentDate = new Date();
    const recentDate = new Date(
      currentDate.getFullYear() - 20,
      currentDate.getMonth(),
      currentDate.getDay()
    );

    return randomDate(recentDate, currentDate);
  },
  generatePastDate: () => randomDate(new Date(0, 0, 1), new Date()),
  generateFutureDate: () => randomDate(new Date(), new Date(10000, 12, 30))
};
