// Target the HTML elements like form, input, buttons etc
const event_form = document.getElementById('event_form');
const Event_title = document.getElementById('Event_title');
const Event_date = document.getElementById('Event_date');
const Event_category = document.getElementById('Event_category');
const Event_description = document.getElementById('Event_description');
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");



// Take 2 sample events for Add sample event
let sampleEvent = [
    {
        title: "WEB DEV",
        date: "2026-02-01",
        category: "Conference",
        description: "A deep dive into modern web development."
    },
    {
        title: "PYTHON",
        date: "2026-03-15",
        category: "Social",
        description: "Community meetup for Python enthusiasts."
    }
];

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(addEvent);
});

// Create event card which contains the user data and we store it inside a div.
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div class="date">${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    return card;
}

// Add the created event and append inside the event container

function addEvent(eventData) {
    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}


// Form handling using submit event.
event_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: Event_title.value,
        date: Event_date.value,
        category: Event_category.value,
        description: Event_description.value
    };

    addEvent(eventData);
    event_form.reset(); // Clears the form after adding
});

// Remove Event From eventContainer
eventContainer.addEventListener("click",(event)=>{
    const card = event.target.closest(".event-card");
    console.log(card);
    if(event.target.classList.contains("delete-btn")){
        card.remove();
    }
    if(!eventContainer.querySelector(".event-card")){
        eventContainer.innerHTML=`
        <div class="empty-state">No events yet. Add your first event!</div>
    `
    }
})


clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `
        <div id="empty-state">No events yet. Add your first event!</div>
    `;
});


// DOM MANIPULATION DEMO
document.addEventListener("keydown", (event) => {
    demoContent.innerHTML = `
        <p>You Pressed: <strong>${event.key}</strong></p>
    `;

    demoContent.style.background = "#dbeafe";
  
    demoContent.style.transition = "0.3s ease";

    setTimeout(() => {
        demoContent.style.background = "";
    }, 300);
});