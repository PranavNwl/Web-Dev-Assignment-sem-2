// Target the HTML elements like form, input, buttons etc
const event_form = document.getElementById('event_form');
const Event_title = document.getElementById('Event_title');
const Event_date = document.getElementById('Event_date');
const Event_category = document.getElementById('Event_category');
const Event_description = document.getElementById('Event_description');
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// Take 2 sample events for Add sample event
let sampleEvent =
    [
        {
            title: "WEB DAV",
            date: "21-02-2002",
            category: "conference",
            descrption : "miownmocndwcuoncowecndsfbdsciksd"
        },
        {
            title: "PYTHON",
            date: "21-02-2004",
            category: "social",
            descrption : "miownmocndwcuonchkcsdcswecndsfbdsciksd"
        }
    ]

// Create event card which contains the user data and we store it inside a div.
function createEventCard(eventData) {
    const card = document.createElement("div");

    card.innerHTML = `
    <button class = delete-btn>X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.discription}</p>
    `
    // Return the card for the addEvent function
    return card;
}

// Add the created event and append inside the event container
function addEvent(eventData){
    // If empty-state is present then remove it when new card will be added.
    const emptyState = document.getElementById("empty-state");
    if(emptyState) emptyState.remove()

    eventContainer.appendChild(createEventCard(eventData));
}


// Form handling using submit event.
event_form.addEventListener("submit", (event) => {

    event.preventDefault();

    // eventData stores the user given value.
    const eventData = {
        title: Event_title.value,
        date: Event_date.value,
        category: Event_category.value,
        description: Event_description.value
    }
    addEvent(eventData);
})