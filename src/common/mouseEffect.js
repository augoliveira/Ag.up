const mousecursor = () => {
  const cursorInner = document.querySelector(".cursor-inner"),
    cursorOuter = document.querySelector(".cursor-outer");
  // @ts-ignore
  let n,
    // @ts-ignore
    i = 0,
    o = !1;
  window.onmousemove = function (s) {
    o ||
      // @ts-ignore
      (cursorOuter.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      // @ts-ignore
      (cursorInner.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (n = s.clientY),
      (i = s.clientX);
  };
  if (document.querySelector(".cursor-pointer")) {
    // @ts-ignore
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseenter", function () {
        // @ts-ignore
        cursorInner.classList.add("cursor-hover"),
          // @ts-ignore
          cursorOuter.classList.add("cursor-hover");
      });
    // @ts-ignore
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseleave", function () {
        // @ts-ignore
        cursorInner.classList.remove("cursor-hover"),
          // @ts-ignore
          cursorOuter.classList.remove("cursor-hover");
      }),
      // @ts-ignore
      (cursorInner.style.visibility = "visible"),
      // @ts-ignore
      (cursorOuter.style.visibility = "visible");
  }
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      // @ts-ignore
      cursorInner.classList.add("cursor-hover"),
        // @ts-ignore
        cursorOuter.classList.add("cursor-hover");
    });
  });
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      // @ts-ignore
      cursorInner.classList.remove("cursor-hover"),
        // @ts-ignore
        cursorOuter.classList.remove("cursor-hover");
    });
  }),
    // @ts-ignore
    (cursorInner.style.visibility = "visible"),
    // @ts-ignore
    (cursorOuter.style.visibility = "visible");
};
export default mousecursor;
