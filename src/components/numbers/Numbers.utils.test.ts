import { expect, it, describe } from "vitest";
import { numberToString } from "./Numbers.utils";

describe("One digit", () => {
    it("should return 0 when input is 0", () => {
        expect(numberToString(0, 1)).toBe("0");
    });

    it("should return 5 when input is 5", () => {
        expect(numberToString(5, 1)).toBe("5");
    });

    it("should return 12 when input is 12", () => {
        expect(numberToString(12, 1)).toBe("12");
    });
});

describe("Two digits", () => {
    it("should return 00 when input is 0", () => {
        expect(numberToString(0, 2)).toBe("00");
    });

    it("should return 09 when input is 9", () => {
        expect(numberToString(9, 2)).toBe("09");
    });

    it("should return 12 when input is 12", () => {
        expect(numberToString(12, 2)).toBe("12");
    });
});

describe("Three digits", () => {
    it("should return 000 when input is 0", () => {
        expect(numberToString(0, 3)).toBe("000");
    });
    it("should return 001 when input is 1", () => {
        expect(numberToString(1, 3)).toBe("001");
    });
    it("should return 010 when input is 10", () => {
        expect(numberToString(10, 3)).toBe("010");
    });
    it("should return 777 when input is 777", () => {
        expect(numberToString(777, 3)).toBe("777");
    });
    it("should return 1024 when input is 1024", () => {
        expect(numberToString(1024, 3)).toBe("1024");
    });
});
