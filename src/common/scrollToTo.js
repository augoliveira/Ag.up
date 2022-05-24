const scrollToTop = () => {
  let progressPath = document.querySelector(".progress-wrap path");
  // @ts-ignore
  let pathLength = progressPath.getTotalLength();
  // @ts-ignore
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  // @ts-ignore
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  // @ts-ignore
  progressPath.style.strokeDashoffset = pathLength;
  // @ts-ignore
  progressPath.getBoundingClientRect();
  // @ts-ignore
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  const updateProgress = function () {
    let scroll = window.pageYOffset;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - (scroll * pathLength) / height;
    // @ts-ignore
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress);
  let progressWrap = document.querySelector(".progress-wrap");
  let offset = 150;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > offset) {
      // @ts-ignore
      progressWrap.classList.add("active-progress");
    } else {
      // @ts-ignore
      document
        .querySelector(".progress-wrap")
        .classList.remove("active-progress");
    }
  });
  // @ts-ignore
  progressWrap.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });
};

export default scrollToTop;
