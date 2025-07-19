const keys = document.querySelectorAll('.keys');
//console.log(keys)
keys.forEach(item => item.style.cssText = 'color: violet; background: ivory; padding: 50px; border: solid; border-color: gold; font-size: 40px; border-bottom-right-radius: 15%; border-bottom-left-radius: 15%');

function makeSound(e){
const audio = document.querySelector(`audio[data-keys='${e.keyCode}']`);
if(!audio) return;
audio.currentTime = 0;
audio.play();

const onSound = document.querySelector(`section[data-keys='${e.keyCode}']`);
onSound.style.backgroundColor = 'gray'
}
function stopSound(e){
    const offSound = document.querySelector(`section[data-keys='${e.keyCode}']`);
    offSound.style.backgroundColor = 'key' ? '' : ''
}

const player = document.querySelectorAll('.music');
const classic = document.querySelectorAll('.classic');
classic.forEach((item, index) => item.classList.add(`piece${index}`));

player.forEach((piece, index) => piece.addEventListener('click', () => {
    const playMusic = document.querySelector(`.piece${index}`);
    playMusic.load();
    playMusic.play();
}));

window.addEventListener('keydown', makeSound);
window.addEventListener('keyup', stopSound);
