export const formatDate = date => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const d = new Date(date);
  const day = d.getDate();
  const monthIndex = d.getMonth();
  const year = d.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
};
