const btncube = document.querySelector('.cube');
const container = document.querySelector('.container');
const btncube2 = document.querySelector('.cube2');
const container2 = document.querySelector('.container2');
const front = document.querySelector('.front');
const face = document.querySelector('.face');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const frontTop = document.querySelector('.top');
const bottom = document.querySelector('.bottom');
const btncube3 = document.querySelector('.cube3');
const setForm = document.querySelectorAll('.front3');

function randonColor() {
    const faces = Math.floor(Math.random() * 255);
    const faces2 = Math.floor(Math.random() * 255);
    const faces3 = Math.floor(Math.random() * 255);

    const lefts = Math.floor(Math.random() * 255);
    const lefts2 = Math.floor(Math.random() * 255);
    const lefts3 = Math.floor(Math.random() * 255);

    const rights = Math.floor(Math.random() * 255);
    const rights2 = Math.floor(Math.random() * 255);
    const rights3 = Math.floor(Math.random() * 255);

    const tops = Math.floor(Math.random() * 255);
    const tops2 = Math.floor(Math.random() * 255);
    const tops3 = Math.floor(Math.random() * 255);

    const bottoms = Math.floor(Math.random() * 255);
    const bottoms2 = Math.floor(Math.random() * 255);
    const bottoms3 = Math.floor(Math.random() * 255);

    face.style.backgroundColor = `rgb(${faces},${faces2},${faces3})`;
    left.style.backgroundColor = `rgb(${lefts},${lefts2},${lefts3})`;
    right.style.backgroundColor = `rgb(${rights},${rights2},${rights3})`;
    frontTop.style.backgroundColor = `rgb(${tops},${tops2},${tops3})`;
    bottom.style.backgroundColor = `rgb(${bottoms},${bottoms2},${bottoms3})`;
    setTimeout(randonColor, 2000);
};

randonColor();

btncube.addEventListener('click', () => {
    container.classList.toggle('active');
    randonColor();
});

btncube2.addEventListener('click', () => {
    container2.classList.toggle('active');
});

btncube3.addEventListener('click', () => {
    setForm.forEach(item => {
    item.classList.toggle('frontActive');
})

});

const setfront = document.querySelectorAll('.front');
const setfront2 = document.querySelectorAll('.front2');
const setfront3 = document.querySelectorAll('.front3');
const inputText = document.querySelector('.inputText');
const inputFile = document.querySelector('.inputFile');
const btnAdd = document.querySelector('.btnAdd');
const imgCube = document.querySelector('.imgCube');
const inputbg = document.querySelector('.inputbg');


btnAdd.addEventListener('click', () => {
    const inputValue = inputText.value;
    const file = inputFile.files[0];


    if(file) {
        const img = document.createElement('img');
        img.setAttribute('class', 'imgCube');
        img.setAttribute('src', URL.createObjectURL(file));

        inputbg.appendChild(img);

    }

    setfront3.forEach(item => {
        item.textContent = inputValue;
    });

    setfront2.forEach(item => {
        item.textContent = inputValue;
    });

    setfront.forEach(item => {
        item.textContent = inputValue;
    });

});


