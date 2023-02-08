console.log('1. Дизайн, адаптивный:+10\n2. В начальном состоянии игры поле заполняется случайно сгенерированными и перетасованными числами:+10\n3. При нажатии на плитку рядом с пустой ячейкой плитка перемещается в пустую ячейку:+10\n4. Игру можно перезапустить без перезагрузки страницы:+10\n5. Отображается продолжительность игры и количество ходов:+10\n6. Звуковое сопровождение (вкл/выкл) движения плитки:+10\n7. Реализовано сохранение состояния игры и сохранение топ-10 результатов с помощью LocalStorage:+10\nP.S. игра сохраняется двумя путями: если Вы нечаянно перезагрузили страницу, у вас будет последняя начатая игра или если Вы намеренно сохранили игру и хотите к ней вернуться при помощи дополнительной кнопки\n8. Реализован выбор разных размеров для рамки:+10\n9. Когда игра закончена, отображается сообщение:+10\n12. Анимация движения плитки по кадру:+15\n11. Плитки можно перетаскивать с помощью мыши:+15\nИтого: 120 баллов\n\nПожалуйста, если Вы не согласны, свяжитесь со мной в дискорд carinaguseva#3582.\nСпасибо за проверку!')

/*===== Генерация HTML ==================================================================================================*/

let rowAmount = localStorage.getItem('size2') == undefined ? 4 : localStorage.getItem('size2');
let amount = (rowAmount * rowAmount)


function field(){
    let htmlContent = 
        `    
        <div class="dark-wrapper"></div>    
        <div class="win-wrapper">
            <div class="win-text"><p>Hooray! <br>You solved the puzzle in <span id="minute-result">${getMinutes(timer)}</span>:<span id="second-result">${getSeconds(timer)}</span> and <span class="moove-count__result">${count}</span> moves!</p></div>
            <div class="win-button">Close</div>
        </div>  
        <div class="result-wrapper">
        <table>
            <thead>
            <tr>
                <th data-type="number">Place</th>
                <th data-type="string">Moves</th>
                <th data-type="string">Time</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table> 
        </div>
        <div id="game-container">
            <div class="button-container">
                <button id="shuffle" class="setting-button">shuffle and start</button>
                <button id="stop" class="setting-button">stop</button>
                <button id="save" class="setting-button">save</button>
                <button id="results" class="setting-button">results</button>
            </div>
            <div class="sizes">
                <p>Other sizes:</p>
                <p class="nine size">3x3</p>
                <p class="sixteen size">4x4</p>
                <p class="twenty-five size">5x5</p>
                <p class="thirty-six size">6x6</p>
                <p class="forty-nine size">7x7</p>
                <p class="sixty-four size">8x8</p>
            </div>
            <div class = "wrapper-info">
                <div class="mooves">
                <p>Moves: <span class="moove-count">${count}</span></p>
                </div>
                <div class="time">
                <p>Time: <span id="minute">${getMinutes(timer)}</span>:<span id="second">${getSeconds(timer)}</span></p>
                </div>
            </div>
            <div class="wrapper wrapper${rowAmount}" id="fifteen"></div>
            <div class="size-info"><p>Size: <span class="size-info_span">${rowAmount}x${rowAmount}</span></p></div>
            <div class="bottom-sets">
                <div class="sound"></div>
                <button id="load" class="setting-button">load saved game</button>
            </div>
        </div>
        `
    document.body.insertAdjacentHTML('afterbegin', htmlContent)
}

let item 
let matrix = JSON.parse(localStorage.getItem('matrix2')) == undefined ? [] : JSON.parse(localStorage.getItem('matrix2'));
let timerInterval;
let timerShuffle;
let timer = localStorage.getItem('time2')  == undefined ? 0 : localStorage.getItem('time2')*1;
let count =  localStorage.getItem('moove2')  == undefined ? 0 : localStorage.getItem('moove2');
let secondTime;
let minuteTime;
let shuffleNum = 100;
let blockCord = null

