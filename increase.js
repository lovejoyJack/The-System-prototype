let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let TaskComplete = document.querySelectorAll('.card__button');
let DisPoints = document.querySelector('.DisPoints');
let StrPoints = document.querySelector('.StrPoints');
let IntPoints  = document.querySelector('.IntPoints');
let SpiPoints  = document.querySelector('.SpiPoints');

let disDes = document.querySelector('.disDes');
let IntDes = document.querySelector('.IntDes');
let SpiDes = document.querySelector('.spiDes');
let strDes = document.querySelector('.strDes');

let LEVEL = document.querySelector('.LEVEL');
let maxXP = document.querySelector('.maxPoints');
let userXP = document.querySelector('.currentPoints');

let StrengthBar= document.querySelector('.STR');
let DisciplineBar = document.querySelector('.DIS');
let IntelligentBar = document.querySelector('.INT');
let SpiritualBar = document.querySelector('.SPI');

let rank = document.querySelector('.rank');








//defaults



let Discipline = 0;
let Strength = 0;
let Spirituality = 0;
let Intelligence = 0;

let IntelligenceXP = 0;

let StrengthXP = 0;

let DisciplineXP = 0;

let SpiritualXP = 0;

let ballSize = 1.2;
let RANK;

let userLevel = 0;
let levelIncrease = 0;

let MAX_INT = 1000;
let MAX_STR = 500;
let MAX_DIS = 700;
let MAX_SPI = 500;

let XP = 0;

let MAXXP = 2700; 

updateProgress(IntelligentBar, 0);
updateProgress(StrengthBar, 0);
updateProgress(DisciplineBar, 0);
updateProgress(SpiritualBar, 0);
//default section end

function writeMAX()
{
    disDes.innerHTML = MAX_DIS;
    IntDes.innerHTML = MAX_INT;
    SpiDes.innerHTML = MAX_SPI;
    strDes.innerHTML = MAX_STR;
}

function updateProgress(progress, value) {
    LEVEL.innerHTML= `${userLevel}`;
    DisPoints.innerHTML = `${Discipline}`;
    StrPoints.innerHTML =`${Strength} `;
    IntPoints.innerHTML = `${Intelligence}`;
    SpiPoints.innerHTML = `${Spirituality}`;
    progress.style.width = `${value}%`;   
}

function calculateRank()
{
    if(userLevel>= 0 && userLevel <=5)
    {
        RANK = 'E';
    }
    else if(userLevel > 5 && userLevel <= 10)
    {
        RANK = 'D';
    }

    else if(userLevel > 10 && userLevel <= 15)
    {
        RANK = 'C';
    }
    else if(userLevel > 15 && userLevel <= 20)
    {
        RANK = 'lower B';
    }
    else if(userLevel > 20 && userLevel <= 25)
    {
            RANK = 'B';
    }
    else if(userLevel > 25 && userLevel <= 30)
    {
        RANK = 'upper B';
    }
    else if(userLevel > 30 && userLevel <= 35){
        RANK = 'lower A';
    }
    else if(userLevel > 35 && userLevel <=40 ){
            RANK = 'A';
    }
    else if(userLevel > 40 && userLevel <=45 )
    {
        RANK = 'ipper A';
    }
    else if(userLevel > 45 && userLevel <=50 ){
        RANK = 'upper A';
    }
    else if(userLevel > 50 && userLevel <=55 ){
        RANK = 'S-';
}
else if(userLevel > 55 && userLevel <=60 ){
    RANK = 'S';
}
else if(userLevel > 60 && userLevel <=65 ){
    RANK = 'S+';
}
else if(userLevel > 65 && userLevel <=70 ){
    RANK = 'SS ';
}
else if(userLevel > 70 && userLevel <=75 ){
    RANK = 'SS+';
}
else if(userLevel > 75 && userLevel <=80 ){
    RANK = 'A';
}
else if(userLevel > 80 && userLevel <=85 ){
    RANK = 'X';
}
else if(userLevel > 85 && userLevel <=90 ){
    RANK = 'Z';
}
else if(userLevel > 90 && userLevel <=95 ){
    RANK = 'Ω';
}
else if(userLevel > 95 && userLevel <=100 ){
    RANK = 'Deity';
}
    else if(userLevel > 100)
    {
        RANK = 'The One';
    }
   

    rank.innerHTML = `${RANK}`;
}

function writeLevelAndXP(){
    if(XP >=(MAXXP)){
        userXP.innerHTML = `${XP}`;
        MAXXP += 2000;
        userLevel++;
        calculateRank();
        updateProgress(IntelligentBar, 0);
        updateProgress(StrengthBar, 0);
        updateProgress(DisciplineBar, 0);
        updateProgress(SpiritualBar, 0);
        increaseAll();
        alert(`Congratulations, you reached level ${userLevel}!`);
        XP = 0;
    } else {
        userXP.innerHTML = `${XP}`;
        maxXP.innerHTML = `${MAXXP}`;
        LEVEL.innerHTML = `${userLevel}`;
        rank.innerHTML = '';
    }

    calculateRank();
    saveProgress();  // Save progress after updating
}

function saveProgress() {
    const progressData = {
        userLevel,
        XP,
        Discipline,
        Strength,
        Spirituality,
        Intelligence,
        MAX_INT,
        MAX_STR,
        MAX_DIS,
        MAX_SPI,
        DisciplineXP,
        StrengthXP,
        SpiritualXP,
        IntelligenceXP
    };
    localStorage.setItem('userProgress', JSON.stringify(progressData));  // Save to localStorage
}

