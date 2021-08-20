const date = new Date()
document.getElementById('year').innerHTML = date.getFullYear();


const bookingBtn = document.querySelector('.booking')
const positionYofForm = document.querySelector('.form').offsetTop;

bookingBtn.addEventListener('click', () => {
    window.scrollTo({top: positionYofForm, behavior: "smooth"});
})


const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')

leftArrow.addEventListener('click', () => {
    slider.classList.remove('moved-left');
    moveSlider();
})
rightArrow.addEventListener('click', () => {
    slider.classList.add('moved-left');
    moveSlider();
})

function moveSlider() {
    leftArrow.classList.toggle('disappear')
    rightArrow.classList.toggle('disappear')
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.toggle('hidden')
    }
}

const icons = document.querySelectorAll('.icon');
const discriptionBlockYOffset = document.querySelector('.discription').offsetTop;
const windowHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > (discriptionBlockYOffset - windowHeight) && window.pageYOffset < discriptionBlockYOffset) {
        let timeDelay = 0;
        for (let i = 0; i < icons.length; i++) {
            setTimeout(() => icons[i].classList.add('active'), timeDelay);
            timeDelay += 1000;
        }
    } else {
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove('active')
        }
    }
})


