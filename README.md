```markdown
# Real-Time Chat Application

## Team Members
- Rushi Kothari (MT2023064)
- Aman Pandey (MT2023171)

## Description

Our project proposal aims to create a user-friendly platform that enables communication and interaction among its users.

- Through the registration and login process, users will have access to personalized profiles, where they can update their avatar and display names to reflect their identity accurately.
- Using the DiceBear API, our platform will offer the option to generate random avatars, adding a touch of uniqueness to each user's profile.
- One of the core features of our platform includes the ability for users to create chat rooms, facilitating dynamic conversations with others in real-time.
- To enhance user experience, we'll implement an online status indicator, ensuring users can easily identify when others are available for communication.
- Additionally, our platform will feature a robust search functionality, allowing users to find specific chats or individuals within the platform.
- We'll integrate an emoji picker, enabling users to express themselves creatively during conversations.
- For users who prefer a darker interface, our platform will offer a sleek dark mode option, catering to diverse preferences and enhancing accessibility.
- Through these features, our project aims to provide a comprehensive and engaging platform for users to connect, communicate, and collaborate.

## Technology Stack

- **Frontend**: React and TailwindCSS
- **Authentication**: Firebase
- **Backend**: Node/Express for creating API endpoints
- **Database**: MongoDB for storing chat room members and their messages
- **Real-time Communication**: Socket.io

## DevOps Pipeline

- **Version Control System (VCS)**: Git
- **Containerization**: Docker
- **Continuous Integration and Continuous Deployment (CI/CD)**: Jenkins
- **Configuration Management**: Ansible
- **Container Orchestration**: Kubernetes
- **Monitoring and Logging**: ELK (Elasticsearch, Logstash, Kibana) stack

## Steps to Run the Project

1. **Clone the Repository**
   ```
   git clone https://github.com/your-username/real-time-chat-application.git
   ```

2. **Install Dependencies**
   ```
   cd real-time-chat-application
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add the following environment variables:
   ```
   FIREBASE_API_KEY=your-firebase-api-key
   FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   FIREBASE_PROJECT_ID=your-firebase-project-id
   MONGODB_URI=your-mongodb-uri
   ```

4. **Start the Development Server**
   ```
   npm start
   ```

5. **Build the Production Bundle**
   ```
   npm run build
   ```

6. **Deploy to Production**
   The project is set up with a DevOps pipeline using Jenkins, Ansible, and Kubernetes. Follow the deployment process specific to your infrastructure.

## Contributing

Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
```
