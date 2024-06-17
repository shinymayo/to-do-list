// some funcs
import _ from "lodash";
// some style
import './style.css';
// image
import Icon from './icon.png';
// data
import Data from "./data.xml";
import Notes from "./data.csv";

// function component() {
//   const element = document.createElement("div");

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("hello");

//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   console.log(Data);
//   console.log(Notes);

//   return element;
// }

// document.body.appendChild(component());

function createPageItems() {
    // const bodyHTML = document.getElementsByTagName("body");
    // main div
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("page");
    document.body.appendChild(mainDiv);

    // top div
    const topDiv = document.createElement("div");
    topDiv.classList.add("top");
    topDiv.textContent = "To Do List";
    mainDiv.appendChild(topDiv);

    // side div
    const sideDiv = document.createElement("div");
    sideDiv.classList.add("side");
    sideDiv.textContent = "Projects";
    mainDiv.appendChild(sideDiv);

    // main area div
    const mainAreaDiv = document.createElement("div");
    mainAreaDiv.classList.add("main-area");
    mainAreaDiv.textContent = ("tasks will be displayed here");
    mainDiv.appendChild(mainAreaDiv);
}

document.body.appendChild(createPageItems());