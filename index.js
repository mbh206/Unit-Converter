/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")
let inputText = document.getElementById("input-text")
let convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    lengthText.innerText = `${inputText.value} meters = ${Math.round((inputText.value * 3.281) * 100) / 100} feet | ${inputText.value} feet = ${Math.round((inputText.value / 3.281) * 100) / 100} meters`
    volumeText.innerText = `${inputText.value} liters = ${Math.round((inputText.value * 0.264) * 100) / 100} gallons | ${inputText.value} gallons = ${Math.round((inputText.value / 0.264) * 100) / 100} liters`
    massText.innerText = `${inputText.value} kilograms = ${Math.round((inputText.value * 2.204) * 100) / 100} pounds | ${inputText.value} pounds = ${Math.round((inputText.value / 2.204) * 100) / 100} kilograms`
    console.log(inputText.value)
    console.log("clicked")
})
// 1 - When the button is clicked the fields below act on the number entered.
// 2 - Length returns the number in feet converted into meters and vise versa.
// 3 - Volume returns the number in liters converted to gallons and vise versa.
// 4 - Mass returns the number in kg converted to lbs and vise versa.
