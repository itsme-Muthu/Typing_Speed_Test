# Typing_Speed_Test

The Typing Test application is a web-based tool designed to enhance users' typing skills through engaging and interactive typing exercises. Built with HTML, CSS, and JavaScript, this application allows users to practice typing accuracy and speed in a user-friendly environment. Users can type predefined paragraphs while the application tracks their performance, displaying metrics such as raw typing speed, accuracy, words per minute (WPM), and characters per minute (CPM), along with the number of mistakes made during the test.

Additionally, the application provides a result verdict after each test, summarizing the user's performance and highlighting areas for improvement. The backend server, built with Node.js and Express, connects to a MySQL database to store and retrieve users' highest WPM scores. With an intuitive interface featuring real-time feedback and the ability to restart tests, the Typing Test application aims to provide an effective platform for individuals looking to improve their typing efficiency and overall keyboard skills.

To download and run your Typing Test application files from your GitHub repository on your local machine, follow these steps:

Step 1: Clone the Repository
1) Open Terminal (Command Prompt or Git Bash):
  - On Windows, you can use Command Prompt or Git Bash.
  - On macOS or Linux, use the Terminal.
  
2) Navigate to the Desired Directory: Use the cd command to change to the directory where you want to clone your repository.
```bash
cd path/to/your/directory
```

3) Clone the Repository: Use the git clone command followed by the URL of your GitHub repository.
```bash
git clone https://github.com/your_username/Typing_Speed_Test.git
```
Replace ```your_username``` with your GitHub username.

Step 2: Install Dependencies
1) Navigate to the Cloned Directory:
```bash
cd Typing_Speed_Test
```
2)Install Node.js and NPM (if not already installed): Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download it from nodejs.org.

3) Install Project Dependencies: Run the following command to install the required dependencies listed in your ```package.json``` file:
```bash
npm install
```

Step 3: Set Up the Database
1) Set Up MySQL: Ensure you have MySQL installed and running on your machine.

2) Create a Database: Use a MySQL client (like MySQL Workbench or command line) to create a database for your application.
```SQL
CREATE DATABASE test;
```
3) Run the Schema: Execute the ```schema.sql``` file in your MySQL database to create the necessary tables:
```SQL
SOURCE path/to/Typing_Speed_Test/database/schema.sql;
```

Step 4: Run the Application
1) Start the Server: In your terminal, run the following command to start the backend server:
```bash
node backend/server.js
```
Make sure you're in the project directory when running this command.

2) Open the Frontend: Open your web browser and navigate to:
```arduino
http://localhost:3000
```
Replace ```3000``` with the port number specified in your ```server.js``` file if it’s different.
