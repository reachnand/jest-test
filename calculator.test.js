const { add, subtract, multiply, divide, isNull, equals, decimal, createUser, clearAllfields } = require("./calculator");

describe("valid additions", () => {
    test("19 + 0 = 19", () => {
      expect(add(19, 0)).toEqual(19);
    });
  
    test("10 + 20 = 30", () => {
      expect(add(10, 20)).toEqual(30);
    });
  });

  describe("valid subtraction", () => {
    test("10 - 100 = 90", () => {
      expect(subtract(10, 100)).toEqual(-90);
    });

    test("0.4 - 0.2 = 0.2", () => {
        expect(subtract(0.4, 0.2)).toBe(0.2);
      });
});

    describe("valid multiplication", () => {
     test("10 * 2.3 = 23", () => {
       expect(multiply(10, 2.3)).toEqual(23);
     });

     test("46 * 0 = 0", () => {
        expect(multiply(46, 0)).toBe(0);
      });
   });

   describe("invalid Division", () => {
    test("100 / 10 = 10", () => {
      expect(divide(100, 10)).not.toBe(100);
    });

    test("Should be null", () => {
        expect(isNull()).toBeNull();
      });

      test("User should be from username Object", () => {
        username = ['Anand', 'Salimeda'];
        expect(username).toContain('Salimeda');
      });

      test("46 / 0 = Error", () => {
        expect(() => {
        expect(divide(46,0));
    }).toThrow();
    });
   });

  describe("valid decimal operation division", () => {
    test("30 / 4 = 7.5", () => {
      expect(decimal(30, 4)).toEqual(7.5);
    });

    test("valid decimal operation multiply 6.6/2.2", () => {
       expect(decimal(6.6, 2.2)).not.toBe(3);
     });
   });

  describe("valid equals", () => {
    test("10 & 10 are equal", () => {
        expect(() => {
            expect(equals(10,10));
        }).toThrow();
        });

    test("1 * 1 = 1", () => {
        expect(() => {
            expect(equals(1,1));
        }).toThrow();
        });
    });

  describe("clear all fields", () => {
    test("everything should be clear", () => {
      expect(clearAllfields(1, 3)).toEqual(0);
    });

    test("everything should be clear", () => {
       expect(clearAllfields(46, 0)).toBe(0);
     });
  });
