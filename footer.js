document.addEventListener("DOMContentLoaded", function () {
  loadContent("footer.html", "footer");
  loadContent("html_pages/contact.html", "contactSection");
});

function loadContent(page, elementId) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}
