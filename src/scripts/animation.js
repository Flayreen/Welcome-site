// Функція для перевірки, чи елемент у видимій частині вікна

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
    const visibleWidth = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));

    const visibleArea = visibleHeight * visibleWidth;
    const elementArea = el.offsetWidth * el.offsetHeight;

    // Перевірка, чи більше ніж 50% елементу видно
    return (visibleArea / elementArea) >= 0.5;
}
    
// Функція для встановлення класу .active відповідно до видимості елемента .feedback
function toggleActiveClass() {
    const feedbackElement1 = document.querySelector('.feedback_container_back');
    const feedbackElement2 = document.querySelector('.feedback_line');
    const feedbackElement3 = document.querySelector('.feedback_container_card');
    const aboutElement1 = document.querySelector('.about_container');
    const aboutElement2 = document.querySelector('.image_container_full');
    const aboutElement3 = document.querySelector('.image_container_stack');
    if (isElementInViewport(feedbackElement3)) {
        feedbackElement1.classList.add('active');
        feedbackElement2.classList.add('active');
        feedbackElement3.classList.add('active');
    };
    if (isElementInViewport(aboutElement1)) {
        aboutElement1.classList.add('active');
        aboutElement2.classList.add('active');
        aboutElement3.classList.add('active');
    };
}

// Додавання обробника події для виклику функції toggleActiveClass при прокрутці
window.addEventListener('scroll', toggleActiveClass);

// Виклик функції toggleActiveClass для перевірки стану при завантаженні сторінки
toggleActiveClass();




  // function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
  