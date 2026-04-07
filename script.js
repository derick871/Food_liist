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
foodList.onbeforematch((food,index)=>{
    total+=food.calories;
    const li=document.createElement("li");
    li.innerHTML=`
    ${food.name}-${food.calories}
    <button onlclick="removeFood(${index})">p</button>`;
    foodList.appendChild(li);
});
