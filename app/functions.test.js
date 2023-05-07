import functions from "./functions";

describe("Given a length function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'", () => {
    test("Then it should return 4", () => {
      const defaultArray = ["java", "javascript", "python", "C++"];
      const result = 4;

      const expectedResult = functions.lengthProperty(defaultArray);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a push function", () => {
  describe("When it receives 'PHP'", () => {
    test("Then it should return 5", () => {
      const defaultArray = ["java", "javascript", "python", "C++"];
      const result = 5;

      const expectedResult = functions.pushProperty(defaultArray, "PHP");

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a pop function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'", () => {
    test("Then it should return C++", () => {
      const defaultArray = ["java", "javascript", "python", "C++"];
      const result = "C++";

      const expectedResult = functions.popProperty(defaultArray);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given the unshift function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']; and 'C#' and 'R' as parameters'", () => {
    test("Then it should return 6", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const result = 6;

      const expectedResult = functions.unshiftProperty(defaultArray, "C#", "R");

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given the shift function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'", () => {
    test("Then it should return 'java'", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const result = 'java';

      const expectedResult = functions.shiftProperty(defaultArray);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a some function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'; and 'python' as a parameter", () => {
    test("Then it should return true", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const element = "python";
      const result = true;

      const expectedResult = functions.someProperty(defaultArray, element);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a find function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'; and 'javascript' as a parameter", () => {
    test("Then it should return 'javascript'", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const element = "javascript";
      const result = "javascript";

      const expectedResult = functions.findProperty(defaultArray, element);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a filter function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'; and 'java' as a parameter", () => {
    test("Then it should return '['java']'", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const element = 'java';
      const result = ['java'];

      const expectedResult = functions.filterProperty(defaultArray, element);

      expect(expectedResult).toStrictEqual(result);
    });
  });
});

describe("Given a includes function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'", () => {
    test("Then it should return true]'", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const element = 'python';
      const result = true;

      const expectedResult = functions.includesProperty(defaultArray, element);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given the join function", () => {
  describe("When it receives the array '['java', 'javascript', 'python', 'C++']'", () => {
    test("Then it shoud join every element with the parameter", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const element = '---';
      const result = [
        'java---',
        'javascript---',
        'python---',
        'C++---',
      ]

      const expectedResult = functions.joinProperty(defaultArray, element);

      expect(expectedResult).toStrictEqual(result);
    });
  });
});
