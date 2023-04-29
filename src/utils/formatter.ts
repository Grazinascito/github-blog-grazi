export const dateFormatter = (date: string) => {
  console.log(date);
  const dateReceived = new Date(date).getDate();

  const today = new Date().getDate();
  const publishedDate = today - dateReceived;

  return dateReceived === 1
    ? `há ${publishedDate} dia`
    : `há ${publishedDate} dias`;
};
