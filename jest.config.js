/* eslint-disable no-undef */
export default {
  testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      customExportConditions: [''],
    },
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleDirectories: ['node_modules'],

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
        "^@/(.*)$": "<rootDir>/src/$1",
      },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    setupFiles: ['./jest.polyfills.js'],

    modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],


  };

