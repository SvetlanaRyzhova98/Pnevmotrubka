$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  respondTo: "slider",
  prevArrow:
    '<img class="slider-arrows  slider-arrows__left" src="img/icon/arrow-left.png" alt="">',
  nextArrow:
    '<img class="slider-arrows  slider-arrows__right" src="img/icon/arrow-right.png" alt="">',

  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  arrows: false,
  focusOnSelect: true,
  vertical: true,
});
/*----------------tabs-------*/
$(function () {
  var tab = $("#tabs .tabs-items > div");
  tab.hide().filter(":first").show();

  // Клики по вкладкам.
  $("#tabs .tabs-nav a")
    .click(function () {
      tab.hide();
      tab.filter(this.hash).show();
      $("#tabs .tabs-nav a").removeClass("active");
      $(this).addClass("active");
      return false;
    })
    .filter(":first")
    .click();

  // Клики по якорным ссылкам.
  $(".tabs-target").click(function () {
    $("#tabs .tabs-nav a[href=" + $(this).attr("href") + "]").click();
  });

  // Отрытие вкладки из хеша URL
  if (window.location.hash) {
    $("#tabs-nav a[href=" + window.location.hash + "]").click();
    window.scrollTo(0, $("#".window.location.hash).offset().top);
  }
});
//-----------горизонтальная прокрутка таблицы
$(function () {
  jQuery(".scrollbar-inner_tb").scrollbar();
});
