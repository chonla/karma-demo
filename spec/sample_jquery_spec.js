describe('Sample test suite with jQuery', () => {
    it('should match text', () => {
        setFixtures('<div id="some-id">Text</div>');
        var result = get_text('some-id');
        expect(result).toEqual('Text');
    });
});