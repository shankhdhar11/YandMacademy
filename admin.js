document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("admin_token");
    const loginSection = document.getElementById("login-section");
    const adminPanel = document.getElementById("admin-panel");

    if(token){
        loginSection.style.display = "none";
        adminPanel.style.display = "block";
    } else {
        loginSection.style.display = "block";
        adminPanel.style.display = "none";
    }
});

async function login(){
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    try{
        const res = await fetch("https://yandmacademy.onrender.com/",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username, password})
        });

        const data = await res.json();

        if(data.status === "success"){
            localStorage.setItem("admin_token", data.token);
            alert("Login successful");
            location.reload();
        } else {
            alert(data.status === "invalid_username" ? "Invalid Username" : "Invalid Password");
        }

    } catch(error){
        console.log(error);
        alert("Server error");
    }
}

async function updateEvent(){
    const heading = document.getElementById("event-heading").value;
    const description = document.getElementById("event-description").value;
    const token = localStorage.getItem("admin_token");

    if(!token){ alert("Please login first"); return; }

    try{
        const res = await fetch("https://yandmacademy.onrender.com/", {
            method:"POST",
            headers: {"Content-Type":"application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({heading, description})
        });

        const data = await res.json();
        if(res.ok) alert(data.status);
        else alert(data.detail);
    } catch(error){
        console.log(error);
        alert("Server error");
    }
}

async function updateOffer(){
    const heading = document.getElementById("offer-heading").value;
    const description = document.getElementById("offer-description").value;
    const token = localStorage.getItem("admin_token");

    if(!token){ alert("Please login first"); return; }

    try{
        const res = await fetch("https://yandmacademy.onrender.com/", {
            method:"POST",
            headers: {"Content-Type":"application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({heading, description})
        });

        const data = await res.json();
        if(res.ok) alert(data.status);
        else alert(data.detail);
    } catch(error){
        console.log(error);
        alert("Server error");
    }
}

function logout(){
    localStorage.removeItem("admin_token");
    alert("Logged out successfully");
    window.location.href="index.html";
}
