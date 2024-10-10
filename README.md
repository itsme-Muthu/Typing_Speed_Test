# Typing_Speed_Test

The Typing Test application is a web-based tool designed to enhance users' typing skills through engaging and interactive typing exercises. Built with HTML, CSS, and JavaScript, this application allows users to practice typing accuracy and speed in a user-friendly environment. Users can type predefined paragraphs while the application tracks their performance, displaying metrics such as raw typing speed, accuracy, words per minute (WPM), and characters per minute (CPM), along with the number of mistakes made during the test.

Additionally, the application provides a result verdict after each test, summarizing the user's performance and highlighting areas for improvement. The backend server, built with Node.js and Express, connects to a MySQL database to store and retrieve users' highest WPM scores. With an intuitive interface featuring real-time feedback and the ability to restart tests, the Typing Test application aims to provide an effective platform for individuals looking to improve their typing efficiency and overall keyboard skills.

---

<h3>To download and run your Typing Test application files from your GitHub repository on your local machine, follow these steps:</h3>

<br>

<b>Step 1: Clone the Repository</b>
1) Open Terminal (Command Prompt or Git Bash):
  - On Windows, you can use Command Prompt or Git Bash.
  - On macOS or Linux, use the Terminal.

<br>

2) Navigate to the Desired Directory: Use the cd command to change to the directory where you want to clone your repository.
```bash
cd path/to/your/directory
```

3) Clone the Repository: Use the git clone command followed by the URL of your GitHub repository.
```bash
git clone https://github.com/your_username/Typing_Speed_Test.git
```
Replace ```your_username``` with your GitHub username.

<br>

<b>Step 2: Install Dependencies</b>
1) Navigate to the Cloned Directory:
```bash
cd Typing_Speed_Test
```
2)Install Node.js and NPM (if not already installed): Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download it from nodejs.org.

3) Install Project Dependencies: Run the following command to install the required dependencies listed in your ```package.json``` file:
```bash
npm install
```

<br> 

<b>Step 3: Set Up the Database</b>
1) Set Up MySQL: Ensure you have MySQL installed and running on your machine.

2) Create a Database: Use a MySQL client (like MySQL Workbench or command line) to create a database for your application.
```SQL
CREATE DATABASE test;
```
3) Run the Schema: Execute the ```schema.sql``` file in your MySQL database to create the necessary tables:
```SQL
SOURCE path/to/Typing_Speed_Test/database/schema.sql;
```

<br>

<b>Step 4: Configure Database Connection</b>
1) Update Database Credentials: In ```backend/server.js```, ensure the MySQL connection settings (```host```, ```user```, ```password```, ```database```) match your local MySQL setup.
```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'user_', 
    password: 'password_', 
    database: 'typing_test' 
});
```

<br>

<b>Step 5: Run the Application</b>
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

<b>Step 6: Start Typing!</b>
- Begin a typing test by following the on-screen instructions.
- After completing the test, view your metrics and see if you achieved a new highest WPM.
- Use the "Try Again" button to reset and start a new test session.

<b>Conclusion</b>
You should now be able to use your Typing Test application locally. If you encounter any issues, ensure that all dependencies are installed correctly, and your MySQL database is set up as required.

---

<h3>Technologies Used: </h3>

- <b>Node.js:</b>    Backend server runtime.
- <b>Express.js:</b> Web framework for Node.js.
- <b>MySQL:</b>      Database for storing high scores.
- <b>HTML5:</b>      Structure of the web application.
- <b>CSS3:</b>       Styling and layout.
- <b>JavaScript:</b> Frontend logic and interactivity.
- <b>Boxicons:</b>   Icon library for visual enhancements.

---

<h3>Project Structure and File Features</h3>

<h4>1. backend/server.js : </h4>
- <b>Purpose:</b> Manages the backend of the application, handling HTTP requests and MySQL interactions, specifically for fetching and updating the highest WPM data.
- <b>Features:</b>
       - Sets up an Express server to handle routing.
- Connects to a MySQL database to store and retrieve high scores.
- Defines API endpoints:
- GET /api/highest-wpm: Fetches the highest WPM from the database.
- POST /api/highest-wpm: Updates the highest WPM in the database when a new record is achieved.
- Serves static frontend files to the client.
