export const dateFormatter = (date: string) => {
  const dateReceived = new Date(date);

  const today = new Date();
  const differenceInTime = today.getTime() - dateReceived.getTime();
  const publishedDate = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return dateReceived.getDate() === 1
    ? `há ${publishedDate} dia`
    : `há ${publishedDate} dias`;
};
