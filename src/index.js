module.exports = () => {
  // Create an element to append to the document
  const cplElement = document.createElement("div");
  const head = document.head;
  const body = document.body;

  // Set the element's style with JS so we don't need to include a stylesheet
  // Let's make a style object to keeps styling managable
  const cplBoxStyle = {
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
    top: "-100px",
    left: "-100px",
    opacity: 0,
    willChange: "top, left, opacity"
  };

  // Assign the style object
  const setStylesOnElement = function(styles, element) {
    Object.assign(cplElement.style, cplBoxStyle);
  };
  setStylesOnElement();

  // Not using this anymore, but keeping it around as a reminder
  // cplElement.classList.add("cpl__box");

  // We want to inject this style into the head so we can style any element
  // that has it's text selected
  const styleSelection = `
    ::selection {
      background-color: #0f0;
      color: black;
    }
  `;

  // Create a style element
  const styleElem = document.createElement("style");
  // Put the style into the a textNode
  const styleNode = document.createTextNode(styleSelection);
  // Append that textNode to the styleElement
  styleElem.appendChild(styleNode);
  // Append the styleElement to the head tag

  // Im not sure when there wouldn't be a head tag
  // but I am getting occasional null errors on sites with modal windows
  if (!head) {
    return;
  } else {
    head.appendChild(styleElem);
  }

  // Setting content, but this isn't necessary
  cplElement.textContent = "CPL";
  // Append element to body

  // Im not sure when there wouldn't be a body tag
  // but I am getting occasional null errors on sites with modal windows
  // if (!body) {
  //   return;
  // } else {
  body.appendChild(cplElement);
  // }

  // Set up a listener to listen for the "selectionchange" event
  // this fires when you used the mouse/trackpad to select text in the webpage
  // And let's debouce this event because we don't want this to fire until
  //    the user has finished selecting text
  document.addEventListener(
    "selectionchange",
    debounce(() => {
      let selected = window.getSelection();
      let selectedString = selected.toString();
      let selectedLength = selectedString.length;
      // console.log(selected.anchorNode);
      // console.log(selected.anchorNode.parentElement);
      // let selectedParentElement = selected.anchorNode.parentElement;
      if (selected.anchorNode === null) {
        cplPositionReset(cplElement);
      } else {
        var { xPosition, yPosition } = getPosition(
          selected.anchorNode.parentElement
        );
      }

      if (selectedLength < 1) {
        cplPositionReset(cplElement);
      }

      //selectedElement.innerHTML = cpl;
      cplElement.textContent = `CPL: ${selectedLength}`;
      cplElement.style.top = yPosition - cplElement.offsetHeight + "px";
      cplElement.style.left = xPosition + "px";
      cplElement.style.opacity = 1;

      // console.log(selected);
      // console.log(x, y);
    })
  );

  function cplPositionReset(el) {
    el.style.top = "-100px";
    el.style.left = "-100px";
    el.style.opacity = 0;
    return;
  }

  // Lets debounce the MouseSelect on every character selected
  // No need to display a number until the user has stopped selecting characters
  function debounce(fn, time = 1000) {
    let timeout;

    return function() {
      let functionCall = () => fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  }

  // We need a function to find the position of the selected element
  // The issue is that the selected elements position is effected by
  // the border, margin and padding of all the other elements that it
  // might be nested inside of

  function getPosition(element) {
    // Create some variables that will be mutated (reassigned)

    if (!element) {
      return;
    } else {
      let xPosition = 0;
      let yPosition = 0;

      // Now we need to walk up the DOM and sum all the spacing
      // responsible for effecting the positioning of our selected element

      // while (element.tagName != "BODY") {

      while (element) {
        xPosition += element.offsetLeft + element.clientLeft;
        yPosition += element.offsetTop + element.clientTop;

        //console.log(element.tagName);
        element = element.offsetParent;
        //console.log(element.tagName);
      }

      return { xPosition, yPosition };
    }
  }

  // <p class="cpl__box">CPL = ${selectedLength || ''}</p>

  // function cpl(e, min, mid, max) {
  //   console.log(e.target.textContent.length);
  // }

  // document.addEventListener('click', cpl)
};
