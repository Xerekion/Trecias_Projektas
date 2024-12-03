const bBox = document.querySelector(".box");
const bBtn = document.querySelector(".btn");
bBox.style.marginTop = `${Math.floor(Math.random() * 800)}px`;
bBox.style.marginLeft = `${Math.floor(Math.random() * 1920)}px`;

let intervalRunning = false;
let time = 0;
let pressed = false;
function clickEvent(e) {
    if (!pressed) {
        pressed = true;
        if (intervalRunning) {
            if (e.target.innerHTML > 0) {
                e.target.innerHTML = parseInt(e.target.innerHTML) + 1;

            }
            else {
                e.target.innerHTML = 1;

            }
        }
    }
}
function buttonclickEvent() {
    
    if (!intervalRunning) {
        intervalRunning = true;

        bBtn.innerHTML = `0`;

        const intervalas = setInterval(() => {

            bBox.style.marginTop = `${Math.floor(Math.random() * 800)}px`;
            bBox.style.marginLeft = `${Math.floor(Math.random() * 1920)}px`;
            time++;
            console.log(time);
            bBtn.innerHTML = `${time}`;
            if(!pressed){
                bBox.innerHTML = parseInt(bBox.innerHTML) - 1;
            }
            pressed = false;
            if (time == 6) {
                bBtn.innerHTML = `Start`;
                time = 0;
                intervalRunning = false;
                clearInterval(intervalas);
            }
        }, 1000);
    }


}
