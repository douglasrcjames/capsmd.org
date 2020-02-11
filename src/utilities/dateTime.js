export function timestamp_to_date_time(timestamp) {
  const dateObject = new Date(timestamp);
  let dd = dateObject.getDate();
  let mm = dateObject.getMonth() + 1; // January is 0!
  const yyyy = dateObject.getFullYear();
  let hrs = dateObject.getHours();
  let mins = dateObject.getMinutes();

  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  const fullDate = `${mm}/${dd}/${yyyy}`;
  const fullTime = `${hrs}:${mins}`;

  return {
    fullTime,
    fullDate
  };
}

export function timeDifference(current, previous) {

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
       return Math.round(elapsed/1000) + ' seconds ago';   
  }

  else if (elapsed < msPerHour) {
       return Math.round(elapsed/msPerMinute) + ' minutes ago';   
  }

  else if (elapsed < msPerDay ) {
       return Math.round(elapsed/msPerHour ) + ' hours ago';   
  }

  else if (elapsed < msPerMonth) {
      return 'about ' + Math.round(elapsed/msPerDay) + ' days ago';   
  }

  else if (elapsed < msPerYear) {
      return 'about ' + Math.round(elapsed/msPerMonth) + ' months ago';   
  }

  else {
      return 'about ' + Math.round(elapsed/msPerYear ) + ' years ago';   
  }
}

const getDayName = (dateStr, locale) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

export const formatDateTime = dateTimeStr => {
  var months = new Array(12);
  months[0] = "Jan";
  months[1] = "Febr";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "Aug";
  months[8] = "Sept";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  const dateTime = new Date(dateTimeStr);
  let newDateTimeStr = "";
  const day = getDayName(dateTime, "en-US");
  const month = months[dateTime.getMonth()];
  const hour = dateTime.getHours();
  const amOrPm = hour > 12 ? "PM" : "AM";
  const minutes =
    parseInt(dateTime.getMinutes()) < 10
      ? `0${dateTime.getMinutes()}`
      : dateTime.getMinutes();
  newDateTimeStr = `${day} ${month} ${dateTime.getDay()} at ${hour}:${minutes} ${amOrPm}`;
  return newDateTimeStr;
};
