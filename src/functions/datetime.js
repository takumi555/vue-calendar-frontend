export const getTimeIntervalList = () => {
  const hours = [...Array(24)].map((_,i) => ('0' + i).slice(-2));
  const minutes = ['00', '15', '30', '45'];
  const timeList = hours.map(hours => minutes.map(minutes => hours + ':' + minutes)).flat();
  return timeList; 
}
