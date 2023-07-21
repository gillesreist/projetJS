function replaceContent(element, className, newContent) {
    let targetDiv = element.getElementsByClassName(className)[0];
    targetDiv.textContent=newContent;
}

function getLast10Posts(url) {

    fetch(url).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
          console.log('Mauvaise réponse du réseau : ' + response.status);
        }
    })
      .then((result) =>  {
        
        let articles = document.querySelector('.articles');
        let firstArticle = document.querySelector('.feed');
        let lastId = document.querySelector('.post_id');

        let newArticlesNumber = result.length - lastId.textContent;

        if (newArticlesNumber > 0) {

           while(articles.childElementCount>1){
                articles.removeChild(articles.lastElementChild);
            }
    
            for (let i = result.length-10; i < result.length; i++) {
        
                let clone = firstArticle.cloneNode(true);
                replaceContent(clone, "title", result[i].title);
                replaceContent(clone, "content", result[i].body);
                replaceContent(clone, "author", result[i].userId);
                replaceContent(clone, "post_id", result[i].id);
                firstArticle.after(clone);
            }

            firstArticle.remove();
        }
      })
      .catch((error) =>
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
      );

}

let feedUrl = 'https://jsonplaceholder.typicode.com/posts';

window.onload = getLast10Posts(feedUrl);


let button = document.querySelector('.getArticles');
button.addEventListener('click', getLast10Posts(feedUrl), false);

