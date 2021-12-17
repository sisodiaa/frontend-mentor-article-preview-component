var shareButtons = document.querySelectorAll(".article__button");
var tooltipButton = document.querySelector(".article__footer .article__button");
var articleShare = document.querySelector(".article__share");
var articleFooter = document.querySelector(".article__footer");

var viewPortWidth = () => {
  return window.innerWidth / parseFloat(
    getComputedStyle(
      document.querySelector('html')
    )['font-size']
  )
}

if (viewPortWidth() <= 50.3) {
  shareButtons.forEach((shareButton) => {
    shareButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (articleFooter.classList.contains("active")) {
        articleFooter.classList.remove("active");
        articleShare.classList.add("active");
      } else {
        articleShare.classList.remove("active");
        articleFooter.classList.add("active");
      }
    });
  });
} else {
  tooltipButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    tooltipButton.classList.toggle("tooltip");
  });
}
