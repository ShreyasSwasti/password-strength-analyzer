# Password Strength Analyzer

A fully functional, modern, and highly responsive Password Strength Analyzer web application. This project is perfect for a BCA final-year mini cybersecurity project, primarily focusing on clear and understandable vanilla JavaScript concepts and practical security tooling.

## Description

The Password Strength Analyzer provides real-time feedback on user passwords. As a user types, the application evaluates the password's strength, provides a visual meter, estimates crack time, and offers tailored suggestions for improvement. The application leverages the powerful [zxcvbn](https://github.com/dropbox/zxcvbn) library developed by Dropbox for accurate and realistic password strength estimation.

## Features

- **Real-Time Analysis**: Instantly checks password strength as you type.
- **Visual Strength Meter**: A dynamic color-coded bar (Red -> Orange -> Yellow -> Light Green -> Green) reflecting the password's score.
- **Estimated Crack Time**: Displays the approximate time required for a brute-force attack to crack the password.
- **Security Suggestions**: Provides targeted recommendations to improve the password strength based on its current structure.
- **Password Visibility Toggle**: A handy `[ Show Password ]` / `[ Hide Password ]` toggle button for better accessibility.
- **Quick Tips**: A static list of best practices for establishing strong passwords.
- **Strong Password Generator**: Generates a secure random 16-character password combining uppercase, lowercase, numbers, and symbols securely.

## Technologies Used

- **HTML5**: Structured semantic web elements.
- **CSS3**: Modern styling with a clean, dark-themed responsive card layout, using smooth CSS transitions. No external CSS frameworks were used.
- **Vanilla JavaScript**: Pure, framework-free logic, including DOM manipulation, event listening, and dynamic UI updates.
- **zxcvbn JS Library**: Loaded securely via CDN to handle advanced password strength estimation logic.

## How to Run the Project

1. Clone or download this repository.
2. Navigate to the `password-strength-analyzer` folder.
3. Simply open the `index.html` file in any modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
   *No servers to configure, no dependencies to install.*

## Project Structure

```
password-strength-analyzer
│
├── index.html     # The main webpage containing UI layout
├── style.css      # The stylesheet defining the visual presentation and responsiveness
├── script.js      # The program logic handling user inputs, zxcvbn analysis, and UI updates
└── README.md      # Project documentation
```

## Future Improvements

- Add light/dark theme switching functionality.
- Allow users to configure the length and character sets when generating random passwords.
- Integrate validation to check the password against known lists of breached passwords (e.g., using "Have I Been Pwned" API).
- Package the tool as a browser extension.

## Author
Senior Full-Stack Web Developer & Cybersecurity Tool Designer
