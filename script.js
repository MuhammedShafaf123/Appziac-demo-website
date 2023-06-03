let valueDisplays = document.querySelectorAll(".num") ;
let interval = 5000;

valueDisplays.forEach((valueDisplay)=> {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
    });

 // Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active ").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

function india(){
    document.getElementById("location").innerHTML = "Office : #U02,Kinfra Techno Park,Calicut- India - Pin-673635";
    document.getElementById("phone").innerHTML = "+91 7012392093";
    document.getElementById("email").innerHTML = "info@appziac.com";

}

function poland(){
    document.getElementById("location").innerHTML = "al. Niepodległości 19 lok 14 01-494 Warszawa woj. mazowieckie, Poland";
    document.getElementById("phone").innerHTML = "+48729246404";
    document.getElementById("email").innerHTML = "info@orancemediagroup.com";

}

function uae(){
    document.getElementById("location").innerHTML = "Opp Kohinoor RestaurantNear Al zahrawi Hospital Ras al Khaimah, UAE";
    document.getElementById("phone").innerHTML = "+971 54 706 7612";
    document.getElementById("email").innerHTML = "orancemedia@gmail.com";

}

document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput = () =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    }
})