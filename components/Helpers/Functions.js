export function formatDateMonthOnly(date) {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  let theDate = new Date(date);

  var day = theDate.getDate();
  var monthIndex = theDate.getMonth();
  var year = theDate.getFullYear();

  return day + " " + monthNames[monthIndex] + " " + year;
}

export function getStateDate(input) {
  if (input == "today") {
    let dates = {};
    dates.start = makeDate(0);
    dates.end = makeDate(24);
    return dates;
  }
}
function makeDate(hrsBack) {
  if (hrsBack == 0) {
    let dt = new Date(new Date().toUTCString());
    dt = dt.toISOString();
    return dt;
  } else {
    let dt = new Date(new Date().toUTCString());
    dt.setHours(dt.getHours() - hrsBack);
    dt = dt.toISOString();
    return dt;
  }
}
