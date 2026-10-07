# 🔐 Password Strength Analyzer

A simple and user-friendly **Password Strength Analyzer** built with HTML, CSS, and JavaScript.

The application analyzes a password in real time and provides a **strength score, estimated crack time, and security recommendations** using the `zxcvbn` password-strength estimation library.

---

## 🌐 Live Demo

**Live Website:**  
https://shreyasswasti.github.io/password-strength-analyzer/

---

## 📌 Project Overview

Weak and commonly used passwords are one of the major causes of account compromise.

The Password Strength Analyzer helps users understand how secure their passwords are before using them. It evaluates passwords using the **zxcvbn** library, which considers common passwords, patterns, repeated characters, sequences, and other password characteristics.

The tool provides immediate feedback without sending the password to a server.

---

## ✨ Features

- 🔐 Real-time password analysis
- 📊 Password strength score
- 📈 Visual strength indicator
- ⏱️ Estimated password cracking time
- 💡 Security suggestions
- 👁️ Show/Hide password option
- 📱 Responsive user interface
- ⚡ Instant analysis while typing
- 🔒 Client-side password analysis
- 🛡️ Uses the `zxcvbn` password-strength estimation library

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

The score is calculated based on how difficult the password is to guess rather than simply checking whether it contains uppercase letters, numbers, or symbols.

---

## ⏱️ Crack Time Estimation

The application displays an estimated time required to crack the password based on the analysis performed by `zxcvbn`.

Examples include:

- Seconds
- Minutes
- Hours
- Days
- Months
- Years
- Centuries

The displayed value is an **estimate**, not a guarantee of how long an actual attack would take.

---

## 💡 Security Recommendations

The analyzer provides suggestions when a password can be improved.

Examples:

- Use a longer password
- Avoid commonly used passwords
- Avoid repeated characters
- Avoid predictable sequences
- Use a unique password
- Consider using a passphrase

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
