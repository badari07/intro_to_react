import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const Mytitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyfirstComponent = function() {
  return ce(
    "div",
    null,
    ce(Mytitle, { title: "the", color: "yellowGreen" }),
    ce(Mytitle, { title: "best", color: "GreenYellow" }),
    ce(Mytitle, { title: "start", color: "Lime" })
  );
};

render(ce(MyfirstComponent), document.getElementById("app"));
