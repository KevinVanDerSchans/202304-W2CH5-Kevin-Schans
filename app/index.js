const lengthProperty = (array) => {
  let i = 0;
  
  for (i in array) {
    i++;
  }
  
  return i;
};

const pushProperty = (array, ...newElement) => {
  const openedArray = [...array];

  const newPushedArray = [...openedArray, ...newElement];

  return lengthProperty(newPushedArray);
};

const popProperty = (array) => {
  const popPosition = lengthProperty(array);
  return array[popPosition - 1];
};

const someProperty = (array, parameter) => {
  const newLength = lengthProperty(array);

  for (let i = 0; i < newLength; i++) {
    if (array[i] === parameter) {
      return true;
    }
  }

  return false;
};

const findProperty = (array, parameter) => {
  const newLength = lengthProperty(array);

  for (let i = 0; i < newLength; i++) {
    if (array[i] === parameter) {
      return array[i];
    }
  }

  return undefined;
};

export default {
  lengthProperty,
  pushProperty,
  popProperty,
  someProperty,
  findProperty,
};
