function postNewPic () {
    if (validateForm()) {
        let newPicDiv = document.createElement("div");
        newPicDiv.style.position = "relative";
        newPicDiv.classList.add('user_created');
        let newPic = document.createElement("img");
        newPic.src = document.getElementById('pic_url').value;
        newPicDiv.appendChild(newPic);
        document.querySelector('.galery').appendChild(newPicDiv);
        document.getElementById("myForm").style.display = "none";
        document.querySelector('.url_error').textContent = "";
    } else {
        document.querySelector('.url_error').textContent = "Vous devez rentrer une addresse commençant par http: ou https:";
    }
}

function validateForm() {
    let url = document.getElementById('pic_url').value;
    if (!/^https:/.test(url) && !/^http:/.test(url)) {
      return false;
    } else {
        return true;
    }
} 


function createDelete(event) {
    let div = document.createElement("div");
    div.classList.add('delete-popup');
    let p = document.createElement("p");
    p.textContent = "Voulez-vous supprimer cette photo ?";
    let div2 = document.createElement("div");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add('btn'); 
    deleteButton.classList.add('delete'); 
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent="oui";
    let cancelButton = document.createElement("button"); 
    cancelButton.classList.add('btn'); 
    cancelButton.classList.add('delete_cancel'); 
    cancelButton.setAttribute('type', 'button');
    cancelButton.textContent="non";


    div2.appendChild(deleteButton);
    div2.appendChild(cancelButton);
    div.appendChild(p);
    div.appendChild(div2);

    event.target.parentElement.appendChild(div);
    div.style.height =  event.target.parentElement.style.height;
    div.style.width =  event.target.parentElement.style.width;
}

window.addEventListener("DOMContentLoaded", (event) => {

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

    let addPic = document.querySelector('.add_pic');
    addPic.addEventListener('click', () => {
        document.querySelector('.form-popup').style.display  =  document.querySelector('.form-popup').style.display==='block' ? 'none' : 'block';
    }, false);

    let close = document.querySelector('.cancel');
    close.addEventListener('click', () => {
        document.getElementById("myForm").style.display = "none";
    }, false);

    let postPic = document.querySelector('.post_pic');
    postPic.addEventListener('click', (e) => {
        e.preventDefault();
        postNewPic();
    }, false);

    document.addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains("user_created")) {
            createDelete(event);
        }
    });

});