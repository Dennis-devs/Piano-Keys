const keys = document.querySelectorAll('.keys');
//console.log(keys)
keys.forEach(item => item.style.cssText = 'color: violet; background: ivory; padding: 50px; border: solid; border-color: gold; font-size: 40px; border-bottom-right-radius: 15%; border-bottom-left-radius: 15%');

function piano(e){
const audio = document.querySelector(`audio[data-keys='${e.keyCode}']`);
if(!audio) return;
audio.currentTime = 0;
audio.play();
}

const player = document.querySelector('.music');
function classical(){
    const audios = document.querySelector('.waltz');
    audios.controls = true;
    audios.load();
    audios.play();
}
const player2 = document.querySelector('.music2');
function classical2(){
    const audios2 = document.querySelector('.motzart');
    audios2.controls = true;
    audios2.load();
    audios2.play();
}

player.addEventListener('click', classical);
player2.addEventListener('click', classical2);
window.addEventListener('keydown', piano);
