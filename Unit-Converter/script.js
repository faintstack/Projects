const convertBtn =  document.getElementById("btn")
const convertInput = document.getElementById("main-input")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

const lengthEl = document.getElementById("lengthEl")
const volumeEl = document.getElementById("volumeEl")
const massEl = document.getElementById("massEl")

convertBtn.addEventListener('click', function() {
    lengthEl.textContent = `${convertInput.value} meters = ${convertInput.value * meterToFeet} feet`
    volumeEl.textContent = `${convertInput.value} liters = ${convertInput.value * literToGallon} feet`
    massEl.textContent = `${convertInput.value} killogram = ${convertInput.value * kiloToPound} feet`
})