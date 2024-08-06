document.addEventListener("DOMContentLoaded", function () {
  const poolSection = document.querySelector(".pool-section");
  const cards = document.querySelectorAll(".product-card");
  let currentIndex = 1; // Start with the center card

  const updateCarousel = () => {
    poolSection.className = "pool-section center-" + currentIndex;
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    // Remove event listeners if outside the specified width range
    if (screenWidth < 350 || screenWidth > 750) {
      poolSection.removeEventListener("touchstart", onTouchStart);
      poolSection.removeEventListener("touchend", onTouchEnd);
      poolSection.removeEventListener("touchmove", onTouchMove);
      return;
    }

    // Add event listeners if within the specified width range
    poolSection.addEventListener("touchstart", onTouchStart);
    poolSection.addEventListener("touchend", onTouchEnd);
    poolSection.addEventListener("touchmove", onTouchMove);
  };

  const onTouchStart = (e) => {
    isDown = true;
    startX = e.touches[0].pageX;
    scrollLeft = poolSection.scrollLeft;
  };

  const onTouchEnd = (e) => {
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
  };

  const onTouchMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
  };

  // Initialize carousel position
  updateCarousel();

  // Check screen size on load and add event listeners if within range
  handleResize();

  // Re-check screen size on window resize
  window.addEventListener("resize", handleResize);
});
