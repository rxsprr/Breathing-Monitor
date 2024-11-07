// Function to handle sign-up
function signUp() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  const signupMessage = document.getElementById('signup-message');

  if (username && password) {
      localStorage.setItem(username, password);
      signupMessage.textContent = 'Sign-up successful!';
      signupMessage.style.color = 'green';
  } else {
      signupMessage.textContent = 'Please fill in all fields.';
      signupMessage.style.color = 'red';
  }
}

// Function to handle login
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const loginMessage = document.getElementById('login-message');

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'home.html';
  } else {
      loginMessage.textContent = 'Invalid username or password.';
      loginMessage.style.color = 'red';
  }
}

// Function to check login status and display username on home page
function checkLoginStatus() {
  const loggedIn = localStorage.getItem('loggedIn');
  const username = localStorage.getItem('loggedInUser');

  if (loggedIn !== 'true') {
      window.location.href = 'login.html';
  } else {
      document.getElementById('welcome-message').textContent = `Hello, ${username}!`;
  }
}

// Function to handle logout
function logout() {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
}
