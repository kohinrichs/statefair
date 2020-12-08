const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("gameTicketPurchased", () => {
        
        return contentTarget.innerHTML += `
            <div class="person player"></div>
        `  
    })