const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("sideshowTicketPurchased", () => {
        
        return contentTarget.innerHTML += `
            <div class="person gawker"></div>
        `  
    })