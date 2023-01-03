import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1 for parcel"
);

console.log(heading);

console.log("HWHhcjbdkjgwg");

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world",
  },
  [heading, heading2]
);
//jsx ===>>>
const heading3 = (
  <h2 id="title" key="3">
    Namste React
  </h2>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(heading3);
