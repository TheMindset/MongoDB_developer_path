#### Husky config

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "linters": {
    "*.js": [
      "prettier --write",
      "eslint --fix",
      "npm test",
      "git add"
    ]
  },
  "ignore": [
    "**/build/**",
    "**/data/**"
  ]
},
```