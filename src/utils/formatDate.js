function renderFormattedDate(dateString) {
  const options = { weekday: "long", month: "long", day: "numeric" };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
export default renderFormattedDate;
