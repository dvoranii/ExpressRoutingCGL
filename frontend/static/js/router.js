import Home from "./views/Home/Homepage.js";
import About from "./views/About/about.js";
import Services from "./views/Services/Services.js";
import Transportation from "./views/Services/Transportation/Transportation.js";
import SportingGoods from "./views/Services/SportingGoods/SportingGoods.js";
import Quote from "./views/Quote/Quote.js";
import ContactON from "./views/Contact/Contact-ON/Contact-ON.js";
import ContactQC from "./views/Contact/Contact-QC/Contact-QC.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
  window.loadStylesheetForCurrentRoute();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/services", view: Services },
    { path: "/services/transportation", view: Transportation },
    { path: "/services/sporting-goods", view: SportingGoods },
    { path: "/request-a-quote", view: Quote },
    { path: "/contact-on", view: ContactON },
    { path: "/contact-qc", view: ContactQC },
  ];

  //   Test each route
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
