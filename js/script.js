// REGISTER
function registerUser() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (username === "" || password === "") {
    alert("Cika dukkan filaye");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Register yayi nasara!");
  window.location.href = "login.html";
}

// LOGIN
function loginUser() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (username === savedUser && password === savedPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Username ko Password ba daidai bane");
  }
}

// PROTECT DASHBOARD
function protectDashboard() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
