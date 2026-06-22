(function () {
  function isIntroPath() {
    var currentPath = document.documentElement.getAttribute("data-current-path");
    var pathname = window.location.pathname.replace(/\/$/, "") || "/";
    return ["/", "/index", "/introduction"].indexOf(currentPath) !== -1 || ["/", "/index", "/introduction"].indexOf(pathname) !== -1;
  }

  function removeIntroHeader() {
    if (!isIntroPath()) return;
    var header = document.querySelector("#content-area > #header");
    if (header) header.remove();
  }

  removeIntroHeader();

  var observer = new MutationObserver(removeIntroHeader);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("popstate", removeIntroHeader);
  window.addEventListener("hashchange", removeIntroHeader);
})();
