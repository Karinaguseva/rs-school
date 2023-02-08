(function () {
    const sliderItem = document.querySelectorAll('.slider_item');
    const firstDot = document.querySelector('.circle_one');
    const secondDot = document.querySelector('.circle_two');
    const thirdDot = document.querySelector('.circle_three');
    const arrowLeftCenter = document.querySelector('.arrow_left');
    const arrowRightCenter = document.querySelector('.arrow_right');
    const arrowLeftRight = document.querySelector('.arrow_left_second');
    const arrowRightLeft = document.querySelector('.arrow_right_second');

    /*firstDot.addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
    });

    secondDot.addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
    });
    
    thirdDot.addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_right');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[1].classList.add ('slider_active_right');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[2].classList.add ('slider_active_right');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[3].classList.add ('slider_active_right');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[4].classList.add ('slider_active_right');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
    });*/

    sliderItem[0].addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_right');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[1].classList.add ('slider_active_right');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[2].classList.add ('slider_active_right');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[3].classList.add ('slider_active_right');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[4].classList.add ('slider_active_right');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
    });

    sliderItem[1].addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
    });

    sliderItem[2].addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
    });      
     
    sliderItem[3].addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_right');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[1].classList.add ('slider_active_right');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[2].classList.add ('slider_active_right');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[3].classList.add ('slider_active_right');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[4].classList.add ('slider_active_right');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
    });

    sliderItem[4].addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
    });

    arrowLeftCenter.addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        arrowLeftCenter.classList.add('arrow_left_not');
        arrowRightCenter.style.visibility = "hidden";
        arrowRightLeft.style.visibility = "visible";
    });

    arrowRightCenter.addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_right');
        sliderItem[0].classList.remove ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[1].classList.add ('slider_active_right');
        sliderItem[1].classList.remove ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[2].classList.add ('slider_active_right');
        sliderItem[2].classList.remove ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[3].classList.add ('slider_active_right');
        sliderItem[3].classList.remove ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[4].classList.add ('slider_active_right');
        sliderItem[4].classList.remove ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        arrowRightCenter.classList.add('arrow_right_not');
        arrowLeftCenter.style.visibility = "hidden";
        arrowLeftRight.style.visibility = "visible";
    });

    arrowLeftRight.addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        arrowLeftRight.style.visibility = "hidden";
        arrowRightCenter.style.visibility = "visible";
        arrowLeftCenter.style.visibility = "visible";
        arrowRightCenter.classList.remove('arrow_right_not');
        arrowLeftCenter.classList.remove('arrow_left_not');

    });

    arrowRightLeft.addEventListener('click', () => {
        sliderItem[0].classList.add ('slider_active_center');
        sliderItem[0].classList.remove ('slider_active_left');
        sliderItem[0].classList.remove ('slider_active_right');
        sliderItem[1].classList.add ('slider_active_center');
        sliderItem[1].classList.remove ('slider_active_left');
        sliderItem[1].classList.remove ('slider_active_right');
        sliderItem[2].classList.add ('slider_active_center');
        sliderItem[2].classList.remove ('slider_active_left');
        sliderItem[2].classList.remove ('slider_active_right');
        sliderItem[3].classList.add ('slider_active_center');
        sliderItem[3].classList.remove ('slider_active_left');
        sliderItem[3].classList.remove ('slider_active_right');
        sliderItem[4].classList.add ('slider_active_center');
        sliderItem[4].classList.remove ('slider_active_left');
        sliderItem[4].classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        arrowRightLeft.style.visibility = "hidden";
        arrowRightCenter.style.visibility = "visible";
        arrowLeftCenter.style.visibility = "visible";
        arrowRightCenter.classList.remove('arrow_right_not');
        arrowLeftCenter.classList.remove('arrow_left_not');
    });

    function funonload() {
        secondDot.classList.add ('circle_two_active');
        arrowLeftRight.style.visibility = "hidden";
    } 
    window.onload = funonload;

    function clientWidth() {
        if (document.documentElement.clientWidth <= 390) {
            sliderItem[0].classList.add ('slider_active_left');
            sliderItem[0].classList.remove ('slider_active_center');
            sliderItem[0].classList.remove ('slider_active_right');
            sliderItem[1].classList.add ('slider_active_left');
            sliderItem[1].classList.remove ('slider_active_center');
            sliderItem[1].classList.remove ('slider_active_right');
            sliderItem[2].classList.add ('slider_active_left');
            sliderItem[2].classList.remove ('slider_active_center');
            sliderItem[2].classList.remove ('slider_active_right');
            sliderItem[3].classList.add ('slider_active_left');
            sliderItem[3].classList.remove ('slider_active_center');
            sliderItem[3].classList.remove ('slider_active_right');
            sliderItem[4].classList.add ('slider_active_left');
            sliderItem[4].classList.remove ('slider_active_center');
            sliderItem[4].classList.remove ('slider_active_right');
            firstDot.classList.add ('circle_one_active');
            secondDot.classList.remove ('circle_two_active');
            thirdDot.classList.remove ('circle_three_active');
            arrowLeftCenter.classList.add('arrow_left_not');
            arrowRightCenter.style.visibility = "hidden";
            arrowRightLeft.style.visibility = "visible";

            function funonload() {
                secondDot.classList.remove ('circle_two_active');
                arrowLeftRight.style.visibility = "hidden";
            } 
            window.onload = funonload;

        } else if (document.documentElement.clientWidth <= 1440) {
            sliderItem[0].classList.add ('slider_active_center');
            sliderItem[0].classList.remove ('slider_active_left');
            sliderItem[0].classList.remove ('slider_active_right');
            sliderItem[1].classList.add ('slider_active_center');
            sliderItem[1].classList.remove ('slider_active_left');
            sliderItem[1].classList.remove ('slider_active_right');
            sliderItem[2].classList.add ('slider_active_center');
            sliderItem[2].classList.remove ('slider_active_left');
            sliderItem[2].classList.remove ('slider_active_right');
            sliderItem[3].classList.add ('slider_active_center');
            sliderItem[3].classList.remove ('slider_active_left');
            sliderItem[3].classList.remove ('slider_active_right');
            sliderItem[4].classList.add ('slider_active_center');
            sliderItem[4].classList.remove ('slider_active_left');
            sliderItem[4].classList.remove ('slider_active_right');
            secondDot.classList.add ('circle_two_active');
            firstDot.classList.remove ('circle_one_active');
            thirdDot.classList.remove ('circle_three_active');
            arrowLeftRight.style.visibility = "hidden";
            arrowRightCenter.style.visibility = "visible";
            arrowLeftCenter.style.visibility = "visible";
            arrowRightCenter.classList.remove('arrow_right_not');
            arrowLeftCenter.classList.remove('arrow_left_not');
        }
    }
    window.addEventListener('resize', clientWidth);
    clientWidth();
    
}());




