// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

  // wrapping header and footer around
document.body.innerHTML = headerEl + document.body.innerHTML + footerEl;

  // Other initializations:
  initActiveLinks();

  // your code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <header> element, but I recommend it.
const headerEl = `

<div class="container">
  <div class="left-side">

    <div class="pfp"></div>

    <div class="menu">
      <h1>INDEX</h1>
      <ul class="side-menu">
        <li>
          <a href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="sub-page.html">
            Template
          </a>
        </li>
      </ul>
      <h1>COSPLAY</h1>
      <ul class="side-menu">
        <li>
          <a href="cosplay-photos.html">
            Photos
          </a>
        </li>
        <li>
          <a href="cosplay-bts.html">
            BTS
          </a>
        </li>
        <li>
          <a href="cosplay-yah.html">
            Yah
          </a>
        </li>
      </ul>
      <h1>INTERESTS</h1>
      <ul class="side-menu">
        <li>
          <a href="music.html">
            Music
          </a>
        </li>
        <li>
          <a href="games.html">
            Games
          </a>
        </li>
        <li>
          <a href="autism.html">
            Autism
          </a>
        </li>
      </ul>
      <h1>OTHER</h1>
      <ul class="side-menu">
        <li>
          <a href="videos.html">
            Videos
          </a>
        </li>
        <li>
          <a href="gifs.html">
            Gifs
          </a>
        </li>
      </ul>
    </div>

    <div class="under-menu">
      <a href="www.example.com">
        <img src="/images/site-buttons/hazure03-button-v2.gif">
      </a>
      <p>Link back to me!</p>
    </div>
  </div> 

  <div class="middle-column">

    <div class="header"></div>
    
    <div class="mobile-menu">
    <details>
      <summary>MENU</summary>
      <h1>INDEX</h1>
      <ul class="side-menu">
        <li>
          <a href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="sub-page.html">
            Template
          </a>
        </li>
      </ul>
      <h1>COSPLAY</h1>
      <ul class="side-menu">
        <li>
          <a href="example.com">
            Photos
          </a>
        </li>
        <li>
          <a href="example.com">
            BTS
          </a>
        </li>
        <li>
          <a href="example.com">
            Yah
          </a>
        </li>
      </ul>
      <h1>INTERESTS</h1>
      <ul class="side-menu">
        <li>
          <a href="example.com">
            Music
          </a>
        </li>
        <li>
          <a href="example.com">
            Games
          </a>
        </li>
        <li>
          <a href="example.com">
            Autism
          </a>
        </li>
      </ul>
      <h1>OTHER</h1>
      <ul class="side-menu">
        <li>
          <a href="example.com">
            Videos
          </a>
        </li>
        <li>
          <a href="example.com">
            Gifs
          </a>
        </li>
      </ul>
    </details>
  </div>
    
      
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `

</div>

<div class="right-side">
  <div class="gifs">
    <img src="images/francobabypng.png">
    <img src="images/francobabypng.png">
    <img src="images/francobabypng.png">
  </div>

  <div class="extra-space">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ex a consequat congue.</p>
  </div>
</div>

<div class="footer">
  <p>&copy; Fishcrafts' Corner<br>2026 - present</p>
</div>
`;