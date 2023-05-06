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
  describe("When it receives the array ['java', 'javascript', 'python', 'C++']; and 'C#' and 'R' as parameters'", () => {
    test("Then it should return 6", () => {
      const defaultArray = ['java', 'javascript', 'python', 'C++'];
      const result = 6;

      const expectedResult = functions.unshiftProperty(defaultArray, "C#", "R");

      expect(expectedResult).toBe(result);
    });
  });
});













describe("Given a some function", () => {
  describe("When it receives randomWords array, and the parameter of 'barco'", () => {
    test("Then it should return true", () => {
      const defaultArray = ["hola", "adios", "avion", "casa", "coche"];
      const parameter = "casa";
      const result = true;

      const expectedResult = functions.someProperty(defaultArray, parameter);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a find function", () => {
  describe("When it receives randomWords array, and the parameter of 'barco'", () => {
    test("Then it should return the word that matched the parameter", () => {
      const defaultArray = ["hola", "adios", "avion", "casa", "coche"];
      const parameter = "casa";
      const result = "casa";

      const expectedResult = functions.findProperty(defaultArray, parameter);

      expect(expectedResult).toBe(result);
    });
  });
});
