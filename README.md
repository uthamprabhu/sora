# Sora - AI Reels Application

Sora is a cutting-edge AI Reels application that showcases AI-generated images alongside the prompts used to create them. Built with modern tools and technologies like React Native, Expo, Tailwind CSS, and Appwrite, Sora delivers a smooth and visually appealing experience for users who want to explore the creative possibilities of AI.

---

## Features

- **AI-Generated Reels**: Browse stunning AI-generated images.
- **Prompt Display**: See the exact prompts used to generate the AI content.
- **Responsive Design**: Tailored for seamless use across various devices.
- **Modern Tech Stack**: Developed using React Native, Expo, Tailwind CSS, and Appwrite for robust functionality and great performance.

---

## App Preview

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">

  <img src="./assets/app-previews/preview1.png" alt="Sora App Preview 1" width="150" style="margin: 5px;">
  <img src="./assets/app-previews/preview2.png" alt="Sora App Preview 2" width="150" style="margin: 5px;">
  <img src="./assets/app-previews/preview3.png" alt="Sora App Preview 3" width="150" style="margin: 5px;">
  <img src="./assets/app-previews/preview4.png" alt="Sora App Preview 4" width="150" style="margin: 5px;">
  <img src="./assets/app-previews/preview5.png" alt="Sora App Preview 5" width="150" style="margin: 5px;">
  <img src="./assets/app-previews/preview6.png" alt="Sora App Preview 6" width="150" style="margin: 5px;">

</div>


---

## Prerequisites

Before you get started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://expo.dev/)

---

## Setup Instructions

Follow these steps to clone and run the app locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/sora-ai-reels.git
cd sora-ai-reels
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Appwrite

Sora uses Appwrite as its backend. To set it up:

1. Install and configure [Appwrite](https://appwrite.io/docs) on your server.
2. Create a new project in Appwrite and set up the necessary collections for storing AI reels and prompts.
3. Update the `appwriteConfig` in your project to include your Appwrite endpoint, project ID, and API key.

### 4. Start the Development Server
```bash
expo start
```

This will start the Expo development server. You can scan the QR code using the Expo Go app on your phone or run the app in an emulator.

---

## Running on a Device or Emulator

- **iOS**: Open in Xcode or use the Expo Go app.
- **Android**: Use Android Studio or scan the Expo QR code.

For more details, refer to the [Expo Documentation](https://docs.expo.dev/).

---

## Tech Stack

- **Frontend**: React Native, Tailwind CSS, Native Wind
- **Backend**: Appwrite
- **Other Tools**: Expo Go, Expo

---

## Project Structure

```plaintext
📂 sora-ai-reels
├── 📂 assets         # Static assets (images, icons, etc.)
├── 📂 components     # Reusable UI components
├── 📂 screens        # App screens (Home, Details, etc.)
├── 📂 utils          # Utility functions and constants
├── 📄 App.js         # Entry point of the application
├── 📄 tailwind.config.js # Tailwind CSS configuration
└── 📄 package.json   # Project dependencies
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: uthamprabhu1@gmail.com
- **GitHub**: [uthamprabhu](https://github.com/uthamprabhu)

Enjoy exploring the possibilities with Sora! 🚀
