import birdsData from '../../data/birds.js';
import translateData from '../../data/translate.js';

let currentLang = 'en'

//Находим элементы на странице
  const headerItems = document.querySelectorAll('.item__link')
  const mainContainer = document.querySelector('.main__container')
  //Категории
  const categories = document.querySelectorAll('.categories__item')
  //Вопрос
  const questionName = document.querySelector('.anonymous__name')
  const questionImg = document.querySelector('.anonymous__img')
  //Плеер
  const playBtn = document.querySelector('.player__icon_question');
  const volumeBtn = document.querySelector('.volume__btn')
  const volumeProgress = document.querySelector('.volume__progress_question');
  const progressContainer = document.querySelector('.player__progress-wrap');
  const progress = document.querySelector('.player__progress');
  const current = document.querySelector('.player__time_current');
  const length = document.querySelector('.player__time_length');
  let playIcon
  //Ответы
  const answerList = document.querySelector('.answers__options')
  const answerWrap = document.querySelector('.answers__wrap')
  const answerButton = document.querySelector('.answers__btn')
  //Баллы
  const scoreText = document.querySelector('.categories__text')
  const scoreNum = document.querySelector('.categories__score')

//Переменные для игры
let score = 0;
let questionIndex = 0;
let randomNum;
let scoreCount;
let isClear = true
let correctAnswer = false;
let nameArray = [];
let idArray = [];
let elementValue;
let answerInput;
let answerBtn;
let itemsArray;
let correctBirdId;

let infoImg
let answersName
let answersText

//Переменные для аудио
let audioQuestion = new Audio();
let audioAnswer = new Audio();
let isPlay = false
let isPlaySecond = false
let isMuteQuestion = false;
let isMuteAnswer= false;
let audioCorrect = new Audio();
audioCorrect.src = '../../assets/sounds/correctAnswer.mp3';
let audioIncorrect = new Audio();
audioIncorrect.src = '../../assets/sounds/incorrectAnswer.mp3';
let answerAudioPlay = true

//Переменные длястраницы выигрыша
let winCongratulation
let winInfoFirst 
let winInfoSecond
let winMessage
let winBtn
let winInfoMain
let winInfoGallery
let isWin = false

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
  categories[0].textContent = translateData[currentLang].warmUp
  categories[1].textContent = translateData[currentLang].passerines
  categories[2].textContent = translateData[currentLang].forestBirds
  categories[3].textContent = translateData[currentLang].songbirds
  categories[4].textContent = translateData[currentLang].predatorBirds
  categories[5].textContent = translateData[currentLang].seaBirds
  scoreText.textContent = translateData[currentLang].score
}

headerItems[0].textContent = translateData[currentLang].mainPage
headerItems[1].textContent = translateData[currentLang].quizPage
headerItems[2].textContent = translateData[currentLang].galleryPage
categories[0].textContent = translateData[currentLang].warmUp
categories[1].textContent = translateData[currentLang].passerines
categories[2].textContent = translateData[currentLang].forestBirds
categories[3].textContent = translateData[currentLang].songbirds
categories[4].textContent = translateData[currentLang].predatorBirds
categories[5].textContent = translateData[currentLang].seaBirds
scoreText.textContent = translateData[currentLang].score
answerButton.textContent = translateData[currentLang].levelBtn


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

//Функция изменения стилей для категории
function changeCategories(ind){
  categories[ind].classList.add('categories__item_active')
  if(ind !== 0){
    categories[ind-1].classList.remove('categories__item_active')
  }
}

//Функция отображения рандомного числа
function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

changeCategories(questionIndex)
clearPage()
showQuestion()
answerButton.addEventListener('click', checkAnswer)

//Очищаю исходные данные для нового вопроса
function clearPage(){
  questionName.innerHTML = '*****'
  questionImg.src = `../../assets/images/anonymous_bird.jpg`;
  answerList.innerHTML = ``;
  answerInput = ``;
  answerWrap.innerHTML = `<p class="answers__task">${translateData[currentLang].listen}</p>`;
  isClear = true
  scoreCount = 5;
  nameArray = []
  pauseAudio(audioQuestion, playBtn);
  progress.style.width = `${0}%`
}

