function replaceContent(element, className, newContent) {
    let targetDiv = element.getElementsByClassName(className)[0];
    targetDiv.textContent=newContent;
}

function createPost(clonedPost, object) {
  let clone = clonedPost.cloneNode(true);
  replaceContent(clone, "title", object.title);
  replaceContent(clone, "content", object.body);
  replaceContent(clone, "author", object.userId);
  replaceContent(clone, "post_id", object.id);
  clonedPost.parentElement.insertBefore(clone, clonedPost.parentElement.firstChild);
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

function publishPost() {
  let firstArticle = document.querySelector('.feed');

  const newArticle = {
    title: document.getElementById('title_post').value,
    body: document.getElementById('content_post').value,
    userId: document.getElementById('author_post').value,
    id: document.getElementById('id_post').value
  }

  createPost(firstArticle, newArticle);
  firstArticle.parentElement.lastElementChild.remove();

}

window.addEventListener("DOMContentLoaded", (event) => {

  let feedUrl = 'https://jsonplaceholder.typicode.com/posts';
  getLast10Posts(feedUrl);


  let refreshButton = document.querySelector('.getArticles');
  refreshButton.addEventListener('click', () => getLast10Posts(feedUrl), false);

  let submitButton = document.getElementById('publish_button');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    publishPost();
  }, false);

});



