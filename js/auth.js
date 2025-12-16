function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ email, password }));
  alert("Account created successfully");
}

function login() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please create an account first");
    return;
  }

  if (
    user.email === document.getElementById("email").value &&
    user.password === document.getElementById("password").value
  ) {
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password");
  }
}
