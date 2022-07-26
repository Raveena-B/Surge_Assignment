# Student Note Application🧑



## Brief Explanation about the Application ✍🏻

This is a web application that Student can arranged their notes and able to do all the functionalities . The System Admin create the user by providing an email and temporary password, and send email to the user with login link.

The User can then log in to the system using the admin-provided credentials. The system verifies the user status (whether the user is logging in for the first time or not) and the user type  (Whether is Student or an admin ). The user is then taken directly to the screen where they can enter some information and reset their password.After reset he/she need to login again and direct to the home screen otherwise display an error message. 

The student can create his or her own Notes List, view it, modify it as needed, and then remove it. The database contains and continuously updates all the data. Admin has the ability to view and create users.


![Hero-image](https://user-images.githubusercontent.com/86104487/180998498-10f4f1b3-26cd-481b-a0ca-9138ca408d97.svg)

## Tools & Technologies 💻


I have used MERN stack for create almost all of the functionalities of this application. To create frontend I use React JS and for backend I used Node JS with Express. To store data I used MongoDB . The VS Code and Postman  are used as tool for development of the application

Backend Dependecies    --> cors , dotenv , express , mongoose <br>
Frontend Dependencies  -->  react ,  react-dom , react-router-dom , axios , nodemon 


![mern-stack-1024x284](https://user-images.githubusercontent.com/86104487/180997967-296ccb44-75fe-4a67-ad21-1c25f8b6e4ff.png)



## Features ⚡️

📌Admin can Create User and View All User Details<br>
📌Admin can validate the User <br>
📌User can login to the system<br>
📌User can reset the password <br>
📌Student will be able to Add Notes,View Note List,Delete and Update Notes<br>
📌Loading ,Success and Error messages are Displaing seperatelly

## File structure 🧾

When I create this application I created seperate folders for implement the frontend and the backend. In the backend folder I created seperate folders for routes, database models and the middleware. And also in the Docs file it contains the Answers for Written Questionnaire . Then I create .env file to store the database connection link. But I did not include it to this repository because of the security. When you implement this application make sure to create that file and include the database connection link. I implemented seed file to add admin to the database directly

In the forntend I created seperate folder to contain the React components.

# Installation 😎

## Clone the applicaiton

``` git clone https://github.com/Raveena-B/Surge_Assignment ```

## Run the Application 

Navigate to the backend folder. And then run

```npm install```

Do same for frontend folder. This will install all the dependency packages into the project. Then navigate to the backend folder and run

```npm run dev```

And the application will run on the port 3000 in your browser.
