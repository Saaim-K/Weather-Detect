// ------------------------------ Dark Mode Toggler ------------------------------

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.getElementById('label').classList.toggle('dark');
    document.getElementById('nav-head').classList.toggle('dark');
    document.getElementById('input-button-1').classList.toggle('dark');
    document.getElementById('input_location').classList.toggle('dark');
    document.getElementById('input_city').classList.toggle('dark');
})
// ------------------------------ Dark Mode Toggler ------------------------------


// ------------------------------ Time Clock  ------------------------------
setInterval(() => {
    const time = document.querySelector('#current-time');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;

}, 1000);
// ------------------------------ Time Clock  ------------------------------

// ------------------------------ Time Clock  ------------------------------
$('.btn-1').click(function () {
    $(this).toggleClass('click-1');
});
// ------------------------------ Time Clock  ------------------------------
