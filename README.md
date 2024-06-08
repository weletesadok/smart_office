# Smart Office

![Office](./frontend/src/assets/view.png)

## 📋 Table of Contents

## Note this project is under development and some features may not work.

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## 📝 Introduction

Smart Office is a cutting-edge application designed to enhance office productivity and streamline office management tasks. Built using the MERN (MongoDB, Express.js, React, Node.js) stack, this project aims to provide a seamless and intuitive user experience for managing office resources and activities.

## ✨ Features

- 🔐 **User Authentication**: Secure login and registration using JWT.
- 🔒 **Role-Based Access Control**: Different access levels for admins, managers, and employees.
- 📁 **File Uploads**: Efficient file management with the ability to upload and attach files to posts.
- 📧 **Comment and Like Posts**: Notifications posted by department heads.
- 📱 **Responsive Design**: Accessible on both desktop and mobile devices.
- 🕒 **Real-Time Updates**: Live updates for critical office information.

## 🛠 Tech Stack

**Frontend:**

- React
- Redux
- React Query

**Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for Authentication
- Multer for File Uploads
- Nodemailer for Email Notifications

## ⚙️ Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js
- npm
- MongoDB

### Backend Setup

1. Clone the repository
   ```sh
   git clone https://github.com/weletesadok/smart_office.git
   ```
2. Install NPM packages
   ```sh
   cd smart_office/backend
   mkdir files
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your environment variables
4. Make sure your MongoDB server is running
5. Run the backend server
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory
   ```sh
   cd ../frontend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the frontend server
   ```sh
   npm run dev
   ```

## 📖 Usage

Start by setting up the backend server first. Ensure your MongoDB server is running, then run the following commands:
`sh
    cd backend
    npm install
    npm run dev
    `
Next, go to the frontend folder and run:
`sh
    cd ../frontend
    npm install
    npm run dev
    `

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Ayele Masresha - [weletesadok](https://ayelemasresha.netlify.app)
