const lengthProperty = (array) => {
  let index = 0;
  
  // eslint-disable-next-line guard-for-in
  for (index in array) {
    index++;
  }
  
  return index;
};

const pushProperty = (array, ...newElements) => {
  const newArray = [...array];

  const totalArrayElements = [...newArray, ...newElements];

  return lengthProperty(totalArrayElements);
};

const popProperty = (array) => {
  const totalArrayElements = lengthProperty(array);
  return array[totalArrayElements - 1];
};

const unshiftProperty = (array, ...newElements) => {
  const totalArrayElements = [...newElements, ...array,]

  const totalArrayLength = lengthProperty(totalArrayElements);

  return totalArrayLength;
};

const shiftProperty = (array) => {
  const firstArrayElement = array[0];
  for (let i = 0; i < lengthProperty(array); i++) {
    array[i - 1] = array[i];
  }

  popProperty(array);
  return firstArrayElement;
};

const someProperty = (array, element) => {
  const totalArrayLength = lengthProperty(array);

  for (let i = 0; i < totalArrayLength; i++) {
    if (array[i] === element) {
      return true;
    }
  }

  return false;
};

const findProperty = (array, element) => {
  const newArrayLength = lengthProperty(array);

  for (let i = 0; i < newArrayLength; i++) {
    if (array[i] === element) {
      return array[i];
    }
  }
};

const filterProperty = (array, element) => {
  const filteredElement = [];
  const totalArrayElements = [array, element]
  const totalArrayLength = lengthProperty(totalArrayElements);

  for (let i = 0; i < totalArrayLength; i++) {
    if (array[i] === element) {
      filteredElement.push(array[i])
    }
  }

  return filteredElement;
};

const includesProperty = (array) => {
  if (array.find((element) => element)) {
    return true;
  }
};

const joinProperty = (array, element) => {
  const joinedArray = []

  for (let index = 0; index < array.length; index++) {
    const addElement = array[index] + element;
    joinedArray.push(addElement)
  }
  
  return joinedArray;
};

export default {
  lengthProperty,
  pushProperty,
  popProperty,
  unshiftProperty,
  shiftProperty,
  someProperty,
  findProperty,
  filterProperty,
  includesProperty,
  joinProperty,
};
