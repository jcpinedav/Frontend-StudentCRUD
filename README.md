# FrontEstudiantes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Main Features
## List Students
1. On the main view, you can see a list of registered students along with their respective details, such as name, age, gender, current course, and email.
2. The table supports pagination, allowing you to navigate through the list of students.
3. The table can also be filtered by typing in the search bar and can be sorted by clicking on the     column headers for name and age.
4. The data of the students is fetched from an API and displayed in table.
## Add Students
A form allows adding a new student by entering their name, age, gender, current course, and email.
Upon submitting the form, the data is validated and sent to the API to be recorded in the database.
## Edit Students
Existing students can be edited from the main list. When selecting a student, a form opens with the current student's information.
The user can modify the fields and save the changes, which are updated in the API.
## Delete Students
In the student list, there is an option to delete a student. Upon confirming the deletion, the student is removed from the database.
## View Student Details
At any time, the user can select a student to view their full details.

# Setup

## Change API Endpoint

If the backend API runs on a different port on your local machine, you will need to update the API endpoint in the environment configuration files.
To do this, navigate to [src/environments/] and modify the endpoint value in environment.ts and environment.prod.ts `endpoint: 'http://localhost:YOUR_PORT/'`

## To run the application in a local development environment

npm install
ng serve --o