//Генерирую вопрос и варианты ответов
function showQuestion(){
  let type = birdsData[questionIndex]
  randomNum = getRandomNum(6)
  audioQuestion.src = type[randomNum].audio
  //создаю массив с названими птиц
  for(let i = 0; i < type.length; i++){
    let birdsName = `${birdsData[questionIndex][i].name[currentLang]}`;
    let birdsId = `${birdsData[questionIndex][i].id}`;
    nameArray.push(birdsName);
    idArray.push(birdsId);
  }
  //разбиваю созданный массив и вставляю в варианты ответа
  for (let item of nameArray){
    const questionTemplate = `
      <li class="options__item" id="${Number(nameArray.indexOf(item))}">
        <span class="item__btn"></span>
        <span class="item__text">${item}</span>
      </li>
      `
      answerList.innerHTML += questionTemplate
  }
  // Переменные генерируемые в JS
  answerInput = document.querySelectorAll('.options__item')
  answerBtn = document.querySelectorAll('.item__btn')
  itemsArray = document.querySelectorAll(".item__text")
  answerAudioPlay = true
  correctAnswer = false
  /*АЙДИ*/correctBirdId = birdsData[questionIndex][randomNum].id
console.log('Правильный ответ:', (birdsData[questionIndex][randomNum].name[currentLang]))
}

//Проверяю правильный ответ или нет, показываю информацию выбранного варианта ответа
function answerClick(){
  answerList.addEventListener('click', (e) => {
    elementValue = e.target.closest('.options__item').id;
    if(elementValue != correctBirdId){
      innerAnswer()
      isPlaySecond = false
      if(!correctAnswer){
        audioIncorrect.currentTime = 0;
        audioIncorrect.play();
          if (answerBtn[elementValue].className == "item__btn item__btn_incorrect" || answerBtn[elementValue].className == "item__btn item__btn_correct") {
            scoreCount
          }
          else{
            scoreCount--;
          }
        answerBtn[elementValue].classList.add('item__btn_incorrect');
      }
      if(scoreCount === 0){
        scoreCount = 0; //Чтобы скор не уходил в минус
      } 
    } else {
      correctAnswer = true ;
      if(answerAudioPlay){
        audioCorrect.currentTime = 0;
        audioCorrect.play();
        pauseAudio(audioQuestion, playBtn);
      }
      if(correctAnswer){
        answerAudioPlay = false;
      }
      if (answerBtn[elementValue].className == "item__btn item__btn_incorrect" || answerBtn[elementValue].className == "item__btn item__btn_correct") {
      }
      else{
        score += scoreCount;
      }
      innerAnswer();
    }
  })
}

answerClick()

//Вставляю контент выбранного варианта ответа
function innerAnswer(){
  if(elementValue == correctBirdId){
    scoreNum.innerHTML = `${score}`
    questionName.innerHTML = `${birdsData[questionIndex][elementValue].name[currentLang]}`
    questionImg.src = `${birdsData[questionIndex][elementValue].image}`;
    questionImg.alt = `${birdsData[questionIndex][elementValue].name[currentLang]}`
    answerBtn[correctBirdId].classList.add('item__btn_correct')
    answerButton.classList.add('answers__btn_active')
  }
  answerWrap.innerHTML = `
  <div class="answers__info info">
    <img src="${birdsData[questionIndex][elementValue].image}" alt="${birdsData[questionIndex][elementValue].name[currentLang]}" class="info__img">
    <div class="info__description">
        <div class="answers__name">${birdsData[questionIndex][elementValue].name[currentLang]}</div>
        <div class="answers__name_latin">${birdsData[questionIndex][elementValue].species}</div>
        <div class="answers__player player">
            <div class="player__controls">
                <div class="player__icon player__icon_answer"></div>
                <div class="player__progress-wrap player__progress-wrap_answer">
                    <div class="player__progress player__progress_answer"></div>
                    <div class="player__time player__time_current player__time_current_answer"></div>
                    <div class="player__time player__time_length player__time_length_answer"></div>
                </div>
            </div>
            <div class="player__volume volume">
                <div class="volume__btn volume__btn_answer"></div>
                <div class="volume__slider">
                    <input class="volume__progress volume__progress_answer" type="range" min="0" max="100">
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="answers__text text"><p class="text__paragraph">${birdsData[questionIndex][elementValue].description[currentLang]}</p></div>
  `
  isClear = false
  infoImg = document.querySelector('.info__img')
  answersName = document.querySelector('.answers__name')
  answersText = document.querySelector('.answers__text')


  //Аудио для выбранной птицы
  audioAnswer.src = birdsData[questionIndex][elementValue].audio

  //Переменные генерируемые в JS
  playIcon = document.querySelector('.player__icon_answer')
  const progressContainerAnswer = document.querySelector('.player__progress-wrap_answer');
  const progressAnswer = document.querySelector('.player__progress_answer');
  const currentAnswer = document.querySelector('.player__time_current_answer');
  const lengthAnswer = document.querySelector('.player__time_length_answer');
  const volumeBtnAnswer = document.querySelector('.volume__btn_answer')
  const volumeProgressAnswer = document.querySelector('.volume__progress_answer');
  
  isPlaySecond = false
  playIcon.addEventListener('click', ()=>{
    isPlaySecond = toggleplay(audioAnswer, playIcon, isPlaySecond)
  })

  audioAnswer.addEventListener('ended', () => {pauseAudio(audioAnswer, playIcon)})

  //движение прогресс-бара
  audioAnswer.addEventListener('timeupdate', (e)=>{
    updateProgress(e, progressAnswer)
  })
  //нажатие на прогресс-бар
  progressContainerAnswer.addEventListener('click', (e)=>{
    setsProgress(e, audioAnswer, progressContainerAnswer)
  })
  
  //текущее и общее время трека
  function timeSong(){
    currentAnswer.innerHTML = (formatTime(audioAnswer.currentTime));
    lengthAnswer.innerHTML = birdsData[questionIndex][randomNum].duration;
  }
  audioAnswer.addEventListener('timeupdate', timeSong);
  audioAnswer.addEventListener('loadeddata', timeSong);

  //кнопка громкости
  volumeBtnAnswer.addEventListener('click', () => {volumeBtnToggle(isMuteAnswer, volumeBtnAnswer, [audioAnswer])})

  //слайдер громкости
  volumeProgressAnswer.addEventListener('input', () =>{
    volumeProgressBar(volumeProgressAnswer, volumeBtnAnswer, [audioAnswer])
    rangeValue(volumeProgressAnswer)
  })

}

