import dayjs from 'dayjs';

export const formatDate = (date, amount = 0) => {
  return dayjs(date)
    .subtract(amount, 'day')
    .format('YYYYMMDD');
};

export const splitDate = date => {
  let year = date.substring(0, 4);
  let month = date.substring(4, 6);
  let day = date.substring(6, 8);

  return `${year}-${month}-${day}`;
};
