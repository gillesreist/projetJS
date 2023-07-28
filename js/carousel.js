function moveSlide(slides, curSlide) {
    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}

function curSlidePlus(slides, curSlide, maxSlide) {
      // check if current slide is the last and reset current slide
      if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    moveSlide(slides, curSlide);
    return curSlide;
}

function curSlideMinus(slides, curSlide, maxSlide) {
    // check if current slide is the first and reset current slide
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    moveSlide(slides, curSlide);
    return curSlide;
}


window.addEventListener("DOMContentLoaded", (event) => {

    // Select all slides
    const slides = document.querySelectorAll(".slide");

    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
    });

    // current slide counter
    let curSlide = 0;

    // select next slide button
    const nextSlide = document.querySelector(".btn-next");

    // select previous slide button
    const previousSlide = document.querySelector(".btn-prev");

    // maximum number of slides
    let maxSlide = slides.length - 1;

    // add event listener and next slide functionality
    nextSlide.addEventListener("click", () => {
        curSlide = curSlidePlus(slides, curSlide, maxSlide);
    });

    // add event listener and previous slide functionality
    previousSlide.addEventListener("click", () => {
        curSlide = curSlideMinus(slides, curSlide, maxSlide);
    });

    let defilAuto = setInterval(() => { curSlide = curSlidePlus(slides, curSlide, maxSlide) }, 4000);

    const carousel = document.querySelector(".carousel");

    carousel.addEventListener(
        "mouseover",
        (event) => {
            clearInterval(defilAuto);
        });

    carousel.addEventListener(
        "mouseleave",
        (event) => {
            defilAuto = setInterval(() => { curSlide = curSlidePlus(slides, curSlide, maxSlide) }, 4000);
        });


});