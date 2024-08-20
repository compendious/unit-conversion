
let value = []
let inputField = document.getElementById("input-field")

let defaultValueMeter = document.getElementById("default-value-meter")
let defaultValueFeet = document.getElementById("default-value-feet")
let defaultValueLiters = document.getElementById("default-value-liters")
let defaultValueGallons = document.getElementById("default-value-gallons")
let defaultValueKilos = document.getElementById("default-value-kilos")
let defaultValuePounds = document.getElementById("default-value-pounds")


let resultValueFeet = document.getElementById("result-value-feet")
let resultValueMeter = document.getElementById("result-value-meter")
let resultValueGallons = document.getElementById("result-value-gallons")
let resultValueLiters = document.getElementById("result-value-liters")
let resultValuePounds = document.getElementById("result-value-pounds")
let resultValueKilos = document.getElementById("result-value-kilos")


let resultValue = document.getElementById("result-value")
let inputBtn = document.getElementById("input-btn")


const meter = 3.281
const feet = 0.304
const liters = 0.264 
const gallons = 3.785
const kilos = 2.204
const pounds = 0.453


function iterations(){
    for(let i = 0; i < value.length; i++){
    resultValueFeet.textContent = parseFloat(value[i] * meter).toFixed(2)
    resultValueMeter.textContent = parseFloat(value[i] * feet).toFixed(2)
    resultValueGallons.textContent = parseFloat(value[i] * liters).toFixed(2)
    resultValueLiters.textContent = parseFloat(value[i] * gallons).toFixed(2)
    resultValuePounds.textContent = parseFloat(value[i] * kilos).toFixed(2)
    resultValueKilos.textContent = parseFloat(value[i] * pounds).toFixed(2)
    }
}

inputBtn.addEventListener("click", function(){
    if(inputField.value === ''){
        alert("Please fill the input field!");
    } else {
        value.push(inputField.value)
        for(let i = 0; i < value.length; i++){
            defaultValueMeter.textContent = value[i]
            defaultValueFeet.textContent = value[i]
            defaultValueLiters.textContent = value[i]
            defaultValueGallons.textContent = value[i]
            defaultValueKilos.textContent = value[i]
            defaultValuePounds.textContent = value[i]
        }
        iterations()
        inputField.value = ""
        console.log(value)
        }

})



