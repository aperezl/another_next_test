const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './'
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).js?(x)']
}
module.exports = createJestConfig(customJestConfig)
