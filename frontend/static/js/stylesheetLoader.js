function loadStylesheetForCurrentRoute() {
  const currentPath = window.location.pathname;

  let stylesheetPath;
  switch (currentPath) {
    case "/":
      stylesheetPath = "/static/js/views/Home/home.css";
      break;
    case "/about":
      stylesheetPath = "/static/js/views/About/about.css";
      break;
    case "/request-a-quote":
      stylesheetPath = "/static/js/views/Quote/quote.css";
      break;
    case "/services":
      stylesheetPath = "/static/js/views/Services/services.css";
      break;
    case "/services/sporting-goods":
      stylesheetPath =
        "/static/js/views/Services/SportingGoods/sportingGoods.css";
      break;
    case "/services/transportation":
      stylesheetPath =
        "/static/js/views/Services/Transportation/transportation.css";
      break;
    case "/contact-on":
      stylesheetPath = "/static/js/views/Contact/contact.css";
      break;
    case "/contact-qc":
      stylesheetPath = "/static/js/views/Contact/contact.css";
      break;
  }

  // If the stylesheet for the route was determined and hasn't been added to the document yet
  if (
    stylesheetPath &&
    !document.querySelector(`link[href="${stylesheetPath}"]`)
  ) {
    const head = document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = stylesheetPath;
    head.appendChild(link);
  }
}

// Load stylesheet for the current route when the script runs
loadStylesheetForCurrentRoute();
