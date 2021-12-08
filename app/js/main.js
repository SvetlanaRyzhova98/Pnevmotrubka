const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const phone = document.querySelector(".phone");
  const phoneFooter = document.querySelector(".phone-footer");
  const phoneFooterMob = document.querySelector(".phone-footer_mobile");
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
        phoneFooterMob.innerHTML = e.currentTarget.dataset.phone;
      });
    });
});

/*--------открытие каталога в мобил версии------*/
$(".nav-link_click").on("click", function () {
  $(".hover-catalog_mobile").toggleClass("open-catalog");
});
/*обработка клика бургер меню*/
$(".menu-burger").on("click", function () {
  $(".menu-burger").toggleClass("open-menu");
  $(".menu-mobile").toggleClass("open-menu");
});
/*открытие полной таблицы*/
$(".show-more").on("click", function () {
  $(".tr-invisible").toggleClass("visible");
  $(".show-more").toggleClass("active");
});

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
$(".footer-mobile__link_up").on("click", function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".header").offset().top,
    },
    2000
  );
});
/*----------filters-------------*/
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 1 / 8,
    max: 2,
    values: [1 / 4, 1],
    step: 1 / 8,
    slide: function (event, ui) {
      $("#range-thread-end").val(ui.values[1]);
      $("#range-thread-start").val(ui.values[0]);
    },
  });
  $("#range-thread-end").val($("#slider-range").slider("values", 1));
  $("#range-thread-start").val($("#slider-range").slider("values", 0));
});

$(function () {
  $("#slider-range-diam").slider({
    range: true,
    min: 1,
    max: 20,
    values: [2, 11],
    step: 1,
    slide: function (event, ui) {
      $("#range-diam-end").val(ui.values[1]);
      $("#range-diam-start").val(ui.values[0]);
    },
  });
  $("#range-diam-end").val($("#slider-range-diam").slider("values", 1));
  $("#range-diam-start").val($("#slider-range-diam").slider("values", 0));
});

$(function () {
  $("#slider-range-bar").slider({
    range: true,
    min: 10,
    max: 250,
    values: [20, 170],
    step: 1,
    slide: function (event, ui) {
      $("#range-bar-end").val(ui.values[1]);
      $("#range-bar-start").val(ui.values[0]);
    },
  });
  $("#range-bar-end").val($("#slider-range-bar").slider("values", 1));
  $("#range-bar-start").val($("#slider-range-bar").slider("values", 0));
});
