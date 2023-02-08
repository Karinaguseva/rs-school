import birdsData from '../../data/birds.js';
import translateData from '../../data/translate.js';

let currentLang = 'en'
const headerItems = document.querySelectorAll('.item__link')
const audioName = document.querySelector('.player__title')
let gallery = document.querySelector('.main__gallery')

let indexBird = 0
let template
let randomBird = true
let number

let infoImg
let answersName
let answersText
//Плеер
const playBtn = document.querySelector('.player__icon');
const volumeBtn = document.querySelector('.volume__btn')
const volumeProgress = document.querySelector('.volume__progress');
const progressContainer = document.querySelector('.player__progress-wrap');
const progress = document.querySelector('.player__progress');
const current = document.querySelector('.player__time_current');
const length = document.querySelector('.player__time_length');
const randomBtn = document.querySelector('.main__btn');

//Переменные для аудио
let audio = new Audio();
let isPlay = false;
let isMute = false;
let duration
let playIcon

const langBtn = document.querySelector('.header__language')
langBtn.textContent = "Eng"

if(localStorage.getItem('langKarinaGuseva')) {
  currentLang = localStorage.getItem('langKarinaGuseva');
  langBtn.setAttribute('value', localStorage.getItem('langKarinaGuseva'));
  currentLang = langBtn.getAttribute('value')
  if (langBtn.getAttribute('value') === 'ru') {
    langBtn.classList.add('header__language_active')
    langBtn.textContent = "Ru"
  }
  else {
    langBtn.classList.remove('header__language_active')
    langBtn.textContent = "Eng"
  }
  headerItems[0].textContent = translateData[currentLang].mainPage
  headerItems[1].textContent = translateData[currentLang].quizPage
  headerItems[2].textContent = translateData[currentLang].galleryPage
}

  headerItems[0].textContent = translateData[currentLang].mainPage
  headerItems[1].textContent = translateData[currentLang].quizPage
  headerItems[2].textContent = translateData[currentLang].galleryPage
  randomBtn.textContent = translateData[currentLang].randomBtn

function lang() {
  langBtn.classList.toggle('header__language_active')
  if(langBtn.classList.contains('header__language_active'))
  {
    langBtn.setAttribute('value', 'ru')
    langBtn.textContent = "Ru"
  }
  else {
    langBtn.setAttribute('value', 'en')
    langBtn.textContent = "Eng"
  }
  currentLang = langBtn.getAttribute('value')
  localStorage.setItem('langKarinaGuseva', currentLang);
  translateItems()
}

langBtn.addEventListener('click', lang)
randomBtn.addEventListener('click', randomSound)

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let typeNum = getRandomNum(6)
let birdNum = getRandomNum(6)
audio.src = birdsData[typeNum][birdNum].audio
audioName.innerHTML = birdsData[typeNum][birdNum].name[currentLang]
duration = birdsData[typeNum][birdNum].duration

function randomSound() {
  pauseAudio(audio, playBtn)
  typeNum = getRandomNum(6)
  birdNum = getRandomNum(6)
  audio.src = birdsData[typeNum][birdNum].audio
  audioName.innerHTML = birdsData[typeNum][birdNum].name[currentLang]
  duration = birdsData[typeNum][birdNum].duration
  playAudio(audio, playBtn)
}

for(let i = 0; i < birdsData.length; i++){
  for(let j = 0; j < birdsData[i].length; j++){
    gallery.innerHTML += ""
    template = `
      <div class="gallery__info info">
        <div class="info__images">
          <img src="${birdsData[i][j].image}" alt="${birdsData[i][j].name[currentLang]}" class="info__img">
          <button class="info__btn" id="${indexBird}">${translateData[currentLang].listenBtn}</button>
        </div>
        <div class="info__description">
          <div class="gallery__name">${birdsData[i][j].name[currentLang]}</div>
          <div class="gallery__name_latin">${birdsData[i][j].species}</div>
          <div class="gallery__text text"><p class="text__paragraph">${birdsData[i][j].description[currentLang]}</p></div>
        </div>
      </div>
    `
    gallery.innerHTML += template
    indexBird++
    playIcon = document.querySelectorAll('.info__btn')
    infoImg = document.querySelectorAll('.info__img')
    answersName = document.querySelectorAll('.gallery__name')
    answersText = document.querySelectorAll('.text__paragraph')
  }
}

