document.addEventListener("DOMContentLoaded", function () {
  const poolSection = document.querySelector(".pool-section");
  const cards = document.querySelectorAll(".product-card");
  let currentIndex = 1; // Start with the center card

  const updateCarousel = () => {
    poolSection.className = "pool-section center-" + currentIndex;
  };

  // Initialize carousel position
  updateCarousel();

  // Variables to track touch scrolling
  let isDown = false;
  let startX;
  let scrollLeft;

  // Event listeners for touch scrolling
  poolSection.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX;
    scrollLeft = poolSection.scrollLeft;
  });

  poolSection.addEventListener("touchend", (e) => {
    isDown = false;
    const endX = e.changedTouches[0].pageX;
    const diff = startX - endX;

    if (diff > 50) {
      // Swipe left
      currentIndex = (currentIndex + 1) % cards.length;
    } else if (diff < -50) {
      // Swipe right
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }

    updateCarousel();
  });

  poolSection.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
  });
});
