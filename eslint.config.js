// .eslintrc.js
import globals from 'globals'

export default {
  // ... other configurations
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      languageOptions: {
        globals: globals.browser,
      },
      plugins: ['prettier'],
      extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
      rules: {
        'prettier/prettier': 'error',
        // ... other rules
      },
    },
  ],
}
