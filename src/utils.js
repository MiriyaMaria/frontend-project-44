export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
