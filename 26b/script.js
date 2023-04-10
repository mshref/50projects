const sliderContainer = document.querySelector('.slider-container')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSideIndex = 0

leftSlide.style.top = `-${(slidesLength-1)*100}vh`


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if(direction === 'up'){
        activeSideIndex++
        if(activeSideIndex > slidesLength-1){
            activeSideIndex = 0
        }
    }else if (direction === 'down'){
        activeSideIndex--
        if(activeSideIndex < 0){
            activeSideIndex = slidesLength-1
        }
    }

    rightSlide.style.transform = `translateY(-${activeSideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSideIndex * sliderHeight}px)`
}