// 01. Create labels
const formContainer = document.getElementById('form-container');

// Create and add label for Username
const usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.textContent = 'Username: ';
formContainer.insertBefore(usernameLabel, document.getElementById('username'));

// Create and add label for Password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = 'Password: ';
formContainer.insertBefore(passwordLabel, document.getElementById('password'));

// Create and add label for Confirm Password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirm-password');
confirmPasswordLabel.textContent = 'Confirm Password: ';
formContainer.insertBefore(confirmPasswordLabel, document.getElementById('confirm-password'));

// 02. Get references to the input fields and submit button
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('success-message');

// Add event listeners to input fields
usernameInput.addEventListener('input', enableSubmitButton);
passwordInput.addEventListener('input', enableSubmitButton);
confirmPasswordInput.addEventListener('input', enableSubmitButton);

// Add validation on submit
submitBtn.addEventListener('click', function() {
  const isUsernameValid = validateInput('username', 'username-error', 'Username is required');
  const isPasswordValid = validateInput('password', 'password-error', 'Password is required');
  const isConfirmPasswordValid = validateInput('confirm-password', 'confirm-password-error', 'Confirmation is required');
  
  if (isPasswordValid && isConfirmPasswordValid) {
    const passwordsMatch = validatePasswordMatch('password', 'confirm-password', 'confirm-password-error', 'Passwords do not match');
    if (isUsernameValid && passwordsMatch) {
      showSuccessMessage('User registration successful!');
    }
  }
});

// Function to validate one input at a time
function validateInput(inputId, errorId, errorMessage) {
  const input = document.getElementById(inputId);
  const errorSpan = document.getElementById(errorId);
  
  if (input.value.trim() === '') {
    errorSpan.textContent = errorMessage;
    return false;
  } else {
    errorSpan.textContent = '';
    return true;
  }
}

// 03. check if passwords match
function validatePasswordMatch(passwordId, confirmPasswordId, errorId, errorMessage) {
  const password = document.getElementById(passwordId).value;
  const confirmPassword = document.getElementById(confirmPasswordId).value;
  const errorSpan = document.getElementById(errorId);
  
  if (password !== confirmPassword) {
    errorSpan.textContent = errorMessage;
    return false;
  } else {
    errorSpan.textContent = '';
    return true;
  }
}

// 04. check if all input fields are valid and enable the submit button
function enableSubmitButton() {
  const isUsernameValid = validateInput('username', 'username-error', 'Username is required');
  const isPasswordValid = validateInput('password', 'password-error', 'Password is required');
  const isConfirmPasswordValid = validateInput('confirm-password', 'confirm-password-error', 'Confirmation is required');
  const passwordsMatch = validatePasswordMatch('password', 'confirm-password', 'confirm-password-error', 'Passwords do not match');
  
  if (isUsernameValid && isPasswordValid && isConfirmPasswordValid && passwordsMatch) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// 05. Function to display success message
function showSuccessMessage(message) {
  successMessage.textContent = message;
}
