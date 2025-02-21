import moment from 'moment';

export const FormatDate = (timeStamp) => {
  return new Date(timeStamp);
};

export const formatDateForText = (date) => {
  return moment(date).format('ll');
};

export const formatTime = (timestamp) => {
  const data = new Date(timestamp);
  const timeString = data.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return timeString; // 9:00 AM
};

export const getDatesRange = (startdate, endDate) => {
  const start = moment(new Date(startdate), 'MM/DD/YYYY');
  const end = moment(new Date(endDate), 'MM/DD/YYYY');
  const dates = [];

  while (start?.isSameOrBefore(end)) {
    dates?.push(start.format('MM/DD/YYYY'));
    start.add(1, 'days');
  }

  return dates;
};

export const GetDateRangeToDisplay = () => {
  const dateList = [];
  for (let i = 0; i <= 7; i++) {
    dateList.push({
      date: moment().add(i, 'days').format('DD'), // return a Days 25,26
      day: moment().add(i, 'days').format('dd'), // Monday,Tuesday
      formattedDate: moment().add(i, 'days').format('L'), // 1/27/2025
    });
  }

  return dateList;
};
