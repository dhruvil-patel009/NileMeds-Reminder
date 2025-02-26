1:50:00
<<<<<<< HEAD

# NileMeds-Reminder

# NileMeds Reminder helps you manage your medication schedule effortlessly. Set reminders for pills, injections, and other medical needs with adjustable time and dates. Stay on track with your prescriptions and never miss a dose again. Simple, reliable, and essential for your health!

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

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

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
  > > > > > > > b70ed0e (Initial commit)


# 📱 Convert AAB to APK

Easily convert an Android App Bundle (`.aab`) file to an APK file using **BundleTool**.

## 🚀 Steps to Convert AAB to APK

### 1️⃣ Install BundleTool
First, download and install **BundleTool** from the official source.

### 2️⃣ Prepare Your Files
- Create a new folder.
- Place both `bundletool.jar` and your `.aab` file inside this folder.

### 3️⃣ Open Terminal
- Navigate to the folder where you placed the files using the terminal.

### 4️⃣ Run the Command
Execute the following command:

```sh
java -jar bundletool.jar build-apks --bundle=your_app.aab --output=output_filename.apks --mode=universal
```

🔹 **Replace:**  
- `bundletool.jar` with the actual filename of your bundle tool.  
- `your_app.aab` with your `.aab` file.  
- `output_filename.apks` with your desired output file name.  

### 5️⃣ Extract APK
Once the command runs successfully, you will get an `.apks` file. Extract it using a file manager or this command:

```sh
unzip output_filename.apks -d output_folder
```

Inside the extracted folder, you will find your APK file ready to install. ✅

## 🎯 Done!
You have successfully converted your `.aab` file to an `.apk` file. 🎉


