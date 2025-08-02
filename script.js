
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");
  let scrollAmount = 0;
  const scrollStep = 1;
  const delay = 30;
  let interval;

  function highlightCenterImage() {
    const center = carousel.scrollLeft + carousel.offsetWidth / 1.5;
    images.forEach((img) => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const distance = Math.abs(center - imgCenter);
      if (distance < img.offsetWidth / 2 ) {
        img.style.transform = "scale(1.2)";
        img.style.opacity = "1";
        img.style.zIndex = "2";
      } else {
        img.style.transform = "scale(1)";
        img.style.opacity = "0.8";
        img.style.zIndex = "1";
      }
    });
  }

  function autoScroll() {
    scrollAmount = (scrollAmount + scrollStep) % (carousel.scrollWidth - carousel.clientWidth);
    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
    highlightCenterImage();
  }

  function startScroll() {
    interval = setInterval(autoScroll, delay);
  }

  function stopScroll() {
    clearInterval(interval);
  }

  carousel.addEventListener("mouseenter", stopScroll);
  carousel.addEventListener("mouseleave", startScroll);

  highlightCenterImage();
  startScroll();
});
