function signup() {
  const email = emailInput();
  const password = passwordInput();

  localStorage.setItem("user", JSON.stringify({ email, password }));
  alert("Signup successful");
}

function login() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please signup first");
    return;
  }

  if (user.email === emailInput() && user.password === passwordInput()) {
    window.location.href = "home.html";
  } else {
    alert("Invalid login");
  }
}

function emailInput() {
  return document.getElementById("email").value;
}

function passwordInput() {
  return document.getElementById("password").value;
}
