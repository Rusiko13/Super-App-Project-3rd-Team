document.addEventListener("DOMContentLoaded", function () {
  loadContent("footer.html", "footer");
  loadContent("footer.html", "pool_section");
});

function loadContent(page, elementId) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}
