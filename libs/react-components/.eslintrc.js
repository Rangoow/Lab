module.exports = {
  extends: ['plugin:@nrwl/nx/react', '../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
    {
      files: [`**/*.test.tsx`, `**/*.test.ts`],
      plugins: [`vitest`, `jest-extended`],
      extends: [`plugin:vitest/all`, `plugin:jest-extended/all`],

      rules: {},
    },
  ],
};
