const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#btn-nav');

const navBtnImg = document.querySelector('#nav-btn-img');
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";

    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
}