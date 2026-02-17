const buttons = document.querySelectorAll(".tab-btn"); // this will give a nodelist and you can loop trouhg it 
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => {btn.classList.remove("active")})
        
        contents.forEach(content => content.classList.remove("active"));

        button.classList.add("active")

        const tabID = button.dataset.tab

        document.getElementById(tabID).classList.add("active")

    })
})

// OS how thsi work simply