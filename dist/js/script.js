let responsive_btn = document.querySelector(".responsive_btn");
let responsive_items = document.querySelector(".responsive_items");

responsive_btn.addEventListener("click", function () {
  responsive_items.classList.toggle("hidden");
});

// STICKY NAVBAR START////////////
let navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scroll_value = Math.floor(window.scrollY);
  if (scroll_value > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
// STICKY NAVBAR END//////////////

// SLIDER JS START
$(document).ready(function () {
  $(".my_slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    
  });
});
// SLIDER JS END
