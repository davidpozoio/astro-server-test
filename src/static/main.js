const anchors = Array.from(document.getElementsByTagName("a") || []);
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    fetch(e.target.href, { method: "GET" })
      .then((page) => {
        return page.text();
      })
      .then((page) => {
        document.open();
        document.write(page);
        document.close();
      });
  });
});
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
