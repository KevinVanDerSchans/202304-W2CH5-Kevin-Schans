import based from "./index";

describe("Given a length function", () => {
  describe("When it receives the array ['hola', 'adios', 'avion', 'casa', 'coche']", () => {
    test("Then it should return 5", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = 5;

      const expectedResult = based.lengthProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a push function", () => {
  describe("When it receives 'barco'", () => {
    test("Then it should return 6", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = 6;

      const expectedResult = based.pushProperty(randomWords, "barco");

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

      const expectedResult = based.someProperty(randomWords, parameter);

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

      const expectedResult = based.findProperty(randomWords, parameter);

      expect(expectedResult).toBe(result);
    });
  });
});
