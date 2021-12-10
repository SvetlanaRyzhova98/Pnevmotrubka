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
/**------------скролл в аккордионе------*/
$(function () {
  jQuery(".scrollbar-inner").scrollbar();
});
