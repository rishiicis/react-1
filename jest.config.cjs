// jest.config.cjs
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: [
  "**/*.test.jsx"
],
};

// testMatch: [
//     "**/?(*.)+(test|spec).[jt]sx?" // matches *.test.js, *.test.jsx
//   ]