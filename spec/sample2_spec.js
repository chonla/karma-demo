describe('Sample 2 test suite', () => {
    it('should be true', () => {
        var result = f1();
        expect(result).toBe(true);
    });

    it('should also be true', () => {
        var result = f2.s1();
        expect(result).toBe(true);
    });

    it('should also be false', () => {
        var result = f2.s2();
        expect(result).toBe(false);
    });
});