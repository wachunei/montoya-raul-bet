export default function daysDifference(date1, date2) {
  const secondsDiff = Math.floor((date2 - date1) / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.ceil(minutesDiff / 60);

  return Math.ceil(hoursDiff / 24);
}
