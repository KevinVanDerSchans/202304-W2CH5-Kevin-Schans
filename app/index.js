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

const shiftProperty = (array) => {
  if (lengthProperty(array) === 0) {
    return undefined;
  }

  let firstIndex = array[0];
  for (let i = 0; i < lengthProperty(array); i++) {
    array[i - 1] = array[i];
  }

  popProperty(array);
  return firstIndex;
};

const unshiftProperty = (array, ...element) => {
  if (lengthProperty(array) === 0) {
    return undefined;
  }
  console.log((array = [...element, ...array]));

  return lengthProperty(array);
};

export default {
  lengthProperty,
  pushProperty,
  popProperty,
  someProperty,
  findProperty,
  shiftProperty,
  unshiftProperty,
};
