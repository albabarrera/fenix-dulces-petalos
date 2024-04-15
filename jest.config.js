export default {
    testEnvironment: "jsdom",

    testEnvironmentOptions: {
      customExportConditions: [''],
    },
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
        "^@/(.*)$": "<rootDir>/src/$1",
      },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    setupFiles: ['./jest.polyfills.js'],

  };