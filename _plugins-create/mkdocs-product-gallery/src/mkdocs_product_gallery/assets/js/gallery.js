
document.querySelectorAll(".product-gallery").forEach((gallery) => {
  const stage = gallery.querySelector(".product-gallery__stage img");
  const caption = gallery.querySelector(
    ".product-gallery__stage .gallery-caption"
  );
  const buttons = gallery.querySelectorAll(
    ".product-gallery__thumbs > button.product-gallery__thumb"
  );

  console.log("Gallery initialized:", {
    stageFound: !!stage,
    captionFound: !!caption,
    buttonsFound: buttons.length
  });

  if (!stage || !caption || buttons.length === 0) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const thumb = button.querySelector("img");
      if (!thumb) return;

      console.log("Thumbnail clicked:", thumb.alt, thumb.title);

      stage.src = thumb.src;
      stage.alt = thumb.alt;
      stage.title = thumb.title;

      caption.textContent = thumb.title || thumb.alt;

      buttons.forEach((item) => {
        item.setAttribute(
          "aria-pressed",
          String(item === button)
        );
      });
    });
  });
});
