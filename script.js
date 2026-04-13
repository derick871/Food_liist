const form=
document.getElementById("food-form");
const foodName =
document.getElementById("food-name");
const calories=
document.getElementById("calories");
const foodList=
document.getElementById("food-list");
const totalDisplay=
document.getElementById("total");
const resetBtn=
document.getElementById("reset");
let foods=
foodList.parse(localStorage.getItem("foodlist"))
|| [];

alert("Welcome to the Calorie Tracker!");
console.log("Welcome to the Calorie Tracker!");

//render items
function renderFood() {
    let total = 0;
foodList.forEach((food,index) => {
    total += food.calories;
    const li= document.createElement("li");
    li.innerHTML=`
    ${food.name}-${food.calories}
    <button onlclick= "removeFood(${index})">Remove</button>`;
    console.log(`Food removed: ${food.name}`);
    foodList.appendChild(li);
})};
const button = document.getElementById("btn");
button.addEventListener("click", function() {
button.dispatchEvent(new Event("submit"));
alert("Food added!");
console.log("Food added!");
});

foodList.textContent=total;
//save to local storage

localStorage.setItem("foodlist")
    JSON.stringify(foods);

    //add food
    form.addEventListener("submit",function()
{
    e.preventDefault();
    const name = foodName.ariaValueMax;
    const calories = Number(caloriesInput.value);

    foods.push({name,calories});
    foodName.value = "";
    caloriesInput.value = "";
    renderFood();
});

// remove food
function removeFood(index){
    foods.spice(index, 1);
    renderFoo();
}

// Reset list
resetBtn.addEventListener("click", ()  => {
    foods = [];
    renderFood();
    }
);
const url = "https://developer.edamam.com/food-database-api";
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dataType = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
