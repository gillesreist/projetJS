function replaceContent(element, className, newContent) {
    let targetDiv = element.getElementsByClassName(className)[0];
    targetDiv.textContent=newContent;
}

function createPost(clonedPost, jsonObject) {
  let clone = clonedPost.cloneNode(true);
  replaceContent(clone, "title", jsonObject.title);
  replaceContent(clone, "content", jsonObject.body);
  replaceContent(clone, "author", jsonObject.userId);
  replaceContent(clone, "post_id", jsonObject.id);
  clonedPost.after(clone);
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
        
                createPost(firstArticle, result[i]);
            }

            firstArticle.remove();
        }
      })
      .catch((error) =>
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
      );

}


window.addEventListener("DOMContentLoaded", (event) => {

  let feedUrl = 'https://jsonplaceholder.typicode.com/posts';
  getLast10Posts(feedUrl);


  let button = document.querySelector('.getArticles');
  button.addEventListener('click', () =>getLast10Posts(feedUrl), false);


});