field()

let load = document.getElementById('load');
load.addEventListener('click', getLocal)

let second = document.getElementById('second');
let minute = document.getElementById('minute');
let secondResult = document.getElementById('second-result');
let minuteResult = document.getElementById('minute-result');

let moovesResult = document.querySelector('.moove-count__result')
let mooves = document.querySelector('.moove-count')
let wrapper= document.querySelector('.wrapper');

const shuffle = document.getElementById('shuffle')
const stop = document.getElementById('stop')
let saveButton = document.getElementById('save');

const sizes = document.querySelector('.sizes')
let sizeInfo = document.querySelector('.size-info_span');
let blunkNum = amount;
const resButton = document.getElementById('results')
const winMassage = document.querySelector('.win-wrapper')
const darkWrapper = document.querySelector('.dark-wrapper')
const winButton = document.querySelector('.win-button') 


let audioMoove = new Audio();
audioMoove.src = 'assets/sound_moove.mp3';

let audioWin = new Audio();
audioWin.src = 'assets/sound_win.mp3';

let audioShuffle = new Audio();
audioShuffle.src = 'assets/sound_shuffle.mp3';

const volumeBtn = document.querySelector('.sound')
let isMuted = false

function generateCards(amount){
    let card = '';
    for (let i = 1; i <= amount; i++){
        card += 
        `<div class="item js-item" data-matrix-id="${i}"><span class="itemVal">${i}</span></div>`
    }
    wrapper.innerHTML = card   
    item = Array.from(wrapper.querySelectorAll('.item'));
}

generateCards(amount)

sizes.addEventListener('click', (event) => {
    if(event.target.classList.contains('nine')){
        rowAmount = 3
        amount = (rowAmount * rowAmount)
        wrapper.className = "wrapper wrapper3"
        shuffleNum = 100
        sizeInfo.innerHTML = '3x3'  
    }
    if(event.target.classList.contains('sixteen')){
        rowAmount = 4
        amount = (rowAmount * rowAmount)
        wrapper.className = "wrapper wrapper4"
        shuffleNum = 100
        sizeInfo.innerHTML = '4x4'
    }
    if(event.target.classList.contains('twenty-five')){
        rowAmount = 5
        amount = (rowAmount * rowAmount)
        wrapper.className = "wrapper wrapper5"
        shuffleNum = 150
        sizeInfo.innerHTML = '5x5'
    }
    if(event.target.classList.contains('thirty-six')){
        rowAmount = 6
        amount = (rowAmount * rowAmount)
        wrapper.className = "wrapper wrapper6"
        shuffleNum = 200
        sizeInfo.innerHTML = '6x6'
    }
    if(event.target.classList.contains('forty-nine')){
        rowAmount = 7
        amount = (rowAmount * rowAmount)
        wrapper.className = "wrapper wrapper7"
        shuffleNum = 300
        sizeInfo.innerHTML = '7x7'
    }
    if(event.target.classList.contains('sixty-four')){
        rowAmount = 8
        amount = (rowAmount * rowAmount)
        wrapper.className = "wrapper wrapper8"
        shuffleNum = 400
        sizeInfo.innerHTML = '8x8'
    }
    generateCards(amount)
    getNewField()
    shuffleCombination()
    audioShuffle.play()
    stopTimer()
    timer = 0;
    count = -1
    setTimeInHtml(timer)
    countMooves()
    dragAndDrop()

    localStorage.removeItem('time2');
    localStorage.removeItem('moove2')
    localStorage.removeItem('matrix2')
    localStorage.removeItem('size2')
})



/*===== Генерация поля ==================================================================================================*/


function getNewField(){
    matrix = getMatrix(
        item.map((item) => Number(item.dataset.matrixId))
    )
    setPosisionMatrix(matrix)
}

