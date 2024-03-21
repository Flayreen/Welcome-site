const activeSvgList = document.querySelector('.header__burger-btn');
const hiddenDivList = document.querySelector('.header__navigation');
const closeSvg = document.querySelector('.header__burger-al svg');
const background = document.querySelector('.header__background');

activeSvgList.addEventListener('click', function (event) {
    event.stopPropagation();
    const computedStyle = window.getComputedStyle(hiddenDivList);
    if (computedStyle.left === '-235px') {
        hiddenDivList.style.left = '-16px';
        background.style.display = 'block';
    }
});

closeSvg.addEventListener('click', function (event) {
    event.stopPropagation();
    hiddenDivList.style.left = '-235px';
    background.style.display = 'none';
});

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    if (!hiddenDivList.contains(targetElement) && targetElement !== activeSvgList && window.innerWidth < 768) {
        hiddenDivList.style.left = '-235px';
        background.style.display = 'none';
    }
});

// const burgerSections = [
//     { link: document.querySelector('.header__navigation__link[href="#about"]') },
//     { link: document.querySelector('.header__navigation__link[href="#skills"]') },
//     { link: document.querySelector('.header__navigation__link[href="#portfolio"]') },
//     { link: document.querySelector('.header__navigation__link[href="#feedback"]') }
// ];


// function setActiveSection() {
//     const currentScroll = window.scrollY;
//     for (const section of burgerSections) {
//         const { link } = section;
//         const targetId = link.getAttribute('href').substring(1);
//         const target = document.getElementById(targetId);
//         if (target) {
//             const { top, bottom } = target.getBoundingClientRect();
//             if (top <= 0 && bottom >= 0) {
//                 link.classList.add('active');
//             } else {
//                 link.classList.remove('active');
//             }
//         }
//     }
// }

// window.addEventListener('scroll', setActiveSection);

// setActiveSection();
