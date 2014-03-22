
describe("My Converter", function () {
    it("should convert imperial weight to metric", function () {
        expect(Converter.convertFromImperialToMetric(2.2)).toBe(1);
        expect(Converter.convertFromImperialToMetric(4.4)).toBe(2);
    });

    it("should convert metric weight to imperial", function () {
        expect(Converter.convertFromMetricToImperial(1)).toBe(2.2);
    });

    it("should throw the appropriate error when a string is passed in as a param", function () {
        expect(Converter.convertFromImperialToMetric("hello")).toBe("Not a Number");
        expect(Converter.convertFromMetricToImperial("hello")).toBe("Not a Number");
    });

});