gallery.addEventListener('click', (e) => {
  randomBird = false
  number = e.target.id
  if(e.target.id == ''){
    return
  }
  for(let i = 0; i < birdsData.length; i++){
    for(let j = 0; j < birdsData[i].length; j++){
      if(birdsData[i][j].num == number){
        audio.src = birdsData[i][j].audio
        duration = birdsData[i][j].duration
        audioName.innerHTML = birdsData[i][j].name[currentLang]
      }
    }
  }
  playAudio(audio, playBtn)
});

//Общие функции для плеера
function playAudio(aud, icon) {
  aud.play();
  icon.classList.add('icon__active')
  isPlay = true;
}

function pauseAudio(aud, icon) {
  aud.pause();
  icon.classList.remove('icon__active')
  isPlay = false;
}

//форматирование времени
function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){ 
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};

//Общие функции для громкости
function mute(btn, aud){
  isMute = true;
  btn.classList.add('volume__btn_active')
  aud.muted = true
}

function noMute(btn, aud){
  isMute = false;
  btn.classList.remove('volume__btn_active')
  aud.muted = false
}

//Работа плеера в вопросе
playBtn.addEventListener('click', () => {
  isPlay == false ? playAudio(audio, playBtn) : pauseAudio(audio, playBtn); 
});

//движение прогресс-бара
function updateProgress(e){
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

//нажатие на прогресс-бар
function setsProgress(e){
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', setsProgress)

//текущее и общее время трека
function timeSong(){
  current.innerHTML = (formatTime(audio.currentTime));
  length.innerHTML = duration;
}

audio.addEventListener('timeupdate', timeSong);
audio.addEventListener('loadeddata', timeSong);

audio.addEventListener('ended', () => {pauseAudio(audio, playBtn)})

//кнопка громкости
volumeBtn.addEventListener('click', () => {
    if (isMute === false) {
      mute(volumeBtn, audio)
    } else {
      noMute(volumeBtn, audio)
    }
})

//слайдер громкости
volumeProgress.oninput = function() {
  volumeProgress.value = this.value;
  audio.volume = this.value / 100; 
  if(this.value != 0){
    noMute(volumeBtn, audio)
  } else{
    mute(volumeBtn, audio)
  }
  rangeValue(volumeProgress)
}

function translateItems(){
  headerItems[0].textContent = translateData[currentLang].mainPage
  headerItems[1].textContent = translateData[currentLang].quizPage
  headerItems[2].textContent = translateData[currentLang].galleryPage
  randomBtn.textContent = translateData[currentLang].randomBtn
  if(randomBird) {
    audioName.textContent = birdsData[typeNum][birdNum].name[currentLang]
  } 
  birdsData.forEach((category, i)=>{
    let categotyLength = category.length
    category.forEach((bird, j)=>{
      if(birdsData[i][j].num == number && !randomBird) {
        audioName.textContent = birdsData[i][j].name[currentLang]
      }
      infoImg[categotyLength * i + j].alt = birdsData[i][j].name[currentLang]
      answersName[categotyLength * i + j].textContent = birdsData[i][j].name[currentLang]
      answersText[categotyLength * i + j].textContent = birdsData[i][j].description[currentLang]
      playIcon[categotyLength * i + j].textContent = translateData[currentLang].listenBtn
    })
  })
}

//Стилизация инпута типа range
function rangeValue(rangeVal){
  let val = rangeVal.value
  rangeVal.style.background = `-webkit-linear-gradient(left, rgb(255,171,3) 0%, rgb(255,171,3) ${val}%, rgba(255, 255, 255, 0.8) ${val}%, rgba(255, 255, 255, 0.8) 100%)`
}
