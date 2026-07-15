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
            <div class="header"></div>
            <div class="menu">
                <h1>Index</h2>
                <ul>
                    <li><a href="francobarbi-home.html">Home</a></li>
                    <li><a href="francobarbi-test.html">Link 1</a></li>
                    <li><a href="francobarbi-test.html">Something else</a></li>
                    <li><a href="francobarbi-test.html">:)</a></li>
                    <div class="dropdown">
                        <li class="dropbtn">topic 1</li>
                        <div class="dropdown-content">
                            <a href="francobarbi-test.html">Link 1</a>
                            <a href="francobarbi-test.html">Link 2</a>
                            <a href="francobarbi-test.html">Link 3</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <li class="dropbtn">topic 2</li>
                        <div class="dropdown-content">
                            <a href="francobarbi-test.html">Link 1</a>
                            <a href="francobarbi-test.html">Link 2</a>
                            <a href="francobarbi-test.html">Link 3</a>
                        </div>
                    </div>
                    <li><a href="francobarbi-test.html">link 5</a></li>

                    <li style="background: linear-gradient(180deg,rgba(40, 44, 46, 1) 10%, rgba(0, 0, 0, 0) 100%); height:30px;border:0px;"></li>
                </ul>
            </div>
            <div class="content">
    
      
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `

            </div>
            <div class="footer">
                <p>Content by Fishcrafts</p>
                <p>Layout / Code by <a href="https://hazure03.neocities.org">hazure03</a></p>
            </div>
        </div>
`;