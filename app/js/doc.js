/*-------border input------*/
$(".input").on("focus", (event) => {
  const group = $(event.target).closest(".group")[0];
  if (group) {
    group.classList.add("active");
  }
});
$(".input").on("blur", (event) => {
  const group = $(event.target).closest(".group")[0];
  if (group) {
    group.classList.remove("active");
  }
});
/*---------button click form----- */

$(".send__button").on("click", function () {
  $(".send__result").toggleClass("visible");
});
