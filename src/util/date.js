const formatDate = date => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate() - 2,
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${year}${month}${day}`;
};

export default formatDate;
