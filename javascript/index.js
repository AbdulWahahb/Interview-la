
setInterval(()=>{
    const time = document.querySelector('.srtalarm')
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    
    
    if (hours>12) {
        hours = hours -12;
    }
    if (hours<10) {
        hours = '0'+hours
    }
    if (minutes<10) {
        minutes = "0"+minutes
    }
    if (seconds<10) {
        seconds = "0"+seconds
    }
    
    time.textContent = hours+':'+minutes+':'+seconds+':'+'PM'
 
})
// console.log('-------------------------');
// let hours = new Date().getHours()
// let minutes = new Date().getMinutes()
// let seconds = new Date().getSeconds()

// the navegation part
window.addEventListener('scroll', () => {
    const navegation = document.querySelector('#nav_bar');
    navegation.classList.toggle('stick', window.scrollY > 0); // Corrected modulus operator
});