//Проверка выбран ли вариант ответа
function checkAnswer(){
  answerButton.classList.remove('answers__btn_active')
  for (let i = 0; i < answerBtn.length; i++) {
    if (answerBtn[i].className == "item__btn item__btn_correct"){
      pauseAudio(audioAnswer, playIcon)
      if(questionIndex !== (birdsData.length - 1)){
        questionIndex++;
        changeCategories(questionIndex)
        clearPage();
        showQuestion();
        answerClick()
      } else {
        winInfo()
      }
    }
  }
}

//Вывод информации о прохождении викторины
function winInfo(){
  isWin = true
  let btnMessage
  if(score === 30){
    btnMessage = `
    <p class="win__massage">${translateData[currentLang].winMessage}</p>
    <form class="win__form" action="../quiz/index.html">
        <button class="win__btn">${translateData[currentLang].winBtn}</button>
      </form>
    `
  } else {
    btnMessage = `
      <form class="win__form" action="../quiz/index.html">
        <button class="win__btn">${translateData[currentLang].winBtn}</button>
      </form>
    `
  }
  mainContainer.innerHTML = ''
  mainContainer.innerHTML = `
  <section class="main__win win">
      <div class="win__wrapper">
          <p class="win__congratulation">${translateData[currentLang].сongratulations}</p>
          <p class="win__info"><span class="win__info_first">${translateData[currentLang].winInfoFirst}</span>&nbsp;${score}&nbsp;<span class="win__info_second">${translateData[currentLang].winInfoSecond}</span></p>
          ${btnMessage}
          <p class="win__info win__info_main">
            ${translateData[currentLang].winInfoMain}
          </p>
          <p class="win__info win__info_gallery">
            ${translateData[currentLang].winInfoGallery}
          </p>
      </div>
  </section>
  `
winCongratulation = document.querySelector('.win__congratulation')
winInfoFirst = document.querySelector('.win__info_first')
winInfoSecond = document.querySelector('.win__info_second')
winMessage = document.querySelector('.win__massage')
winBtn = document.querySelector('.win__btn')
winInfoMain = document.querySelector('.win__info_main')
winInfoGallery = document.querySelector('.win__info_gallery')
}

