# Project Overview: Password Manager

## Features:

### Add New Passwords:

Users can add a new password entry with fields for:

- Service Name (e.g., Google, Facebook)
- Username/Email
- Password
- Optional Notes

Input validation for fields (e.g., required fields like Service Name and Password).

Allow users to generate a random password (with options like length, special characters, etc.).

### View & Manage Passwords:

Display a list of saved passwords (show service name, username, and hidden password by default).
Provide the option to reveal/hide the password for each entry.
Allow users to copy the password to the clipboard.
Implement edit and delete functionality for each password entry.

### Search & Filter:

Add a search bar to search passwords by service name or username.
The search should filter results in real time as the user types.
Data Persistence with JSON Server:

Use a JSON server as a simple backend to store and retrieve password data via RESTful API.
Implement CRUD operations (Create, Read, Update, Delete) using fetch or axios for API calls.

### Password Strength Meter:

Add a password strength indicator when users input or generate passwords, showing levels like weak, moderate, and strong.
