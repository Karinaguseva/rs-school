(function () {
    console.log('Оценка 100 баллов. \nФорма кроссчека тут -> https://rolling-scopes-school.github.io/checklist/\nЕсли у Вас что-то не работает, напишите пожалуйста в discord: carinaguseva#3582\n \nЛогин попап соответствует верстке (проверка соответствия производится через DevTools на ширине экрана 1440px)\n \nСлайдер не должен быть бесконечным, при нажатии на картинку, слайдер плавно передвигается на нужную картинку, при окончании ряда картинок, слайдер возвращает нас в начало или в конец слайдера (версия Desktop) - это нормально\n \nСпасибо Вам за проверку!');
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuClose = document.querySelector('.nav_close');
    const darkWrapper = document.querySelector('.dark_wrapper');
    const headerItem = document.querySelector('.header_list');
    burgerItem.addEventListener('click', () => {
       menu.classList.add ('nav_active');
       darkWrapper.classList.add ('dark_wrapper_active');
    });
    menuClose.addEventListener('click', () =>{
        menu.classList.remove ('nav_active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });
    darkWrapper.addEventListener('click', () => {
        menu.classList.remove ('nav_active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });
    headerItem.addEventListener('click', () => {
        menu.classList.remove ('nav_active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });  
}());
