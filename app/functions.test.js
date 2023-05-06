import functions from "./functions";

describe("Given a length function", () => {
  describe("When it receives the array ['java', 'javascript', 'python', 'C++']", () => {
    test("Then it should return 4", () => {
      const randomWords = ["java", "javascript", "python", "C++"];
      const result = 4;

      const expectedResult = functions.lengthProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a push function", () => {
  describe("When it receives 'barco'", () => {
    test("Then it should return 6", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = 6;

      const expectedResult = functions.pushProperty(randomWords, "barco");

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a some function", () => {
  describe("When it receives randomWords array, and the parameter of 'barco'", () => {
    test("Then it should return true", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const parameter = "casa";
      const result = true;

      const expectedResult = functions.someProperty(randomWords, parameter);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a find function", () => {
  describe("When it receives randomWords array, and the parameter of 'barco'", () => {
    test("Then it should return the word that matched the parameter", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const parameter = "casa";
      const result = "casa";

      const expectedResult = functions.findProperty(randomWords, parameter);

      expect(expectedResult).toBe(result);
    });
  });
});