function getMatrix(arr){
    let sm = Array.from(Array(rowAmount), () => new Array(rowAmount))
    let y = 0;
    let x = 0;

    for(let i = 0; i < arr.length; i++){
        if (x >= rowAmount){
            y++;
            x = 0;
        }
        sm[y][x] = arr[i];
        x++;
    }
    return sm;
}

function setField(){
  if(matrix.length==0){
    getNewField()
  } else {
    setPosisionMatrix(matrix)
  }
  
}
setField()

/*===== Позиционирование карточек с цифрами ==================================================================================================*/

function setPosisionMatrix(matrix){
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            const value = matrix[y][x]
            const node = item[value - 1]
            setStyle(node, x, y)
        }
    }
    isDraggable()
}

function setStyle(node, x, y){
    const shift = 100;
    node.style.transform = `translate3D(${x * shift}%, ${y * shift}%, 0)`
    
}

/*===== Перемешивание ==================================================================================================*/



function shuffleArray(arr){
    return arr
        .map(value => ({value, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)
}

shuffle.addEventListener('click', shuffleClick)
stop.addEventListener('click', stopTimer)

function shuffleClick(){
    shuffleCombination()
    timer = 0;
    setTimeInHtml(timer)
    count = -1;
    countMooves()
    audioShuffle.play()  
}

if(localStorage.getItem('matrix2') != undefined){
}else{
    shuffleCombination()
}

function shuffleCombination(){
    
    let shuffleCount = 0
    clearInterval(timerShuffle)
    if(shuffleCount === 0){
        timerShuffle = setInterval(() => {
            randomSwap(matrix)
            setPosisionMatrix(matrix)
            shuffleCount += 1
            if(shuffleCount >= shuffleNum){
                shuffleCount = 0
                clearInterval(timerShuffle)
            }
        },0)
        shuffle.removeEventListener('click', shuffleClick)
        setTimeout(() => {
            shuffle.addEventListener('click', shuffleClick)
        }, "1000")
    }  
}

function isDraggable(){
    item.forEach((num) => {
        blunkNum = amount;
        const button = num
        const buttonNum = Number(button.dataset.matrixId)
        const buttonCoordinations = findCoordinationsByNumber(buttonNum, matrix)
        const blankCoordinations = findCoordinationsByNumber(blunkNum, matrix)
        const isValidForm = isValid(buttonCoordinations, blankCoordinations)
        if(isValidForm){
            item[buttonNum-1].classList.add('mouse-over')
            item[buttonNum-1].setAttribute('draggable', 'true')
        }else{
            item[buttonNum-1].classList.remove('mouse-over')
            item[buttonNum-1].setAttribute('draggable', 'false')
        }
    })
}


wrapper.addEventListener('click', (event) => {
    blunkNum = amount;
    const button = event.target.closest('.item')
    if(!button){
        return
    }
    const buttonNum = Number(button.dataset.matrixId)
    const buttonCoordinations = findCoordinationsByNumber(buttonNum, matrix)
    const blankCoordinations = findCoordinationsByNumber(blunkNum, matrix)
    const isValidForm = isValid(buttonCoordinations, blankCoordinations)
    if(isValidForm){
        swap(blankCoordinations, buttonCoordinations, matrix)
        audioMoove.play();
        setPosisionMatrix(matrix);
        startTimer()
        countMooves()
    }   
})


/*===== Ходы ==================================================================================================*/


function countMooves() {
    count++;
    mooves.innerHTML = count
    moovesResult.innerHTML = count
    return(count)
}

function findCoordinationsByNumber(number, matrix){
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == number){
                return {x, y}
            }
        }
    }
    return null
}

function isValid(cor1, cor2){
    const difX = Math.abs(cor1.x - cor2.x);
    const difY = Math.abs(cor1.y - cor2.y);

    return (difX === 1 || difY === 1) && (cor1.x === cor2.x || cor1.y === cor2.y)
}

