// const homeDisplay = document.getElementById("homeDisplay")
// const guestDisplay = document.getElementById("guestDisplay")

// const homeSection = document.getElementById("homeSection")
// const guestSection = document.getElementById("guestSection")

// homeSection.addEventListener("click", function(e){
//     const points = Number(e.target.dataset.points)
//     const currentScore = Number(homeDisplay.textContent)

//     if(!e.target.dataset.points) return
//     homeDisplay.textContent = currentScore + points
// })

// guestSection.addEventListener("click", function(e){
//     const points = Number(e.target.dataset.points)
//     const currentScore = Number(guestDisplay.textContent)

//     if(!e.target.dataset.points) return
    
//     guestDisplay.textContent = currentScore + points
// })


//BETTER

const sections = document.querySelectorAll(".scoreSection")

sections.forEach(section => {
    const display = section.querySelector(".scoreDisplay")

    section.addEventListener("click", function(e){
        if(!e.target.classList.contains("incremBtn")) return

        const points = Number(e.target.dataset.points)
        const currentScore = Number(display.textContent)

        display.textContent = currentScore + points
    })
})