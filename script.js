const footer = document.querySelector(".article-card__footer");
const shareBtn = document.querySelector(".article-card__share-button");

shareBtn.addEventListener("click", () => {
  footer.classList.toggle("is-active");
});
