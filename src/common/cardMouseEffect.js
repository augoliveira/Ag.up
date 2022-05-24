import getSiblings from "./getSiblings";

const cardMouseEffect = (/** @type {NodeListOf<Element>} */ featureEl) => {
  var featuresitems = featureEl;
  if (featuresitems) {
    featuresitems.forEach((item) => {
      // @ts-ignore
      item.onmouseover = function (event) {
        item.classList.add("active");
        const siblings = getSiblings(item);
          // @ts-ignore
          const siblingEl = siblings.map((e) => e.classList.remove("active"));
      };
    });
  }
};

export default cardMouseEffect;
