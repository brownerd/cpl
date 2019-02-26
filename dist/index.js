module.exports = () => {
  const t = {
    backgroundColor: "black",
    border: "none",
    color: "#0f0",
    fontFamily: "Trebuchet MS",
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
    padding: "10px 20px",
    position: "absolute",
    transition: "all .05s ease-in",
    top: 0,
    left: 0,
    opacity: 0,
    willChange: "top, left, opacity"
  };
  !(function(e, o) {
    Object.assign(n.style, t);
  })();
  const e = document.createElement("style"),
    o = document.createTextNode(
      "\n    ::selection {\n      background-color: #0f0;\n      color: black;\n    }\n  "
    );
  e.appendChild(o), document.head.appendChild(e);
  const n = document.createElement("div");
  (n.textContent = "CPL"),
    document.body.appendChild(n),
    document.addEventListener(
      "selectionchange",
      (function(t, e = 1e3) {
        let o;
        return function() {
          clearTimeout(o), (o = setTimeout(() => t.apply(this, arguments), e));
        };
      })(() => {
        let t = window.getSelection(),
          e = t.toString().length,
          { xPosition: o, yPosition: i } = (function(t) {
            let e = 0,
              o = 0;
            for (; "BODY" != t.tagName; )
              (e += t.offsetLeft + t.clientLeft),
                (o += t.offsetTop + t.clientTop),
                (t = t.offsetParent);
            return { xPosition: e, yPosition: o };
          })(t.anchorNode.parentElement);
        if (e < 1)
          return (
            (n.style.top = 0), (n.style.left = 0), void (n.style.opacity = 0)
          );
        (n.textContent = `CPL: ${e}`),
          (n.style.top = i - n.offsetHeight + "px"),
          (n.style.left = o + "px"),
          (n.style.opacity = 1);
      })
    );
};
