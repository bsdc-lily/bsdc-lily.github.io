console.log("tables and object test")
const carList = [
    {type:"Nissan", model:"180SX", colour:"Grey"},
    {type:"Peugot", model:"106 Ralyee", colour:"Red"},
    {type:"Honda", model:"Civic Type R", colour:"Black"},
    {type:"Toyota", model:"Corolla", colour:"White"},
    {type:"Subaru", model:"Forester", colour:"Blue"},
];

const cars = document.getElementById('carsTable');
console.log(cars)

for(i=1;i<carList.length;i++){
    const newCar = document.createElement('tr');
    newCar.innerHTML = `<td>${carList[i].type}</td><td>${carList[i].model}</td><td>${carList[i].colour}</td>`
    cars.appendChild(newCar)    
}