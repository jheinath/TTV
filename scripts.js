var setSidebarMode = () => {
  event.stopPropagation();
  var menu = document.getElementById("main-menu-content");
  if (menu.className === "main-menu-content") {
    document.getElementById("main-menu-content").style.width = "80%";
  } else {
    closeNav();
  }
  switchMenuClass();
};

var onClickContentAndMenuOpened = () => {
  var sidebarMenu = document.getElementById("main-menu-content");
  if (sidebarMenu.className == "responsive-main-menu-content") {
    closeNavOnResize();
    switchMenuClass();
  }
};

var closeNav = () => {
  document.getElementById("main-menu-content").style.width = "0px";
};

var switchMenuClass = () => {
  var x = document.getElementById("main-menu-content");
  if (x.className === "main-menu-content") {
    x.className = "responsive-main-menu-content";
  } else {
    x.className = "main-menu-content";
  }
};

window.onresize = () => {
  if (
    window.innerWidth >= 1550 &&
    document.getElementById("main-menu-content").className ===
      "responsive-main-menu-content"
  ) {
    switchMenuClass();
    closeNavOnResize();
  }
};

var closeNavOnResize = () => {
  document.getElementById("main-menu-content").style.width = "inherit";
  document.getElementById("main").style.marginLeft = "0px";
};

var onClickMenuContent = () => {
  event.stopPropagation();
};

var setActiveLink = pathName => {
  switch (pathName) {
    case "/index.html":
      setElementClassNameToActiveLink("index");
      break;
    case "/verein.html":
    case "/vorstand.html":
    case "/training.html":
    case "/sportstaette.html":
    case "/mitgliedsantrag.html":
    case "/ehrenmitglieder.html":
      setElementClassNameToActiveLink("verein");
      break;
    case "/termine.html":
      setElementClassNameToActiveLink("termine");
      break;
    case "/mannschaften.html":
      setElementClassNameToActiveLink("mannschaften");
      break;
    case "/links.html":
      setElementClassNameToActiveLink("links");
      break;
    case "/sponsoren.html":
      setElementClassNameToActiveLink("sponsoren");
      break;
    case "/kontakt.html":
      setElementClassNameToActiveLink("kontakt");
      break;
    case "/datenschutz.html":
      setElementClassNameToActiveLink("datenschutz");
      break;
    case "/impressum.html":
      setElementClassNameToActiveLink("impressum");
      break;
    default:
      break;
  }
};

var navigateToIndex = () => {
  window.location.href = "index.html";
};

var setElementClassNameToActiveLink = elementId => {
  document.getElementById(elementId).className = "active-link";
};

var insertMenu = () => {
  document.getElementById("main-menu").innerHTML = `
  <ul class="icon-list">
  <li>
    <a href="javascript:void(0);" class="icon" onclick="setSidebarMode()"
      >&#9776;</a
    >
  </li>
  </ul>
  <ul
    class="main-menu-content"
    id="main-menu-content"
    onclick="onClickMenuContent()"
  >
    <li class="sub-menu-parent" tab-index="0">
      <a href="index.html" id="index">Startseite</a>
    <li class="sub-menu-parent" tab-index="1">
      <a href="https://www.facebook.com/TTVBuehlertal/" target="_blank id="index">Aktuelles</a>
    <li class="sub-menu-parent" tab-index="2">
      <a href="verein.html" id="verein">Verein</a>
      <ul class="sub-menu">
        <li><a href="vorstand.html">Vorstand</a></li>
        <li><a href="ehrenmitglieder.html">Ehrenmitglieder</a></li>
        <li><a href="training.html">Training</a></li>
        <li><a href="sportstaette.html">Sportstätte</a></li>
        <li><a href="mitgliedsantrag.html">Mitgliedsantrag</a></li>
      </ul>
    <li class="sub-menu-parent" tab-index="3">
      <a href="termine.html" id="termine">Termine und Fahrerliste</a>
    <li class="sub-menu-parent" tab-index="4">
      <a href="mannschaften.html" id="mannschaften">Mannschaften</a>
      <ul class="sub-menu">
        <li><a href="mannschaften.html#herren1">Herren 1</a></li>
        <li><a href="mannschaften.html#herren2">Herren 2</a></li>
        <li><a href="mannschaften.html#herren3">Herren 3</a></li>
        <li><a href="mannschaften.html#herren4">Herren 4</a></li>
        <li><a href="mannschaften.html#jugendU18-1">Jugend U18 1</a></li>
        <li><a href="mannschaften.html#jugendU18-2">Jugend U18 2</a></li>
        <li><a href="mannschaften.html#jugendU15">Jugend U15</a></li>
        <li><a href="mannschaften.html#jugendU13">Jugend U13</a></li>
      </ul>
    <li class="sub-menu-parent" tab-index="5">
      <a href="links.html" id="links">Links</a>
    <li class="sub-menu-parent" tab-index="6">
      <a href="sponsoren.html" id="sponsoren">Sponsoren</a>
    <li class="sub-menu-parent" tab-index="7">
      <a href="kontakt.html" id="kontakt">Kontakt</a>
    <li class="sub-menu-parent" tab-index="8">
      <a href="datenschutz.html" id="datenschutz">Datenschutz</a>
    <li class="sub-menu-parent" tab-index="9">
      <a href="impressum.html" id="impressum">Impressum</a>
</ul>`;
  setActiveLink(window.location.pathname);
};

var insertFooter = () => {
  var footer = document.getElementById("footer");
  footer.innerHTML = `
  <ul>
    <li><a href="impressum.html">® 2019 Tischtennisverein Bühlertal</a></li>
    <li><a href="https://www.facebook.com/TTVBuehlertal/" target="_blank">Facebook</a></li>
    <li><a href="impressum.html">Impressum</a></li>
    <li><a href="datenschutz.html">Datenschutz</a></li>
  </ul>
  `;
};
