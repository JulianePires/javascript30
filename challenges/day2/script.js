const secPointer = document.querySelector('.secPointer');
const minPointer = document.querySelector('.minPointer');
const hourPointer = document.querySelector('.hourPointer');

function setDate() {
    
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    secPointer.style.transform = `rotate(${secondsDegrees}deg)`;
    minPointer.style.transform = `rotate(${minutesDegrees}deg)`;
    hourPointer.style.transform = `rotate(${hoursDegrees}deg)`;
    
}

setInterval(setDate, 1000);