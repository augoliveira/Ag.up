import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace.js";
import appData from "../../data/app.json";

const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();

      // @ts-ignore
      if (bodyEl.classList.contains("hideX")) {
        // @ts-ignore
        bodyEl.classList.remove("hideX");
      }
    } else {
      // @ts-ignore
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader"></div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
