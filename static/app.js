window.addEventListener("load", function() {
  function removeClass(className) {
    const els =
      document.querySelectorAll && document.querySelectorAll(`.${className}`);

    for (let i = 0; els && i < els.length; i++) {
      const el = els[i];
      let classNames = el.className.split(" ");
      classNames = classNames.filter(function(name) {
        return name !== className;
      });
      el.className = classNames.join(" ");
    }
  }

  function addClass(id, className) {
    const el = document.getElementById(id);
    if (!el) return;
    const classNames = el.className.split(" ");
    classNames.push(className);
    el.className = classNames.join(" ");
  }

  function addHighlight(className) {
    const hash = window.location.hash.substr(1);
    addClass(`release-${hash}`, className);
  }

  window.addEventListener("hashchange", function() {
    removeClass("highlight");
    addHighlight("highlight");
  });

  addHighlight("highlight");

  document.addEventListener("click", function(e) {
    const target =
      e.target.id ||
      (e.target.parentNode && e.target.parentNode.id) ||
      e.target.tagName;
    if (target && target.match(/^release-/))
      window.location.hash = target.substr(8);
    if (target === "HTML") window.location.hash = "";
  });
});