function loadProgress() {
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
        const progressData = JSON.parse(savedProgress);
        
        // Load the saved data into the variables
        userLevel = progressData.userLevel;
        XP = progressData.XP;
        Discipline = progressData.Discipline;
        Strength = progressData.Strength;
        Spirituality = progressData.Spirituality;
        Intelligence = progressData.Intelligence;
        MAX_INT = progressData.MAX_INT;
        MAX_STR = progressData.MAX_STR;
        MAX_DIS = progressData.MAX_DIS;
        MAX_SPI = progressData.MAX_SPI;
        DisciplineXP = progressData.DisciplineXP;
        StrengthXP = progressData.StrengthXP;
        SpiritualXP = progressData.SpiritualXP;
        IntelligenceXP = progressData.IntelligenceXP;

        // Update the UI with the loaded values
        updateProgress(IntelligentBar, (IntelligenceXP / MAX_INT) * 100);
        updateProgress(StrengthBar, (StrengthXP / MAX_STR) * 100);
        updateProgress(DisciplineBar, (DisciplineXP / MAX_DIS) * 100);
        updateProgress(SpiritualBar, (SpiritualXP / MAX_SPI) * 100);

        writeLevelAndXP();
    }
}


function calculatePercentage(cardElement, progress, MAX, category) {
    const XPText = cardElement.querySelector('.card__name').innerText;
    const XPValue = parseInt(XPText.replace(/\D/g, ''));
    let percentage = 0;
  
    writeLevelAndXP();
    switch (category) {
        case 'Discipline':
            XP +=XPValue;
            DisciplineXP += XPValue;
            percentage = (DisciplineXP / MAX) * 100;
            if (percentage >= 100) {
                Discipline++;
                MAX_DIS += 700;
                DisciplineXP = 0;
                updateProgress(progress, 0);
            }
            break;

        case 'Strength':
            XP +=XPValue;
            StrengthXP += XPValue;
            percentage = (StrengthXP / MAX) * 100;
            if (percentage >= 100) {
                Strength++;
                MAX_STR += 700;
                StrengthXP = 0;
                updateProgress(progress, 0);
            }
            break;

        case 'Intelligence':
            XP +=XPValue;
            IntelligenceXP += XPValue;
            percentage = (IntelligenceXP / MAX) * 100;
            if (percentage >= 100) {
                updateProgress(progress, 0);
                Intelligence++;
                MAX_INT += 700;
                IntelligenceXP = 0;
               
            }
            break;

        case 'Spirituality':
            XP +=XPValue;
            SpiritualXP += XPValue;
            percentage = (SpiritualXP / MAX) * 100;
            if (percentage >= 100) {
                Spirituality++;
                MAX_SPI += 700;
                SpiritualXP = 0;
                updateProgress(progress, 0);
            }
            break;

        default:
            return;
    }

    // Call `updateProgress` only once
    updateProgress(progress, percentage);
    writeLevelAndXP();
    calculateRank();
    writeMAX();
}
function increaseAll()
{
    Intelligence++;
    Strength++;
    Discipline++;
    Spirituality++;
    writeMAX();
}


TaskComplete.forEach(button => {
    button.addEventListener('click', function() {
      ballSize = 5;
      animateParticles();
        const cardElement = button.closest('.card__article');
        button.innerText = 'Completed';
      

        if (button.classList.contains('int')) {
            calculatePercentage(cardElement, IntelligentBar, MAX_INT, 'Intelligence');
        } else if (button.classList.contains('str')) {
            calculatePercentage(cardElement, StrengthBar, MAX_STR, 'Strength');
        } else if (button.classList.contains('dis')) {
            calculatePercentage(cardElement, DisciplineBar, MAX_DIS, 'Discipline');
        } else if (button.classList.contains('spi')) {
            calculatePercentage(cardElement, SpiritualBar, MAX_SPI, 'Spirituality');
        }
    });
});


function resetProgress() {
    // Reset the data to initial values
    userLevel = 0;
    XP = 0;
    Discipline = 0;
    Strength = 0;
    Spirituality = 0;
    Intelligence = 0;
    MAX_INT = 1000;
    MAX_STR = 500;
    MAX_DIS = 700;
    MAX_SPI = 500;
    DisciplineXP = 0;
    StrengthXP = 0;
    SpiritualXP = 0;
    IntelligenceXP = 0;

    // Reset the progress bars
    updateProgress(IntelligentBar, 0);
    updateProgress(StrengthBar, 0);
    updateProgress(DisciplineBar, 0);
    updateProgress(SpiritualBar, 0);

    // Reset the UI elements
    writeLevelAndXP();

    // Clear the saved progress from localStorage
    localStorage.removeItem('userProgress');

    alert('Your progress has been reset!');
}


nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * ballSize;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "steelblue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();


// Call this function when the page loads
window.onload = function() {
    loadProgress();  // Load saved progress from localStorage
};

// Example reset button
const resetButton = document.getElementById('resetButton');
resetButton.onclick = function() {
    resetProgress();  // Reset the progress
};

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusic");
    audio.play().catch(error => {
        console.log("Autoplay prevented. User interaction required.");
    });
});