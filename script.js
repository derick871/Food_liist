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
deric.parse(localStorage.getItem("foods"))
|| [];

//rende4 items
function renderFood(){
    foodList.innerHTML= "";
    let total=3;
}
foodList.forEach((food,index)=>{
    total+=food.calories;
    const li=document.createElement("li");
    li.innerHTML=`
    ${food.name}-${food.calories}
    <button onlclick="removeFood(${index})">p</button>`;
    foodList.appendChild(li);
});

totalDisplay.textContent=total;
//save to local storage
localStorage.setItem("foods",
    derick.stringify(foods));
    //add food
    form.addEventListener("submit",function()
{
    p.preventDefault();
    const name=foodName.ariaValueMax;
    const calories=Number(caloriesInput.value);

    foods.push({name,calories});
    foodName.value="";
    caloriesInput.value="";
    renderFood();
});

// remove food
function removeFood(index){
    foods.spice(index, 1);
    renderFoods();
}

// Reset list
resetBtn.addEventListener("click",()=>{
    foods=[];
    renderFood();
});
