const lib = require("../lib");
const db = require('../db');

// You can use it() or test(). It does not matter

describe('absolute', () => {

    it('should return a positive nuumber if input is positive', () => {
        const result = lib.absolute(1)
        expect(result).toBe(1);
    });

    it('should return a positive nuumber if input is negative', () => {
        const result = lib.absolute(-2)
        expect(result).toBe(2);
    });

    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0)
        expect(result).toBe(0);
    });
})

describe('greet', () => {
    test('should return the greeting message', () => {
        const result = lib.greet("Fazliddin");
        // 1 way
        expect(result).toMatch(/Fazliddin/);
        // 2 way
        expect(result).toContain("Fazliddin");
    })
})

describe('getCurrencies', () => {
    it("should return supported currencies", () => {
        const result = lib.getCurrencies('USD');

        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']))
    })
});

describe('getProduct', () => {
    it('should return product id', () => {
        const result = lib.getProduct(1);
        // toEqual
        expect(result).toEqual({ id: 1, price: 10, category: "a" })
        // toMatchObject
        expect(result).toMatchObject({ id: 1, price: 10 })
        // toHaveProperty
        expect(result).toHaveProperty('id', 1)
    })
})

describe('resgisterUser', () => {
    test('should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false];

        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        });
    });

    test('should return a user object if valid user is passed', () => {
        const result = lib.registerUser('mosh');
        expect(result).toMatchObject({ username: 'mosh' });
        expect(result.id).toBeGreaterThan(0);
    })
})

describe('applyDiscount', () => {
    test('should apply 10% descount if customer has more than 10 points', () => {

        db.getCustomerSync = function (customerId) {
            console.log('Faka reading customer...');
            return { id: customerId, points: 20 };
        }

        const order = { cusmerId: 1, totalPrice: 10 };
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9)
    });
});

describe('notifyCustomer', () => {
    it('should send an email to the customer', () => {
        db.getCustomerSync = function (customerId) {
            return { email: 'a' };
        }
    })
})
