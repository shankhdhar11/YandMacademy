// FETCH EVENT
async function loadEvent(){
    const res = await fetch("http://127.0.0.1:8000/event");
    const data = await res.json();
    document.getElementById("eventHeading").innerText = data.heading || "";
    document.getElementById("eventDescription").innerText = data.description || "";
}
loadEvent();

// FETCH OFFER
async function loadOffer(){
    const res = await fetch("http://127.0.0.1:8000/offer");
    const data = await res.json();
    document.getElementById("offerHeading").innerText = data.heading || "";
    document.getElementById("offerDescription").innerText = data.description || "";
}
loadOffer();