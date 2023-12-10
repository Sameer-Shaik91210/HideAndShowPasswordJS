const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");
function toggle() {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-close.png";
  }
}
eyeicon.addEventListener("click", toggle);
