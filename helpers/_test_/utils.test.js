const { _nameNormalizator } = require('../utils');

const nameNormalizatorData = [
  { input: 'Jon Doe', output: 'Jon Doe' },
  { input: 'Jon%Doe', output: 'Jon Doe' },
  { input: '{Jon Doe}', output: 'Jon Doe' },
  { input: '[Jon] Doe', output: 'Jon Doe' },
  { input: '(Jon Doe)', output: 'Jon Doe' },
  { input: 'Jon +Doe', output: 'Jon Doe' },
  { input: '  Jon-Doe  ', output: 'Jon Doe' },
  { input: '......JON      DOE....', output: 'Jon Doe' },
  { input: 'JonDoe@gmail.com', output: 'Jondoe Gmail Com' }, // not work correctly with email
  { input: '+38095544523', output: '38095544523' } // not work correctly with phone
];

describe('Test utils.js', () => {
  test('Should return normalized name', () => {
    nameNormalizatorData.forEach((testObj) => {
      const name = _nameNormalizator(testObj.input);

      expect(name).toBe(testObj.output);
      expect(name).toBeInstanceOf(String);
    });
  });
});
