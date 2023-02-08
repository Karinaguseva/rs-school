import translateData from '../../data/translate.js';

let currentLang = 'en'

const headerItems = document.querySelectorAll('.item__link')
const langBtn = document.querySelector('.header__language')
const greetingText = document.querySelector('.greeting__text')

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
  greetingText.innerHTML = translateData[currentLang].greeting
}

  headerItems[0].textContent = translateData[currentLang].mainPage
  headerItems[1].textContent = translateData[currentLang].quizPage
  headerItems[2].textContent = translateData[currentLang].galleryPage
  greetingText.innerHTML = translateData[currentLang].greeting


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

//1. Часы и календарь

function showTime() {
    const time = document.querySelector('.main__time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
    setTimeout(showTime, 100);
    function showDate() {
        const data = document.querySelector('.main__date');
        const options = {weekday: 'long', month: 'long', day: 'numeric' , timeZone: 'UTC'};
        const currentDate = date.toLocaleDateString(translateData[currentLang].time, options);
        data.innerHTML = currentDate;
      }
      showDate();
    }
  showTime();


//3. Слайдер изображений

let randomNum = Math.floor(Math.random() * 30)+1;
const slidePrev = document.querySelector('.slider__icon_prev');
const slideNext = document.querySelector('.slider__icon_next');

slideNext.addEventListener('click', () => {
    randomNum == 30 ? randomNum = 1 : randomNum++
  setBg()

})

slidePrev.addEventListener('click', () => {
    randomNum == 1 ? randomNum = 30 : randomNum--
    setBg()

})

function setBg(){
const bgNum = String(randomNum).padStart(2, "0");
const img = new Image();
img.src = `https://raw.githubusercontent.com/karinaguseva/img-song-bird/assets/images/${bgNum}.jpg`;
img.onload = () =>{
  document.body.style.backgroundImage = `url(${img.src})`;
}
}
setBg()

function translateItems(){
  headerItems[0].textContent = translateData[currentLang].mainPage
  headerItems[1].textContent = translateData[currentLang].quizPage
  headerItems[2].textContent = translateData[currentLang].galleryPage
  greetingText.innerHTML = translateData[currentLang].greeting
}