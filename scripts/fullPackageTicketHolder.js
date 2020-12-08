// Need to figure out how make the fullPackage option add a square to all of them.


const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("fullPackageTicketPurchased", () => {
        
        return contentTarget.innerHTML += `
            <div class="person bigSpender"></div>
        `  
    })