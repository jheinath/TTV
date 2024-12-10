function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function Footer () {
  with(document) {
    write('<footer class="p-5 bg-dark text-white text-center position-relative">');
    write('<div class="container">');
    write('<p class="lead"><span class="text-warning">Copyright &copy; 2024 TTV Bühlertal e.V.</span></p>');
    write('<a class="my_footer_datenschutz_impressum p-1" href="impressum.html">Impressum</a>');
    write('<a class="my_footer_datenschutz_impressum p-1" href="datenschutz.html">Datenschutz</a>');
    write('<a class="my_footer_datenschutz_impressum p-1" href="verein.html#mitgliedsantrag">Mitgliedsantrag</a>');
    write('<div class="position-absolute bottom-0 start-0 p-5 footer_my_a d-none d-sm-block">');
    write('<a class="footer_my_a" href="#" id="facebook_color">');
    write('<i class="fa fa-facebook my_icons_footer"></i>');
    write('</a>');
    write('<a class="footer_my_a" href="#" id="instagram_color"><i class="fa fa-instagram my_icons_footer"></i></a>');
    write('</div>');
    write('</div>');
    write('<a href="#" class="position-absolute bottom-0 end-0 p-5"><i class="fa-solid fa-arrow-up my_arrow"></i></a>');
    write('</div>');
    write('</footer>');
  }
}

function Header () {
  with(document) {
    write('<header>');
      write('<div id="brand"><a class="text-wrap" href="/">TTV Bühlertal</a></div>');
      write('<nav>');
        write('<ul id="desktop">');
          write('<li><a href="/index.html">Start</a></li>');
          write('<li><a href="/training.html">Training</a></li>');
          write('<li><a href="/verein.html">Verein</a></li>');
          write('<li><a href="/mannschaften.html" >Mannschaften</a></li>');
          write('<li><a href="/vorstand.html">Vorstand</a></li>');
          write('<li id="contact"><a href="/kontakt.html">Kontakt</a></li>');
        write('</ul>');
        write('</nav>');
          write('<div id="hamburger-icon" onclick="toggleMobileMenu(this)">');
            write('<div class="bar1"></div>');
            write('<div class="bar2"></div>');
            write('<div class="bar3"></div>');
            write('<ul class="mobile-menu">');
              write('<li><a href="/index.html">Start</a></li>');
              write('<li><a href="/training.html">Training</a></li>');
              write('<li><a href="/verein.html">Verein</a></li>');
              write('<li><a href="/mannschaften.html" >Mannschaften</a></li>');
              write('<li><a href="/vorstand.html">Vorstand</a></li>');
              write('<li id="contact"><a href="/kontakt.html">Kontakt</a></li>');
            write('</ul>');
          write('</div>');
        write('</header>');
  }
}


var insertFooter = () => {
  const year = new Date().getFullYear();
  var footer = document.getElementById("in_foot");
  footer.innerHTML = `
  <footer class="p-5 bg-dark text-white text-center position-relative">
  <div class="container">
    <p class="lead"><span class="text-warning">Copyright &copy; ${year} TTV Bühlertal e.V.</span></p>
    <a class="my_footer_datenschutz_impressum p-1" href="impressum.html">Impressum</a>
    <a class="my_footer_datenschutz_impressum p-1" href="datenschutz.html">Datenschutz</a>
    <a class="my_footer_datenschutz_impressum p-1" href="verein.html#mitgliedsantrag">Mitgliedsantrag</a>

    <div class="position-absolute bottom-0 start-0 p-5 footer_my_a d-none d-sm-block">
    <a class="footer_my_a" href="#" id="facebook_color">
      <i class="fa fa-facebook my_icons_footer"></i>
    </a>
    <a class="footer_my_a" href="#" id="instagram_color">
      <i class="fa fa-instagram my_icons_footer"></i>
    </a>
    </div>
    <a href="#" class="position-absolute bottom-0 end-0 p-5">
      <i class="fa-solid fa-arrow-up my_arrow"></i>
    </a>
  </div>
</footer>
  `;
}

let yearEl = document.getElementById("year-el")
var inYear = new Date().getFullYear();
yearEl.textContent = "Copyright &copy; TTV Bühlertal e.V."

