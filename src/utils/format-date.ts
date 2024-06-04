export function formatDate(dateString?: string | Date) {
  if (!dateString) return;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const day = date.getUTCDate();
  const monthIndex = date.getUTCMonth();
  // const year = date.getUTCFullYear();

  const formattedDate = `${months[monthIndex]}, ${day}`;
  return formattedDate;
}
