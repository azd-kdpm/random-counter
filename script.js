// Random Number Generator

const number = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    number.textContent = randomNumber;
};

generateBtn.addEventListener('click', randomNumberGenerator);




// Counter

const count = document.getElementById('count');
const sub = document.getElementById('sub');
const reset = document.getElementById('reset');
const add = document.getElementById('add');

add.addEventListener('click', () => {
    count.innerHTML++;
    applyColor();
})

sub.addEventListener('click', () => {
    count.innerHTML--;
    applyColor();
})

reset.addEventListener('click', () => {
    count.innerHTML = 0;
    applyColor();
})

function applyColor() {
    if(count.innerHTML > 0) {
        count.style.color = 'green';
    }else if(count.innerHTML < 0) {
        count.style.color = 'orangered';
    }else {
        count.style.color = 'black';
    }
}