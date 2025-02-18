import moment from 'moment';

export const FormatDate = (timeStamp) => {
  return new Date(timeStamp).setHours(0, 0, 0, 0);
};

export const formatDateForText = (date) => {
  return moment(date).format('ll');
};

export const formatTime=(timestamp)=>{
    const data = new Date(timestamp);
    const timeString=data.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit'
    })
    return timeString;  // 9:00 AM
}
