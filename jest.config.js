module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
};