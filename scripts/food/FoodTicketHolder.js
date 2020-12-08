const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("foodTicketPurchased", () => {
        
        return contentTarget.innerHTML += `
            <div class="person eater"></div>
        `  
    })