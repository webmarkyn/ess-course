import calculateStats from './index';

describe('stats calculator', () => {
    it('should return an object', () => {
        const result = calculateStats([1, 2, 3, 4, 5]);
        expect(typeof result).toBe('object');
    });
})