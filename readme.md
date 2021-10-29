mkdir tsc && cd $_
sudo npm install -g typescript
tsc -v
tsc index.ts
tsc index.ts --watch

## tsconfig.json

tsc --watch