const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    dropdown.classList.toggle("dropdown__options_visible");
  });

  dropdown
    .querySelectorAll(".dropdown__options .dropdown__option")
    .forEach((opt) => {
      opt.addEventListener("click", (e) => {
        dropdown.querySelector(".dropdown__selected").innerHTML = opt.innerHTML;
      });
    });
});

/*slider and pagination start*/
const slider = document.querySelector(".slider");

function setSlide(id) {
  slider.dataset.slideid = id;
  const lineActive = document.querySelector(".line_active");
  lineActive?.classList?.remove("line_active");

  const line = document.querySelectorAll(".pagination-slider .line")[id];
  line?.classList?.add("line_active");
}

function getSlideId() {
  return +slider.dataset.slideid;
}

setInterval(function () {
  const newSlideId = (getSlideId() + 1) % 5;
  setSlide(newSlideId);
}, 3000);

function initPagination() {
  const lines = document.querySelectorAll(".line");

  Array.from(lines).forEach((line) => {
    line.addEventListener("click", (event) => {
      const lineId = +event.currentTarget.dataset.lineid;
      setSlide(lineId);
    });
  });
}

initPagination();
/*slider and pagination end*/

$(function () {
  $(".slider-app").slick({
    infinite: true,
    focusOnSelect: true,
    variableWidth: true,
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows  slider-arrows__left" src="img/arrow-left.png" alt="">',
    nextArrow:
      '<img class="slider-arrows  slider-arrows__right" src="img/arrow-right.png" alt="">',
  });
  $(".slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow:
      '<img class="slider-arrows-slick  slider-arrows__left-slick" src="img/arrow-left.png" alt="">',
    prevArrow:
      '<img class="slider-arrows-slick  slider-arrows__right-slick" src="img/arrow-right.png" alt="">',
  });
  // $(".slick").slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   prevArrow:
  //     '<img class="slider-arrows  slider-arrows__left" src="img/arrow-left.png" alt="">',
  //   nextArrow:
  //     '<img class="slider-arrows  slider-arrows__right" src="img/arrow-right.png" alt="">',
  // });
});
