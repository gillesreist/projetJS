function replaceContent(element, className, newContent) {
    var targetDiv = element.getElementsByClassName(className)[0];
    targetDiv.textContent=newContent;
}

function getPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        if(response.ok) {
            return response.json();
        } else {
          console.log('Mauvaise réponse du réseau : ' + response.status);
        }
    })
      .then((result) =>  {
        var elem = document.querySelector('.feed');
    
        for (let i = 0; i < 10; i++) {
    
            var clone = elem.cloneNode(true);
            replaceContent(clone, "title", result[i].title);
            replaceContent(clone, "content", result[i].body);
            replaceContent(clone, "author", result[i].userId);
            replaceContent(clone, "post_id", result[i].id);
            elem.parentNode.lastChild.after(clone);
        }
    
        elem.remove();
    
    
      })
      .catch((error) =>
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
      );

}

window.onload = getPosts


