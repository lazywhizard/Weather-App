const request = new XMLHttpRequest()

const locationForm = document.querySelector('#locationForm')
const locationInput = document.querySelector('#locationInput')
const tempConverter = function(celcius){
    const farenheit = (celcius*(9/5)) + 32
    const kelvin = celcius + 273.15
    const temp = {
        farenheit:farenheit,
        kelvin: kelvin,
        celcius: celcius
    }
    return temp
}

const tempPrint = function(temp){
    const Body = document.querySelector('body')
    const newElement = document.createElement('h3')
    newElement.textContent = `${temp.kelvin} ${temp.farenheit} ${temp.celcius}`
    Body.appendChild(newElement)    
}

locationForm.addEventListener('submit',function(e){
    e.preventDefault()
    const location = locationInput.value
    console.log(location)
    const url = 'http://api.weatherstack.com/current?access_key=23168764bd389641d0c29e7bed29eba6&query='+location
    request.open('GET', url,false)
    request.send()
    while(true){
        if((request.readyState===4)&&(request.status===200)){
            const dataObject = JSON.parse(request.response)
            const data = dataObject.current
            const celcius = data.temperature
            const allTemperature = tempConverter(celcius)
            tempPrint(allTemperature)
            break
        }
        
    }
})