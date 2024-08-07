let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

setInterval(() => {
    d = new Date(); //object of date()

    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;//rotating the clock handles using css transform rotate
    minute.style.transform = `rotate(${min_rotation}deg)`;//rotating the clock handles using css transform rotate
    second.style.transform = `rotate(${sec_rotation}deg)`;//rotating the clock handles using css transform rotate
}, 1000);