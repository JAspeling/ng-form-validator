module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  watchPathIgnorePatterns: ['<rootDir>/.git/'],
  collectCoverageFrom: [
    'projects/ng-form-validator-builder/src/**/*.{ts,tsx}',
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
