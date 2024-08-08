document.addEventListener("DOMContentLoaded", function () {
  const poolSection = document.querySelector(".pool-section");
  const cards = document.querySelectorAll(".product-card-pool");
  let currentIndex = 1; 
  const updateCarousel = () => {
    poolSection.className = "pool-section center-" + currentIndex;
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;

   
    if (screenWidth < 350 || screenWidth > 750) {
      poolSection.removeEventListener("touchstart", onTouchStart);
      poolSection.removeEventListener("touchend", onTouchEnd);
      poolSection.removeEventListener("touchmove", onTouchMove);
      return;
    }

  
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
      
      currentIndex = (currentIndex + 1) % cards.length;
    } else if (diff < -50) {
      
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }

    updateCarousel();
  };

  const onTouchMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
  };

 
  updateCarousel();

 
  handleResize();

 
  window.addEventListener("resize", handleResize);
});
