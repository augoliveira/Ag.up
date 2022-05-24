const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  /**
   * @type {{ arrange: (arg0: { filter: any; }) => void; }}
   */
  var iso;
  if (grid.length >= 1) {
    grid.forEach((item) => {
      // @ts-ignore
      iso = new Isotope(item, {
        itemSelector: ".items",
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");
  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      // @ts-ignore
      if (!matchesSelector(event.target, "span")) {
        return;
      }
      // @ts-ignore
      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({ filter: filterValue });
    });
    var buttonGroups = document.querySelectorAll(".filtering");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
    // @ts-ignore
    function radioButtonGroup(buttonGroup) {
      // @ts-ignore
      buttonGroup.addEventListener("click", function (event) {
        // @ts-ignore
        if (!matchesSelector(event.target, "span")) {
          return;
        }
        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

export default initIsotope;
