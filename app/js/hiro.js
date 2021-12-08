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
