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
    const skillsElementTitle = document.querySelector('.skills__title');
    const skillsElement1 = document.querySelector('.active1_tracker');
    const skillsElement1b = document.querySelector('.active1_block_tracker');
    const skillsElement2 = document.querySelector('.active2_tracker');
    const skillsElement2b = document.querySelector('.active2_block_tracker');
    const skillsElement3 = document.querySelector('.active3_tracker');
    const skillsElement3b = document.querySelector('.active3_block_tracker');
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
    if (isElementInViewport(skillsElement1)) {
        skillsElementTitle.classList.add('active');
        skillsElement1.classList.add('active1');
        skillsElement1b.classList.add('active1_block');
        skillsElement2.classList.add('active2');
        skillsElement2b.classList.add('active2_block');
        skillsElement3.classList.add('active3');
        skillsElement3b.classList.add('active3_block');
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
  