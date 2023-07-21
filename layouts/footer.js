const footer = document.createElement('footer');
footer.innerHTML = `
<div class="footer_container">
  <section class="reseaux">
    <div>
      <span>Rejoignez-nous sur les réseaux sociaux :</span>
    </div>
    <div>
      <a href="">
        twitter
      </a>
      <a href="">
        linkedin
      </a>
    </div>
  </section>
  <section class="footer_text">
    <div>
      <h6 >
        Lesupersite
      </h6>
      <p>
        Un site qu'il est chouette.
      </p>
    </div>
    <div>
      <h6>Contact</h6>
      <p>Valence, 26000, FR</p>
      <p>
        <a href="mailto:contact@lesupersite.fr"></a>
          contact@lesupersite.com
        </a>
      </p>
      <p>06 27 87 45 32</p>
    </div>
  </section>
  <div class="mentions">
    © 2023 Tous droits réservés :
    <a href="">lesupersite.com</a>
  </div>
</div>
`;
document.body.appendChild(footer);