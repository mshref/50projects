const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'light mode'
    }
})

function setTime(){
    const time = new Date();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const date = time.getDate();
    const seconds = time.getSeconds();
    const days = time.getDay();
    const months = time.getMonth();
    const ampm = hours >= 12 ? 'pm':'am';
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${day[days]}, ${month[months]} <span class='circle'>${date}</span>`

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()
// setInterval(setTime,1000)
