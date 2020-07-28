

function play(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        return
    };
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
};

function clickPlay(e, i){
    let audio = document.querySelector(`audio[data-key="${e}"]`);
    let key = document.querySelector(`.key[data-key="${e}"]`);
    if(!audio){
        return
    };
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
    document.getElementById("curInst").innerHTML = i;
}


const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", play);

