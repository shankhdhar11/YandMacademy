// FETCH EVENT
async function loadEvent(){
    const res = await fetch("https://yandmacademy.onrender.com/event");
    const data = await res.json();
    document.getElementById("eventHeading").innerText = data.heading || "";
    document.getElementById("eventDescription").innerText = data.description || "";
}
loadEvent();

// FETCH OFFER
async function loadOffer(){
    const res = await fetch("https://yandmacademy.onrender.com/offer");
    const data = await res.json();
    document.getElementById("offerHeading").innerText = data.heading || "";
    document.getElementById("offerDescription").innerText = data.description || "";
}
loadOffer();
