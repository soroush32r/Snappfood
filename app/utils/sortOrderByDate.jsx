const sortOrderByDate = (historyCart) => {
  let data = historyCart;
  let sortedData = data
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return sortedData;
};

export default sortOrderByDate;
