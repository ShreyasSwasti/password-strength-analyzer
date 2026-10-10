// Select elements from the DOM
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const meter = document.getElementById('meter');
const scoreText = document.getElementById('scoreText');
const crackTimeText = document.getElementById('crackTime');
const suggestionsContainer = document.getElementById('suggestionsContainer');
const suggestionsList = document.getElementById('suggestionsList');
const generatePasswordBtn = document.getElementById('generatePassword');
const generatedPasswordDisplay = document.getElementById('generatedPassword');

// Password security checklist elements
const passwordChecks = [
    {
        id: 'checkLength',
        test: password => password.length >= 8
    },
    {
        id: 'checkUppercase',
        test: password => /[A-Z]/.test(password)
    },
    {
        id: 'checkLowercase',
        test: password => /[a-z]/.test(password)
    },
    {
        id: 'checkNumber',
        test: password => /[0-9]/.test(password)
    },
    {
        id: 'checkSpecial',
        test: password => /[^A-Za-z0-9]/.test(password)
    }
];

function updatePasswordChecklist(password) {
    passwordChecks.forEach(check => {
        const element = document.getElementById(check.id);
        const passed = check.test(password);

        element.classList.toggle('passed', passed);
        element.textContent =
            `${passed ? 'âœ“' : 'âœ—'} ${element.textContent.substring(2).trim()}`;
    });
}


/**
 * Array to map zxcvbn score (0-4) to user-friendly text descriptions
 */
const strengthLabels = [
    "Very Weak",   // 0
    "Weak",        // 1
    "Fair",        // 2
    "Strong",      // 3
    "Very Strong"  // 4
];

/**
 * Password input event listener
 * Runs every time the user types in the password field
 */
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    updatePasswordChecklist(password);

    // Handle empty password scenario
    if (password === "") {
        meter.className = "meter"; // Reset meter styling
        scoreText.textContent = "Enter a password";
        scoreText.className = "";
        crackTimeText.textContent = "-";
        
        // Hide suggestions section
        suggestionsContainer.style.display = 'none';
        suggestionsList.innerHTML = '';
        return;
    }

    // Analyze password strength using zxcvbn library
    const result = zxcvbn(password);
    
    // Extract properties: score, crack time, suggestions
    const score = result.score;
    let crackTime = result.crack_times_display.offline_slow_hashing_1e4_per_second;
    const suggestions = result.feedback.suggestions;

    // If crack time is not available or "instant", format it cleanly
    if (crackTime === "less than a second") {
        crackTime = "Few seconds";
    }

    // 1. Update visual strength meter class (e.g., 'meter meter-3')
    meter.className = `meter meter-${score}`;

    // 2. Update password strength text with appropriate color
    scoreText.textContent = strengthLabels[score];
    scoreText.className = `text-${score}`;

    // 3. Update estimated crack time
    crackTimeText.textContent = crackTime;
    
    // 4. Show security suggestions if any exist
    if (suggestions.length > 0) {
        suggestionsContainer.style.display = 'block';
        suggestionsList.innerHTML = ''; // Clear previous suggestions
        
        // Add new suggestions dynamically
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            suggestionsList.appendChild(li);
        });
    } else {
        // Hide container if no suggestions are found
        suggestionsContainer.style.display = 'none';
    }
});

/**
 * Toggle Password Visibility Functionality
 * Switches between 'password' and 'text' input types
 */
togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = '[ Hide Password ]';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = '[ Show Password ]';
    }
});

/**
 * Optional Advanced Feature: Generate Strong Password
 * Creates a secure, random 16-character password using various character sets
 */

generatePasswordBtn.addEventListener('click', () => {
    const charsLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const charsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charsNumbers = "0123456789";
    const charsSymbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const characterSets = [
        charsLowerCase,
        charsUpperCase,
        charsNumbers,
        charsSymbols
    ];

    const allChars = characterSets.join("");
    const passwordLength = 16;
    const passwordCharacters = [];

    // Generate a cryptographically secure random integer
    function secureRandomIndex(max) {
        const range = 0x100000000;
        const limit = range - (range % max);
        const randomValue = new Uint32Array(1);

        do {
            crypto.getRandomValues(randomValue);
        } while (randomValue[0] >= limit);

        return randomValue[0] % max;
    }

    // Include at least one character from each character set
    characterSets.forEach(characterSet => {
        passwordCharacters.push(
            characterSet[secureRandomIndex(characterSet.length)]
        );
    });

    // Fill the remaining positions
    while (passwordCharacters.length < passwordLength) {
        passwordCharacters.push(
            allChars[secureRandomIndex(allChars.length)]
        );
    }

    // Securely shuffle the characters
    for (let i = passwordCharacters.length - 1; i > 0; i--) {
        const j = secureRandomIndex(i + 1);
        [passwordCharacters[i], passwordCharacters[j]] =
            [passwordCharacters[j], passwordCharacters[i]];
    }

    const generatedPassword = passwordCharacters.join("");

    // Display the generated password
    generatedPasswordDisplay.style.display = 'block';
    generatedPasswordDisplay.textContent = generatedPassword;

    // Update the password field and run the existing analysis
    passwordInput.value = generatedPassword;
    passwordInput.type = 'text';
    togglePasswordBtn.textContent = '[ Hide Password ]';
    passwordInput.dispatchEvent(new Event('input'));
});
