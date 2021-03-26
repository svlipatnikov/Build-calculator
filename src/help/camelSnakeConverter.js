/* eslint-disable no-return-assign */

export const camelStringToSnakeString = (key) => {
  if (!key) return key;
  return key.replace(/([A-Z])/g, '_$1').toLowerCase();
};

export const camelStringObjectToSnakeStringObject = (camelObj) => {
  if (!camelObj) return camelObj;
  const snakeObject = {};
  Object.keys(camelObj).forEach((key) => {
    if (camelObj[key] instanceof Array) {
      snakeObject[camelStringToSnakeString(key)] = camelStringsArrayToSnakeStirngsArray(camelObj[key]);
    } else if (camelObj[key] instanceof Object) {
      snakeObject[camelStringToSnakeString(key)] = camelStringObjectToSnakeStringObject(camelObj[key]);
    } else {
      snakeObject[camelStringToSnakeString(key)] = camelObj[key];
    }
  });
  return snakeObject;
};

export const camelStringsArrayToSnakeStirngsArray = (camelArr) => {
  if (!camelArr) return camelArr;
  return camelArr.map((camelObj) => camelStringObjectToSnakeStringObject(camelObj));
};

export const snakeStringToCamelString = (string) => {
  if (!string) return string;
  return string.replace(/([_][a-z])/g, (snake) => snake.toUpperCase().replace('_', ''));
};

export const snakeStringObjectToCamelStringObject = (snakeObj) => {
  if (!snakeObj) return snakeObj;
  const camelObj = {};
  Object.keys(snakeObj).forEach((key) => {
    if (snakeObj[key] instanceof Array) {
      camelObj[snakeStringToCamelString(key)] = snakeStirngsArrayToCamelStringsArray(snakeObj[key]);
    } else if (snakeObj[key] instanceof Object) {
      camelObj[snakeStringToCamelString(key)] = snakeStringObjectToCamelStringObject(snakeObj[key]);
    } else {
      camelObj[snakeStringToCamelString(key)] = snakeObj[key];
    }
  });
  return camelObj;
};

export const snakeStirngsArrayToCamelStringsArray = (snakeArr) => {
  if (!snakeArr) return snakeArr;
  return snakeArr.map((snakeObj) => snakeStringObjectToCamelStringObject(snakeObj));
};
