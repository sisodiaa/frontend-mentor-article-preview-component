var shareButtons = document.querySelectorAll(".article__button");
var articleShare = document.querySelector(".article__share");
var articleFooter = document.querySelector(".article__footer");

var viewPortWidth = () => {
  return window.innerWidth / parseFloat(
    getComputedStyle(
      document.querySelector('html')
    )['font-size']
  )
}

shareButtons.forEach((shareButton) => {
  shareButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Sharing...');

    if (viewPortWidth() <= 50.3) {
      if (articleFooter.classList.contains("active")) {
        console.log("In footer");
        articleFooter.classList.remove("active");
        articleShare.classList.add("active");
      } else {
        console.log("In Share");
        articleShare.classList.remove("active");
        articleFooter.classList.add("active");
      }
    }
  });
});
