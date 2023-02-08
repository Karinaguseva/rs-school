//Pets section

const cardsIcons = {
    icon: ['../../assets/icons/banana-bamboo_icon.svg', '../../assets/icons/meat-fish_icon.svg'],
    alt: ['../../assets/icons/banana-bamboo_icon.svg', '../../assets/icons/meat-fish_icon.svg'],
    class: ['banana', 'meat']
}

const cards = [
    {
        id: 'panda',
        face: '../../assets/images/pandas.jpg',
        altFace: 'pandas',
        title: 'giant pandas',
        subtitle: 'Native to Southwest China',
        type: 0
    },
    {
        id: 'eagle',
        face: '../../assets/images/eagle.jpg',
        altFace: 'eagles',
        title: 'eagles',
        subtitle: 'Native to South America',
        type: 1
    },
    {
        id: 'kong',
        face: '../../assets/images/kong.jpg',
        altFace: 'gorillas',
        title: 'gorillas',
        subtitle: 'Native to Congo',
        type: 0
    },
    {
        id: 'sloth',
        face: '../../assets/images/sloth.jpg',
        altFace: 'two-toed sloth',
        title: 'two-toed sloth',
        subtitle: 'Mesoamerica, South America',
        type: 0
    },
    {
        id: 'cheetah',
        face: '../../assets/images/cheetah.jpg',
        altFace: 'cheetahs',
        title: 'cheetahs',
        subtitle: 'Native to Africa',
        type: 1
    },
    {
        id: 'penguin',
        face: '../../assets/images/penguin.jpg',
        altFace: 'penguins',
        title: 'penguins',
        subtitle: 'Native to Antarctica',
        type: 1
    },
    {
        id: 'alligator',
        face: '../../assets/images/alligator-1000.png',
        altFace: 'alligators',
        title: 'alligators',
        subtitle: 'Native to Southeastern U. S.',
        type: 1
    },
    {
        id: 'gorilla',
        face: '../../assets/images/gorilla.png',
        altFace: 'gorillas',
        title: 'gorillas',
        subtitle: 'Native to Congo',
        type: 0
    }
]


const petsContainer = document.querySelector('.pet__wrap')
const arrowLeft = document.querySelector('.arrow__left')
const arrowRight = document.querySelector('.arrow__right')

function sliderActiv(direction){
//создание div
    let bigContainer = document.createElement('div');
//добавление класса
    bigContainer.className = `pets__flex ${direction ==  1 ? 'fleft' : ''}`;
// добавление в div карточек   
    bigContainer.innerHTML = generate(6)
    
    let petsflex = document.querySelector('.pets__flex');
    if (direction == -1){
        petsflex.after(bigContainer)
        petsflex.classList.add('active__wrap__left');
    }
    if (direction == 1){
        petsflex.before(bigContainer)
          
        setTimeout(() => {
            document.querySelector('.pets__flex.fleft').classList.remove('fleft')
        }, "1")
    }
    

    setTimeout(() => {
        petsflex.remove();
    }, "500")

}


function clickLeft(){
    sliderActiv(1)
    arrowLeft.removeEventListener('click', clickLeft)
    setTimeout(() => {
        arrowLeft.addEventListener('click', clickLeft)
    }, "500")
}
function clickRight(){
    sliderActiv(-1)
    arrowRight.removeEventListener('click', clickRight)
    setTimeout(() => {
        arrowRight.addEventListener('click', clickRight)
    }, "500")
}

    arrowLeft.addEventListener('click', clickLeft)
    arrowRight.addEventListener('click', clickRight)  


function generate(amount){
    let cardList = '';

//создание массива из 6ти рандомных цифр
    let from = 0, to = 7, n = 6;
    let result = [...Array(to-from+1).keys()].map(i=>i+from) 
    .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), [])
    .slice(0, n); 

