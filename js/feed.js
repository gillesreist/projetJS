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

  if (clone.lastElementChild.classList.contains("delete_article")) {
    clone.lastElementChild.remove();
  }

  clonedPost.parentElement.insertBefore(clone, clonedPost);
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

  firstArticle.parentElement.firstElementChild.classList.add('created_article');

  firstArticle.parentElement.firstElementChild.addEventListener('click', (event) => {
    if (event.target.classList.contains('created_article')) {
      deleteArticle(event.target); 
    } else if (event.target.parentElement.classList.contains('created_article')) {
      deleteArticle(event.target.parentElement); 
    }
});

}

function deleteArticle(article) {
  let div = document.createElement("div");
  div.classList.add('delete_article');
  let p = document.createElement("p");
  p.textContent = "Voulez-vous supprimer cet article ?";
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

  article.appendChild(div);

  article.classList.remove('created_article');

  cancelButton.addEventListener('click', () => {
      div.remove();
      article.classList.add('created_article');
  });

  deleteButton.addEventListener('click', () => {
      article.remove();
  });

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



