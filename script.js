function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const mobile = document.getElementById("mobile").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();
  const terms = document.getElementById("terms").checked;
  const msg = document.getElementById("msg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !username || !password || !confirmPassword || !mobile || !dob || !gender) {
    msg.innerText = "All required fields must be filled.";
    return;
  }

  if (!email.match(emailPattern)) {
    msg.innerText = "Invalid email format.";
    return;
  }

  if (password.length < 6) {
    msg.innerText = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    msg.innerText = "Passwords do not match.";
    return;
  }

  if (!terms) {
    msg.innerText = "You must accept Terms & Conditions.";
    return;
  }

  const user = {
    name, email, username, password, mobile, dob, gender, address
  };

  localStorage.setItem("userData", JSON.stringify(user));
  alert("Signup Successful!");
  window.location.href = "login.html";
}

function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("msg");

  const user = JSON.parse(localStorage.getItem("userData"));

  if (!user || user.username !== username || user.password !== password) {
    msg.innerText = "Invalid username or password.";
    return;
  }

  localStorage.setItem("loggedIn", "true");
  alert("Login successful");
  window.location.href = "profile.html";
}

function loadProfile() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    window.location.href = "login.html";
    return;
  }


  document.getElementById("profileData").innerHTML = `
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Username:</b> ${user.username}</p>
    <p><b>Mobile:</b> ${user.mobile}</p>
    <p><b>DOB:</b> ${user.dob}</p>
    <p><b>Gender:</b> ${user.gender}</p>
    <p><b>Address:</b> ${user.address || "N/A"}</p>
  `;
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

if (window.location.pathname.includes("profile")) {
  loadProfile();
}
const user=JSON.parse(localStorage.getItem("user"));
  document.getElementById("userInitial").innerText = user.name.charAt(0).toUpperCase();
