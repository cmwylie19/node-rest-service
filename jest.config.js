module.exports = {
  roots: ["<rootDir>/src"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/__mocks__/*",
    "<rootDir>/src/routes/*"
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  resolver: null,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
