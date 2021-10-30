mkdir tsc && cd $_
npm install eslint --save-dev
tsc -v
tsc index.ts
tsc index.ts --watch

## tsconfig.json

tsc --watch

---

npx eslint --init