function swap(cor1, cor2, matrix){
    const cor1Number = matrix[cor1.y][cor1.x];
    matrix[cor1.y][cor1.x] = matrix[cor2.y][cor2.x];
    matrix[cor2.y][cor2.x] = cor1Number;
    if(isWon(matrix)){
        addWonClass()
        saveResult()
        makeResultField()
    }
}

let tbody = document.querySelector('tbody');
let table = document.querySelector('.result-wrapper');
let resultArray = JSON.parse(localStorage.getItem('results')) == undefined ? [] : JSON.parse(localStorage.getItem('results'));

function saveResult(){
    localStorage.setItem('winMooves', count + 1)
    localStorage.setItem('winMinuts', getMinutes(timer))
    localStorage.setItem('winSeconds', getSeconds(timer))

    resultArray.push({ 
        resultMooves: `${localStorage.getItem('winMooves')}`, 
        resultTime: `${localStorage.getItem('winMinuts')}:${localStorage.getItem('winSeconds')}`    
    })
    sortWinArray(resultArray)
    
    if(resultArray.length > 10){
        resultArray.pop()
    }
    localStorage.setItem('results', JSON.stringify(resultArray))
}

function sortWinArray(arr){
    arr.sort((a, b) => a.resultMooves - b.resultMooves)  
}

makeResultField()

function makeResultField(){
    let result = '';
    for (let i = 0; i < resultArray.length; i++){
        result += 
        `<tr>
            <td class="placenum">${i+1}</td>
            <td>${resultArray[i].resultMooves}</td>
            <td>${resultArray[i].resultTime}</td>
        </tr>`
    }
    tbody.innerHTML = result 
}

resButton.addEventListener('click', showResults)

function showResults(){
    table.classList.add('win-active')
    darkWrapper.classList.add('win-active')
    table.addEventListener('click', () => {
        table.classList.remove('win-active')
        darkWrapper.classList.remove('win-active')
    })
}
function isWon(matrix){
    let winArray = new Array(amount).fill(0).map((item, index) => index +1 )
    const flatMatrix = matrix.flat()
    for(let i = 0; i < winArray.length; i++){
        if(flatMatrix[i] !== winArray[i]){
            return false
        }
    }
    return true
}

function addWonClass(){
    setTimeout(()=> {
        winMassage.classList.add('win-active')
        darkWrapper.classList.add('win-active')
        audioWin.play();
        stopTimer()
        timer = 0;
        count = 0;
    }, 300)
    winButton.addEventListener('click', () => {
        winMassage.classList.remove('win-active')
        darkWrapper.classList.remove('win-active')
        shuffleCombination()
    })
    darkWrapper.addEventListener('click', () => {
        winMassage.classList.remove('win-active')
        darkWrapper.classList.remove('win-active')
        shuffleCombination()
    })
}


function randomSwap(matrix){
    blunkNum = amount
    const blankCoordinations = findCoordinationsByNumber(blunkNum, matrix)
    const validCord = findValidCord({blankCoordinations, matrix, blockCord})
    const randomCord = validCord[Math.floor(Math.random() * validCord.length)]
    swap(blankCoordinations, randomCord, matrix)
    blockCord = blankCoordinations
}

function findValidCord({blankCoordinations, matrix, blockCord}){
    const validCord = []
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            if(isValid({x,y}, blankCoordinations)){
                if(!blockCord || !(blockCord.x === x && blockCord.y === y)){
                    validCord.push({x,y});
                }
            }
        }
    }
    return validCord
}

/*===== Аудио сопровождение вкл/выкл ==================================================================================================*/

function mute(){
    isMuted = true
    volumeBtn.classList.add('muted')
    audioMoove.muted = true
    audioWin.muted = true
    audioShuffle.muted = true
    volumeBtn.style.backgroundImage = `url(assets/volumeOff.svg)`;
}
function noMute(){
    isMuted = false
    volumeBtn.classList.remove('muted')
    audioMoove.muted = false
    audioWin.muted = false
    audioShuffle.muted = false
    volumeBtn.style.backgroundImage = `url(assets/volumeOn.svg)`;
}

