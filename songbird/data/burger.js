(function () {

console.log(`
Вёрстка, дизайн, UI всех трёх страниц приложения +60
Аудиоплеер +30
Верхняя панель страницы викторины +20
Блок с вопросом +20
Блок с вариантами ответов (названия птиц) +60
Блок с описанием птицы: +30
Кнопка перехода к следующему вопросу +30
Extra scope:
- локализация приложения на два языка, выбранный язык хранится в local storage и сохраняется при перезагрузке +10
- создание галереи всех птиц приложения c информацией о них (фото, аудио, название, описание) +10
Итого: 270 баллов.

P.S. "Страница с результатми отображается после завершения викторины" - в ТЗ нет требования перехода на страницу из любого места приложения.

Для удобства проверки в консоль выведен правильный ответ.

Пожалуйста, если что-то работает некорректно свяжись со мной в дискорд carinaguseva#3582.
Спасибо за проверку!`)

    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const darkWrapper = document.querySelector('.dark__wrapper');
    const menuClose = document.querySelector('.nav__close');
    const headerItem = document.querySelector('.nav__list');
    burgerItem.addEventListener('click', () => {
       menu.classList.add ('header__nav_active');
       darkWrapper.classList.add ('dark__wrapper_active');
    });
    menuClose.addEventListener('click', () =>{
        menu.classList.remove ('header__nav_active');
        darkWrapper.classList.remove ('dark__wrapper_active');
    });
    darkWrapper.addEventListener('click', () => {
        menu.classList.remove ('header__nav_active');
        darkWrapper.classList.remove ('dark__wrapper_active');
    });
    headerItem.addEventListener('click', () => {
        menu.classList.remove ('header__nav_active');
        darkWrapper.classList.remove ('dark__wrapper_active');
    });   
}());
