# 🔐 Password Strength Analyzer

A simple and user-friendly **Password Strength Analyzer** built using HTML, CSS, and JavaScript.

This application analyzes passwords in real time and provides a **strength score, estimated crack time, and security recommendations** using the `zxcvbn` password-strength estimation library.

---

## 🌐 Live Demo

**Live Website:**  
https://shreyasswasti.github.io/password-strength-analyzer/

---

## 📌 Project Overview

Weak and commonly used passwords are one of the major reasons behind account security breaches.

The Password Strength Analyzer helps users understand how secure their passwords are before using them.

It evaluates passwords using the **zxcvbn** library, which checks common passwords, predictable patterns, repeated characters, sequences, and other password characteristics.

All password analysis happens directly in the browser. Passwords are not sent to a server.

---

## ✨ Features

- 🔐 Real-time password analysis
- 📊 Password strength score
- 📈 Visual password strength indicator
- ⏱️ Estimated password cracking time
- 💡 Security recommendations
- 👁️ Show/Hide password option
- 📱 Responsive user interface
- ⚡ Instant feedback while typing
- 🔒 Client-side password analysis
- 🛡️ Powered by the `zxcvbn` password-strength estimation library

---

## 📊 Password Strength Levels

The analyzer uses the `zxcvbn` scoring system:

| Score | Strength |
|------:|----------|
| 0 | Very Weak |
| 1 | Weak |
| 2 | Fair |
| 3 | Strong |
| 4 | Very Strong |

The score is calculated based on how difficult a password is to guess, rather than simply checking whether it contains uppercase letters, numbers, or special characters.

---

## ⏱️ Crack Time Estimation

The application displays an estimated password-cracking time based on the analysis performed by `zxcvbn`.

Possible estimates include:

- Seconds
- Minutes
- Hours
- Days
- Months
- Years
- Centuries

**Note:** These values are estimates and do not guarantee how long an actual password attack would take. Actual cracking time depends on the attack method and available computing resources.

---

## 💡 Security Recommendations

The analyzer provides suggestions to help users improve their passwords.

Examples include:

- Use a longer password.
- Avoid commonly used passwords.
- Avoid repeated characters.
- Avoid predictable sequences.
- Use a unique password for every account.
- Consider using a strong passphrase.

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Security Library
- [zxcvbn](https://github.com/dropbox/zxcvbn)

---

## 📁 Project Structure

```text
password-strength-analyzer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

**Development Note:** Currently, the password analysis and testing logic is handled within the HTML file. This structure may be modified in future updates to improve code organization and maintainability.

---

## 🚀 Future Improvements

- Move password analysis logic into a separate JavaScript file.
- Improve the user interface and experience.
- Add more password-testing scenarios.
- Improve accessibility and browser compatibility.

---

## 🤝 Contributions

Suggestions, bug reports, and improvements are welcome. Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source. 
