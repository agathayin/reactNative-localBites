# Welcome to your Expo app 👋

This is an React Native project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). It is built with React Native, Expo, Firestore, and other dependencies.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Dependencies:

- Expo
- React
- React Native
- React Native Paper
- Expo Vector Icons

## Structure:

- app: layout and index. It should be used for routes and global UI layout.
- assets: fonts and images
- src: components, data, and screens.

## Learning notes

[Expo documentation](https://docs.expo.dev/)  
Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).

[Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)  
Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

[Firebase / Firestore](https://firebase.google.com/docs/web/setup)  
Create new project in Firebase console (see [set up guide](https://firebase.google.com/docs/firestore/quickstart)). Save the project info such as api key, project info, and extra in firebaseConfig.ts. Use `firebase/firestore` to init get, add, or delete data. All related codes are in Home.tsx.  
more info in [firestore doc](https://firebase.google.com/docs/firestore/quickstart)
