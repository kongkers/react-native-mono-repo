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
