let username = document.getElementById("username");
let password = document.getElementById("password");
let usernameerror = document.getElementById("usernameerror");
let passworderror = document.getElementById("passworderror");

const formvalidation = async () => {

usernameerror.innerHTML = "";
passworderror.innerHTML = "";

if (username.value.trim() === "") {
usernameerror.innerHTML = "Please enter the username!";
usernameerror.style.color = "red";
return;
}

if (password.value.trim() === "") {
passworderror.innerHTML = "Please enter the password!";
passworderror.style.color = "red";
return;
}

try {

let response = await fetch("http://127.0.0.1:8000/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
username: username.value,
password: password.value
})
});

let data = await response.json();

if (data.status === "success") {

localStorage.setItem("admin_token", data.token)

window.location.href = "admin.html";

}

else if (data.status === "invalid_username") {

usernameerror.innerHTML = "Invalid Username";
usernameerror.style.color = "red";

}

else if (data.status === "invalid_password") {

passworderror.innerHTML = "Invalid Password";
passworderror.style.color = "red";

}

} catch (error) {

alert("Server Error");

}

}

// ENTER key login
document.addEventListener("keydown", function(event) {

if (event.key === "Enter") {
formvalidation();
}

});