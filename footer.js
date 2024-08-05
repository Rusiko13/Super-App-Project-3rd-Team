document.addEventListener("DOMContentLoaded", function () {
  // loadContent("pool.html", "pool_section");
  // loadContent1("footer.html", "footer");
  loadContent2("popularbrends.html", "popularbrend");
});

function loadContent1(page, elementId) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

function loadContent(page, elementId) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

function loadContent2(page, elementId) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}
