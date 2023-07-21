fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    if(response.ok) {
        return response.json();
    } else {
      console.log('Mauvaise réponse du réseau : ' + response.status);
    }
})
  .then((result) =>  
    console.log(result)
  )
  .catch((error) =>
    console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
  );
