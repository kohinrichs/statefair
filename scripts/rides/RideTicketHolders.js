const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("rideTicketPurchased", () => {
        
        return contentTarget.innerHTML += `
            <div class="person rider"></div>
        `  
    })

    
// Unsure why this function is here.
// export const RideTicketHolders = () => {}