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

export const getDatesRange=(startdate,endDate)=>{
  const start=moment(new Date(startdate),'MM/DD/YYYY');
  const end = moment(new Date(endDate),'MM/DD/YYYY');
  const dates=[];

  while(start?.isSameOrBefore(end))
  {
    dates?.push(start.format('MM/DD/YYYY'));
    start.add(1,'days')
  }

  return dates;
}
