module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts,jsx,tsx}', 
    '!src/**/*.d.ts', 
    '!src/app/**', // this should be tested via e2e tests
    '!src/lib/registry.tsx', // this is a third-party library
    '!src/styles/**', // styles are not covered
    '!src/**/stories.tsx', // stories are not covered
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel']
      }
    ]
  },
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
  }
}