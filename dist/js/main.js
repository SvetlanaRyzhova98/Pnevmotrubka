const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const phone = document.querySelector(".phone");
  const phoneFooter = document.querySelector(".phone-footer");
  dropdown.addEventListener("click", (e) => {
    dropdown.classList.toggle("dropdown__options_visible");
  });

  dropdown
    .querySelectorAll(".dropdown__options .dropdown__option")
    .forEach((opt) => {
      opt.addEventListener("click", (e) => {
        dropdown.querySelector(".dropdown__selected").innerHTML = opt.innerHTML;
        phone.innerHTML = e.currentTarget.dataset.phone;
        phoneFooter.innerHTML = e.currentTarget.dataset.phone;
      });
    });
});

/*обработка клика бургер меню*/

$(".menu-burger").on("click", function () {
  $(".menu-burger").toggleClass("open-menu");
  $(".menu-mobile").toggleClass("open-menu");
});
/*--------------*/

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
}, 6000);

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
    centerMode: true,
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows  slider-arrows__left" src="img/icon/arrow-left.png" alt="">',
    nextArrow:
      '<img class="slider-arrows  slider-arrows__right" src="img/icon/arrow-right.png" alt="">',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  });
  $(".slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,

    nextArrow:
      '<img class="slider-arrows-slick  slider-arrows__left-slick" src="img/icon/arrow-left.png" alt="">',
    prevArrow:
      '<img class="slider-arrows-slick  slider-arrows__right-slick" src="img/icon/arrow-right.png" alt="">',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-mobile").slick({
    prevArrow:
      '<img class="slider-arrows  slider-arrows__right" src="img/icon/arrow-right.png" alt="">',

    nextArrow:
      '<img class="slider-arrows  slider-arrows__left" src="img/icon/arrow-left.png" alt="">',

    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    variableWidth: true,
    centerMode: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 660,
        settings: "unslick",
      },
    ],
  });
  $(".popular__cards").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    variableWidth: true,
    nextArrow:
      '<img class="slider-arrows-slick  slider-arrows__left-slick" src="img/icon/arrow-left.png" alt="">',
    prevArrow:
      '<img class="slider-arrows-slick  slider-arrows__right-slick" src="img/icon/arrow-right.png" alt="">',
  });
});
/*---------------------search--start------------------------*/
$(function () {
  $(".search-btn__fake-submit").on("click", function (event) {
    event.preventDefault();
    $(".search-btn").addClass("_search-focus");
    $(".search-close").addClass("search-close_visible");
  });
  $(document).on("click", function (event) {
    let searchBlock = ".search-btn";
    let searchClose = ".search-close";
    if ($(event.target).closest(searchBlock).length) return;
    $(searchBlock).removeClass("_search-focus");
    $(searchClose).removeClass("search-close_visible");
    event.stopPropagation();
  });
  $(".search-close").on("click", function (event) {
    let searchBlock = ".search-btn";
    let searchClose = ".search-close";
    $(searchBlock).removeClass("_search-focus");
    $(searchClose).removeClass("search-close_visible");
    event.stopPropagation();
  });
});
/*------------------scroll top----------*/
$(".footer-mobile__link-item_up").on("click", function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".header").offset().top,
    },
    2000
  );
});
