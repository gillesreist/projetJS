let galery = document.querySelector('.galery');

let mosaic = document.querySelector('.mosaic');
mosaic.addEventListener('click', () => {
    galery.classList.add('galery_mosaic');
    galery.classList.remove('galery_column');
}, false);


let column = document.querySelector('.column');
column.addEventListener('click', () => {
    galery.classList.remove('galery_mosaic');
    galery.classList.add('galery_column');
}, false);