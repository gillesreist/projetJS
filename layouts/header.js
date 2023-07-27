const header = document.createElement('header');
header.innerHTML = `
        <div class="header_container">
                <div class="header_left_block">
                </div>
                <div class="site_name_container">
                        <p>LESUPERSITE</p>
                </div>
                <div id="burger_menu">
                        <span></span>
                        <div id="menu">
                                <menu>
                                        <li><a href="index.html">accueil</a></li>
                                        <li><a href="galery.html">galerie</a></li>
                                        <li><a href="games.html">jeux</a></li>
                                </menu>
                        </div>
                        
                </div>
                
        </div>
`;
document.body.prepend(header);



