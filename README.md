# Vidyashakti

Vidyashakti is a fundraising website. This folder contains the source code for the Vidyashakti application. The main file is `app.js`.

## app.js

This is the main file of the application. It handles user authentication, registration, and the main functionality of the fundraising platform.

### User Authentication

The application uses email as the username for user authentication. When a user tries to log in, the application checks if a user with the provided email exists and if the provided password matches the stored password. If the user does not exist or the password does not match, appropriate messages are logged.

### User Registration

The application allows new users to sign up. During the registration process, the user's email, password, full name, and phone number are collected. The password is hashed using the md5 algorithm before it is stored.

### Fundraising

The application allows users to create, view, and donate to fundraising campaigns. Each campaign has a title, description, goal amount, and current amount raised. Users can view the details of each campaign and make a donation.

## Dependencies

The application uses the following dependencies:

- Express.js for handling HTTP requests and responses
- Mongoose for interacting with the MongoDB database
- md5 for hashing passwords

## Usage

To run the application, use the following command:

```bash
node app.js
