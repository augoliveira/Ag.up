import { delay, animateEl } from "./customFunctions";

const loadingPace = () => {
  // @ts-ignore
  Pace.on("start", function () {
    // When Pace Start
    // @ts-ignore
    document.querySelector("#preloader").classList.remove("isdone");
  });
  // @ts-ignore
  Pace.on("done", function () {
    // When Pace End
    if (document.querySelector(".hamenu")) {
      delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
      // @ts-ignore
      document.querySelector(".topnav .menu-icon").classList.remove("open");
    }
    // @ts-ignore
    document.querySelector("#preloader").classList.add("isdone");
  });

  // @ts-ignore
  if (document.querySelector("body").classList.contains("pace-done")) {
    // @ts-ignore
    document.querySelector("#preloader").classList.add("isdone");
  }

  document.addEventListener("load", () => {
    // @ts-ignore
    document.querySelector("#preloader").classList.add("isdone");
  });
};

export default loadingPace;
