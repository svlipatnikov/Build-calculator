/* eslint-disable no-return-assign */

// Строка Camel в строку Snake
export const camelToSnakeKey = (key) => key.replace(/([A-Z])/g, '_$1').toLowerCase();

// Объект с ключами Camel в объект с ключами Snake
export const camelToSnakeObj = (camelObj) => {
  const snakeObject = {};
  Object.keys(camelObj).forEach((key) => (snakeObject[camelToSnakeKey(key)] = camelObj[key]));
  return snakeObject;
};

// Массив объектов с ключами Camel в массив объектов с ключами Snake
export const camelToSnakeArr = (camelArr) => camelArr.map((camelObj) => camelToSnakeObj(camelObj));

// Строка Snake в строку Camel
export const snakeToCamelKey = (key) => key.replace(/([_][a-z])/g, (snake) => snake.toUpperCase().replace('_', ''));

// Объект с ключами Snake в объект с ключами Camel
export const snakeToCamelObj = (snakeObj) => {
  const camelObj = {};
  Object.keys(snakeObj).forEach((key) => (camelObj[snakeToCamelKey(key)] = snakeObj[key]));
  return camelObj;
};

// Массив объектов с ключами Snake в массив объектов с ключами Camel
export const snakeToCamelArr = (snakeArr) => snakeArr.map((snakeObj) => snakeToCamelObj(snakeObj));
