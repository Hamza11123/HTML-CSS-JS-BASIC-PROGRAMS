

let clockCont = document.getElementsByClassName('clockCont')[0];
let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');


let nRotation ;
setInterval (function (){
        let objectInterval = new Date();
        // console.clear();   
        s.style.transform = `rotate(${objectInterval.getSeconds()*6}deg)`;
        m.style.transform = `rotate(${objectInterval.getMinutes()*6}deg)`;
        h.style.transform = `rotate(${(objectInterval.getHours()*30) + (objectInterval.getMinutes()/2)}deg)`;
    }
    ,1000);
    