function translateItems(){
  headerItems[0].textContent = translateData[currentLang].mainPage
  headerItems[1].textContent = translateData[currentLang].quizPage
  headerItems[2].textContent = translateData[currentLang].galleryPage
  categories[0].textContent = translateData[currentLang].warmUp
  categories[1].textContent = translateData[currentLang].passerines
  categories[2].textContent = translateData[currentLang].forestBirds
  categories[3].textContent = translateData[currentLang].songbirds
  categories[4].textContent = translateData[currentLang].predatorBirds
  categories[5].textContent = translateData[currentLang].seaBirds
  scoreText.textContent = translateData[currentLang].score
  answerButton.textContent = translateData[currentLang].levelBtn
  if(isClear === true){
    answerWrap.innerHTML = `<p class="answers__task">${translateData[currentLang].listen}</p>`;
  }
  nameArray.forEach((e,i)=>{
    itemsArray[i].textContent = birdsData[questionIndex][i].name[currentLang];
  })
  if(answersName != undefined){
    infoImg.alt = birdsData[questionIndex][elementValue].name[currentLang];
    answersName.textContent = birdsData[questionIndex][elementValue].name[currentLang];
    answersText.textContent = birdsData[questionIndex][elementValue].description[currentLang];
    if(elementValue == correctBirdId || correctAnswer){
      questionName.textContent = birdsData[questionIndex][randomNum].name[currentLang];
    }
  }
  
  if(isWin === true){
    winCongratulation.textContent = translateData[currentLang].сongratulations
    winInfoFirst.textContent = translateData[currentLang].winInfoFirst
    winInfoSecond.textContent = translateData[currentLang].winInfoSecond
    if(score === 30){
      winMessage.textContent = translateData[currentLang].winMessage
    }
    winBtn.textContent = translateData[currentLang].winBtn
    winInfoMain.innerHTML = translateData[currentLang].winInfoMain
    winInfoGallery.innerHTML = translateData[currentLang].winInfoGallery
  }
}

//Общие функции для плеера
function toggleplay(aud, btn, state){
  if(state){
    aud.pause();
    btn.style.backgroundImage = `url(../../assets/images/play.svg)`;
    return false
  } else {
    aud.play();
    btn.style.backgroundImage = `url(../../assets/images/pause.svg)`;
    return true;
  }
}

function pauseAudio(aud, icon) {
  aud.pause();
  icon.style.backgroundImage = `url(../../assets/images/play.svg)`;
  isPlay = false
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

//Работа плеера в вопросе
playBtn.addEventListener('click', ()=>{
  isPlay = toggleplay(audioQuestion, playBtn, isPlay)
})

audioQuestion.addEventListener('ended', () => {pauseAudio(audioQuestion, playBtn)})

//движение прогресс-бара
function updateProgress(e, prog){
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  prog.style.width = `${progressPercent}%`
}
audioQuestion.addEventListener('timeupdate', (e)=>{updateProgress(e, progress)})

//нажатие на прогресс-бар
function setsProgress(e, aud, progress){
  const width = progress.clientWidth;
  const clickX = e.offsetX;
  const duration = aud.duration;
  aud.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', (e)=>{setsProgress(e, audioQuestion, progressContainer)})

//текущее и общее время трека
function timeSong(){
  current.innerHTML = (formatTime(audioQuestion.currentTime));
  length.innerHTML = birdsData[questionIndex][randomNum].duration;
}

audioQuestion.addEventListener('timeupdate', timeSong);
audioQuestion.addEventListener('loadeddata', timeSong);

//кнопка громкости
function volumeBtnToggle(bool, btn, aud){
   isMuteQuestion = !bool;
   isMuteAnswer = !bool
   bool ? btn.classList.remove('volume__btn_active') : btn.classList.add('volume__btn_active') 
   aud.forEach(player=>{
    player.muted = !bool
   })
}

volumeBtn.addEventListener('click', () => {
  volumeBtnToggle(isMuteQuestion, volumeBtn, [audioQuestion, audioCorrect, audioIncorrect])
})

//слайдер громкости
function volumeProgressBar(prog, btn, aud) {
  prog.value = prog.value;
  aud.forEach(player=>{
    player.volume = prog.value / 100; 
  })
  volumeBtnToggle((prog.value != 0), btn, aud)
}
volumeProgress.addEventListener('input', () =>{
  volumeProgressBar(volumeProgress, volumeBtn, [audioQuestion, audioCorrect, audioIncorrect])
  rangeValue(volumeProgress)
})

//Стилизация инпута типа range
function rangeValue(rangeVal){
  let val = rangeVal.value
  rangeVal.style.background = `-webkit-linear-gradient(left, rgb(255,171,3) 0%, rgb(255,171,3) ${val}%, rgba(255, 255, 255, 0.8) ${val}%, rgba(255, 255, 255, 0.8) 100%)`
}