//создание карточки
    for (let i = 0; i < amount; i++){
        cardList += 
        `<div class="pet__card">
            <div class="card">
                <img src=${cards[result[i]].face} alt="${cards[result[i]].altFace}" class="card__img">
            </div>
            <div class="text__container">
                <div class="card__text">
                    <h3 class="card__title">${cards[result[i]].title}</h3>
                    <p class="card__subtitle">${cards[result[i]].subtitle}</p>
                </div>
                <div class="pet__icon ${cardsIcons.class[cards[result[i]].type]}">
                    <img class="svg__icon__${cardsIcons.class[cards[result[i]].type]} svg__icon" src=${cardsIcons.icon[cards[result[i]].type]} alt="${cardsIcons.alt[cards[result[i]].type]}">
                </div>
            </div>
        </div>`
    }
    return cardList
}

//Pets section END


//Testimonials section

//Input range
let inputRange = document.querySelector('input[type="range"]');
const comments = document.querySelector('.comments');

function windowSize(){
    inputRange.value = 0
    if (window.innerWidth <= 1550){
        inputRange.max = 8
    } 
    if (window.innerWidth > 1550){
        inputRange.max = 7
    }
}
windowSize()
window.addEventListener('resize', () => {
    windowSize()
    change()
})

function change(){
        removeClass()
        comments.classList.add(`active__left${[inputRange.value]}`)
}

function removeClass(){
    for(let i = 0; i < 9; i++){
        comments.classList.remove(`active__left${[i]}`)    
    }
}

inputRange.addEventListener('input', change)

//Input range END

//Pop-up
const testimonials = [
    {
        photo: '../../assets/images/Michael.png',
        alt: 'Michael',
        name: 'Michael John',
        location: 'Local Austria',
        time: 'Today',
        text: `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`,

    },
    {
        photo: '',
        alt: '',
        name: '',
        location: '',
        time: '',
        text: ``,
    },
    {
        photo: '../../assets/images/Frederica.png',
        alt: 'Fredericka',
        name: 'Fredericka Michelin',
        location: 'Local Austria',
        time: 'Yesterday',
        text: `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
        <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
        photo: '',
        alt: '',
        name: '',
        location: '',
        time: '',
        text: ``,
    },
    {
        photo: '../../assets/icons/unknown.svg',
        alt: 'unknown',
        name: 'Oska Samborska',
        location: 'Local Austria',
        time: 'Yesterday',
        text: `&nbsp;Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
]


const darkWrapper = document.querySelector('.dark__wrapper__pop');
const comment = document.querySelectorAll('.comment')

comment.forEach((element, index) => {
    element.addEventListener('click', () => openPop(index))
  });


  function generateComment(number){
    if (document.body.clientWidth <= 999) {
            let genComment = ` 
                <div class="comment__pop">
                    <div class="information__container__pop">
                        <div class="photo">
                            <img src=${testimonials[number].photo} alt="${testimonials[number].alt}">
                        </div>
                        <div class="information">
                            <div class="name__pop"><p>${testimonials[number].name}</p></div>
                            <div class="last__comment__pop">
                                <div class="location"><p>${testimonials[number].location}</p></div>
                                <p class="dot__pop">•</p>
                                <div class="time"><p>${testimonials[number].time}</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="comment__text__pop"><p>${testimonials[number].text}
                        </p>
                    </div>
                    <div class="pop__close">
                        <span class="pop__close__line"></span>
                        <span class="pop__close__line"></span>
                    </div>
                </div>
            `;
        return genComment  
    }
    }

    function openPop(num){
        if (document.body.clientWidth <= 999) {
            let commentNew = document.createElement('div');
            //добавление класса
            commentNew.className = 'active__pop';
            // добавление в div карточек   
            commentNew.innerHTML = generateComment(num)

            darkWrapper.after(commentNew)
            darkWrapper.classList.add ('dark_wrapper_pop_active');
            setTimeout(() => {
                commentNew.classList.add ('active__open');
            }, "1")
            
            let closePop = document.querySelector('.pop__close')

            function closePopup(){
                commentNew.classList.add ('active__close');
                setTimeout(() => {
                    commentNew.remove()
                    darkWrapper.classList.remove ('dark_wrapper_pop_active');
                }, "300")
            }
            darkWrapper.addEventListener('click', () => {
                closePopup()
            });
            closePop.addEventListener('click', () => {
                closePopup()
            });
        }
    }

//Pop-up END