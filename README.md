### Choice of Technology:
- **React Native with TypeScript:** I chose React Native combined with TypeScript for its robust cross-platform capabilities, allowing seamless iOS and Android development. TypeScript adds an additional layer of type safety, enhancing code reliability and maintainability.
- **Firebase:** Utilized for its comprehensive suite of tools, especially for secure authentication and real-time database functionality. Firebase's scalability and ease of integration with React Native significantly streamline the development process.

### Design Principles:
- **User Experience:** I meticulously replicated the provided UI designs, focusing on precision and user-friendliness. Emphasis was placed on creating reusable components, enhancing the UI's adaptability across different sections of the application.
- **Responsive Design:** Responsiveness was a key focus, achieved through the adept use of `navigation` and `KeyboardAvoidScrollViewArea`. This approach ensures a seamless user experience on devices with varying screen sizes and orientations.
- **Consistency:** Consistency across the application was maintained by leveraging a set of reusable components. This approach not only ensured a uniform look and feel but also facilitated easier updates and maintenance.

### Implementation Details:
- **Authentication Flow:** Developed a dedicated `authManager` module to centralize all authentication-related operations with Firebase. This abstraction enhances code organization and simplifies the integration of authentication processes throughout the app.
- **Data Validation:** Implemented robust email validation to ensure user inputs are in a valid email format, enhancing data integrity and user experience.
- **Error Handling:** Integrated comprehensive error handling that provides user-friendly feedback and custom alerts in case of errors, greatly improving the app's reliability and usability.

### Testing and Debugging:
- **Testing Approach:** Conducted extensive manual testing on both debug and production builds to ensure functionality, performance, and user experience meet the highest standards.
- **Debugging Strategies:** Adopted a methodical, component-by-component debugging approach. This granular strategy allowed for precise identification and resolution of issues, ensuring a high-quality, stable application.

![Screenshot 2023-11-21 at 8 50 04 PM](https://github.com/iexcalibur/curly-login/assets/48850851/de8d6103-62aa-4cf5-95b7-5c9a136de714)

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
