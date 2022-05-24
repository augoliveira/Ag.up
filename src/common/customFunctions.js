var opacity = 0;
var intervalID = 0;
// @ts-ignore
function show(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 1;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
/**
 * @param {Element} el
 */
function hide(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
  if (opacity > 0) {
    opacity = 0;
    // @ts-ignore
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

// @ts-ignore
export const delay = (time, callback) => {
  setTimeout(function () {
    callback;
  }, time);
};

// @ts-ignore
export const fadeIn = (el, time) => {
  // @ts-ignore
  setInterval(show(el), time);
};
// @ts-ignore
export const fadeOut = (el, time) => {
  // @ts-ignore
  setInterval(hide(el), time);
};

// @ts-ignore
export const getSiblings = (e) => {
  // @ts-ignore
  let siblings = [];
  if (!e.parentNode) {
    // @ts-ignore
    return siblings;
  }
  let sibling = e.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

// @ts-ignore
export const animateEl = (el, to) => {
  function draw() {
    el.style.left = to;
  }
  draw();
};
