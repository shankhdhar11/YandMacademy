menubtn=document.getElementById("menu");
navlistdiv=document.getElementById("navlistdiv");
crossbtn=document.getElementById("crossbtn");
const menulist=()=>{
    navlistdiv.style.display="block";
    menubtn.style.display="none";
    crossbtn.style.display="block";
}
const crosslist=()=>{
    navlistdiv.style.display="none";
    menubtn.style.display="block";
    crossbtn.style.display="none";
}


const authenticationpage = () => {
    window.open("authentication.html", "_blank");
}