volumeBtn.addEventListener('click', () => {
    if (isMuted === false) {
        mute()
    } else {
        noMute()
    }
})


/*===== Таймер ==================================================================================================*/

function startTimer() {
    stopTimer();
    timerInterval = setInterval(function() {
    timer += 1/60;
    setTimeInHtml(timer)
    setLocalLoad()
    }, 1000/60);
}

function setTimeInHtml(t){
  
  secondTime = getSeconds(t)
  minuteTime = getMinutes(t)

  second.innerHTML = secondTime;
  minute.innerHTML = minuteTime;
  secondResult.innerHTML = secondTime;
  minuteResult.innerHTML = minuteTime;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function getSeconds(t){
  let secondVal = Math.floor(t) - Math.floor(t/60) * 60;  
  return secondVal < 10 ? "0" + secondVal.toString() : secondVal;
}

function getMinutes(t){
  let minuteVal = Math.floor(t/60);
  return minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
}


/*===== Сохранение ==================================================================================================*/

saveButton.addEventListener('click', setLocal)
function setLocal(){
localStorage.setItem('time', timer)
localStorage.setItem('moove', count)
localStorage.setItem('matrix', JSON.stringify(matrix))
localStorage.setItem('size', rowAmount)
}

function setLocalLoad(){
    localStorage.setItem('time2', timer)
    localStorage.setItem('moove2', count)
    localStorage.setItem('matrix2', JSON.stringify(matrix))
    localStorage.setItem('size2', rowAmount)
    }

function getLocal(){
    if (!localStorage.getItem('size')){
        alert (`You didn't save game yet!`)
    } else {
        if (rowAmount != localStorage.getItem('size')){
            alert (`Wrong size! You saved ${localStorage.getItem('size')}x${localStorage.getItem('size')} size! Choose correct size and try again.`)
        } else{
        matrix = JSON.parse(localStorage.getItem('matrix'));
        timer = localStorage.getItem('time')*1;
        count = (localStorage.getItem('moove')-1);
        rowAmount = localStorage.getItem('size');
        wrapper.className = `wrapper wrapper${rowAmount}`
        setField()
        countMooves()
        setTimeInHtml(timer)
        }
    }
}
    
/*===== Перетаскивание ==================================================================================================*/

function dragAndDrop(){
    let card = Array.from(document.querySelectorAll('.js-item'));
    const cell = card[card.length - 1]
    let numCard

    const dragStart = function(){
        setTimeout(() => {
            this.classList.add('hide');
        },0) 
        numCard= this.dataset.matrixId
    }
    const dragEnd = function(){
        setTimeout(() => {
            this.classList.remove('hide');
        },0)
    }

    const dragOver = function(event){
        event.preventDefault()
    }
    const dragEnter = function(event){
        event.preventDefault()
    }

    const dragDrop = function(){
        blunkNum = amount;
        const buttonNum = Number(numCard)
        const buttonCoordinations = findCoordinationsByNumber(buttonNum, matrix)
        const blankCoordinations = findCoordinationsByNumber(blunkNum, matrix)
        const isValidForm = isValid(buttonCoordinations, blankCoordinations)
        if(isValidForm){
            swap(blankCoordinations, buttonCoordinations, matrix)
            audioMoove.play();
            setPosisionMatrix(matrix);
            startTimer()
            countMooves()
        }
        
    }
    
    cell.addEventListener('dragover', dragOver)
    cell.addEventListener('dragenter', dragEnter)
    cell.addEventListener('drop', dragDrop)

    card.forEach((card) => {
        card.addEventListener('dragstart', dragStart)
        card.addEventListener('dragend', dragEnd)
    })
    
}
dragAndDrop()