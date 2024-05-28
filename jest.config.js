module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[jt]sx?$": ["babel-jest", { configFile: "./babel-jest.config.json" }]
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: [
    "/node_modules/",
  ],
};
