function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ email, password }));
  alert("Signup successful");
}

function login() {
  const user = JSON.parse(localStorage.getItem("user"));
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Invalid login");
  }
}
