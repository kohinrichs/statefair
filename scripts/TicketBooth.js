const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "rideTicket") {
        
        const rideEvent = new CustomEvent("rideTicketPurchased")
    
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "foodTicket") {
        
        const foodEvent = new CustomEvent("foodTicketPurchased")
    
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "gameTicket") {
        
        const gameEvent = new CustomEvent("gameTicketPurchased")
    
        eventHub.dispatchEvent(gameEvent)
    }
})


eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "sideshowTicket") {
        
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
    
        eventHub.dispatchEvent(sideshowEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "fullPackageTicket") {
        
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
    
        eventHub.dispatchEvent(fullPackageEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
    <div class="ticketBooth">
            <button type="button" id="rideTicket">Ride Ticket</button>
    </div> 
    <div class="ticketBooth">
            <button type="button" id="foodTicket">Food Ticket</button>
    </div> 
    <div class="ticketBooth">
            <button type="button" id="gameTicket">Game Ticket</button>
    </div> 
    <div class="ticketBooth">
            <button type="button" id="sideshowTicket">Sideshow Ticket</button>
    </div> 
    <div class="ticketBooth">
            <button type="button" id="fullPackageTicket">Full Package Ticket</button>
    </div> 
        `
}


