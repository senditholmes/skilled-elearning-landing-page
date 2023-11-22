const image_urls = {
  desktop: "assets\\image-hero-desktop@2x.png",
  tablet: "assets\\image-hero-tablet@2x.png",
  mobile: "assets\\image-hero-mobile@2x.png",
};

addEventListener("resize", (event) => {
  let windowSize = window.innerWidth;
  let hero_image = this.document.getElementById("hero-image");

  console.log(windowSize);
  if (windowSize >= 913) {
    hero_image.setAttribute("src", image_urls.desktop);
  } else if (windowSize > 375 && windowSize < 913) {
    hero_image.setAttribute("src", image_urls.tablet);
  } else {
    hero_image.setAttribute("src", image_urls.mobile);
  }
});
