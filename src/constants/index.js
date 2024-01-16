export const getDate = () => {
  const today = new Date();
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('En-US', options).format(today);
};
