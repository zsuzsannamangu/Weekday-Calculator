export function getWeekDay(date) {
  const dayOfWeek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  let day = date.getDay();
  return dayOfWeek[day];
}
