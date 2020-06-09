module.exports = {
    roots: ['<rootDir>/src'],
    coveragePathIgnorePatterns: ['<rootDir>/src/__mocks__/*', '<rootDir>/src/models/*', '<rootDir>/src/config/*'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
    },
    resolver: null,
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    }
  };
  