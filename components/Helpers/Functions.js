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
  var hours = theDate.getHours();
  var mins = theDate.getMinutes();
  var monthIndex = theDate.getMonth();
  var year = theDate.getFullYear();

  return day + " " + monthNames[monthIndex] + ", " + hours + ":" + mins;
}

export function getStateDate(input) {
  if (input == 1) {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateHrs(24);
    console.log("is today");
    return dates;
  }
  if (input == 2) {
    let dates = {};
    dates.end = makeDateHrs(1);
    dates.start = makeDateDays(2);
    console.log("is yesterday");
    return dates;
  }
  if (input == 3) {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateDays(7);
    console.log("is this week");
    return dates;
  }
  if (input == 4) {
    let dates = {};
    dates.end = makeDateHrs(0);
    dates.start = makeDateDays(30);
    console.log("is this month");
    return dates;
  }
}
function makeDateHrs(hrsBack) {
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
function makeDateDays(num) {
  let dt = new Date(new Date().toUTCString());
  dt.setDate(dt.getDate() - num);
  dt = dt.toISOString();
  console.log("getting days back");
  return dt;
}
