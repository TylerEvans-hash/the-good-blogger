const { test, expect } = require('@jest/globals');
const { format_date, format_plural } = require('../utils/helpers');

test('formate_date() returns a date string', () => {
    const date = new Date('2020-06-03 13:12:13');

    expect(format_date(date)).toBe('6/3/2020');
});

test('format_plural() returns plural version of a word', () => {
    const word_1 = 'Potato';
    const amount_1 = 4;

    const word_2 = 'Carrot';
    const amount_2 = 1;

    expect(format_plural(word_1, amount_1)).toBe('Potatos');
    expect(format_plural(word_2, amount_2)).toBe('Carrot');
})