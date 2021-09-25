### Introduction

This sample repo is a basic native-react app inside a mono repo managed by yarn v2. It is using the `react-native-template-typescript` as the base.

To get started, just clone the repository and then run:

```
yarn install
```

Before you can start the ios app, you will also need to install the cocoa pods:

```
cd apps/mobile/ios
pod install
```

To run the ios app, first you need to start the metro server:

```
yarn run start
```

Now you need to build and run the app inside the simulator:

```
yarn run ios
```

### Packages setup notes

After running `yarn install` you must update the `package.json` file inside the `excelera-identity` package and add the `@excelera/config` dependency:

```
{
  "name": "@excelera/identity-service",
  "private": true,
  "packageManager": "yarn@3.0.2",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "yarn run clean && yarn run complie",
    "clean": "npx rimraf dist",
    "compile": "tsc --build"
  },
  "license": "MIT",
  "dependencies": {
    "@excelera/config": "1.0.0", <-- ADD THIS
    "axios": "0.21.4",
    "ramda": "0.27.1"
  }
}

```

Now you can build the packages with:

```
yarn run build
```

### Node Version

This repo is configured to use NodeJS v14. The tsconfig.json is target with the configuration from @tsconfig/node14

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Node 14",

  "compilerOptions": {
    "lib": ["es2020"],
    "module": "commonjs",
    "target": "es2020",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
