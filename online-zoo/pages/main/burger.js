(function () {
    console.log('Работа выполнена в соответствии с требованиями третьей недели.\nПожалуйста, если что-то работает некорректно свяжитесь со мной в дискорд carinaguseva#3582.\nСпасибо за проверку!')
    
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__container');
    const darkWrapper = document.querySelector('.dark__wrapper');
    const menuClose = document.querySelector('.nav__close');
    const headerItem = document.querySelector('.header__list');
    const design = document.querySelector('.design');
    burgerItem.addEventListener('click', () => {
       menu.classList.add ('header__container__active');
       darkWrapper.classList.add ('dark_wrapper_active');
    });
    menuClose.addEventListener('click', () =>{
        menu.classList.remove ('header__container__active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });
    darkWrapper.addEventListener('click', () => {
        menu.classList.remove ('header__container__active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });
    headerItem.addEventListener('click', () => {
        menu.classList.remove ('header__container__active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });  
    design.addEventListener('click', () => {
        menu.classList.remove ('header__container__active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });  
}());
