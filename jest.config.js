module.exports = {
  testMatch: ['**/__tests__/**/*.test.js'],
  // Other Jest configurations if needed
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
