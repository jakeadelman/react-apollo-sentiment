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
    dates.start = makeDateHrs(0);
    dates.end = makeDateHrs(24);
    console.log("is today");
    return dates;
  }
  if (input == "yesterday") {
    let dates = {};
    dates.start = makeDateHrs(1);
    dates.end = makeDateDays(2);
    console.log("is yesterday");
    return dates;
  }
  if (input == "this week") {
    let dates = {};
    dates.start = makeDateHrs(0);
    dates.end = makeDateDays(7);
    console.log("is this week");
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
