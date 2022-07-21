# Student Management Application 🧑



## Brief Explanation about the Application ✍🏻

This is a web application that Student can arranged their notes and able to do all the functionalities . The System Admin create the user and validate the email , and send email to the User with temporary password and login link.

Then the User can login to the system that admin provided .If the Login fail then the error message is displaying else check the status of the profile and direct to the Sign Up page for the reset password.Then check the validation of the inputed user informations and display the alert when it is not valid informations.otherwise popup the success message ane redirect to the Login Page.

After the User Type was checked by admin with the User List.Meanwhile the User become the Student because  he/she register to the system and Student can do what he/she want.Mainly Student can Create her/his own Notes List and view them,Update the notes as he/she wish and finally delete the notes .All the data is stored and updating in the database.

![5fd80ce36e1a9c64f373d428_what-is-a-student-management-system-Thumb](https://user-images.githubusercontent.com/86104487/180269814-e37211d0-73a5-4c6a-9d6d-d36bcdf50560.png)


## Technologies 💻

I have used MERN stack for create almost all of the functionalities of this application. To create frontend I use React JS and for backend I used Node JS with Express. To store data I used MongoDB .

Backend Dependecies    --> cors , dotenv , express , mongoose <br>
Frontend Dependencies  -->  react ,  react-dom , react-router-dom , axios

![MERN-Stack-Development-and-Consulting-Services](https://user-images.githubusercontent.com/86104487/180270291-c754bfba-aa0b-4959-82e4-05c5d74b9a8e.jpg)


## Features ⚡️

📌Admin can Create User <br>
📌admin can validate the User <br>
📌student can login to the system<br>
📌student will be able to Add Notes,View Note List,Delete and Update Notes<br>
📌Success and Error messages are popup

## File structure 🧾

When I create this application I created seperate folders for implement the frontend and the backend. In the backend folder I created seperate folders for routes, database models and the middleware. And also in the Docs file it contains the Answers for Written Questionnaire . Then I create .env file to store the database connection link. But I did not include it to this repository because of the security. When you implement this application make sure to create that file and include the database connection link.

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
