let rightElements = document.getElementById("right-container");
let leftElements = document.getElementById("left-container");
let allLeftButton = document.getElementById("move-all-left");
let leftButton = document.getElementById("move-left");
let rightButton = document.getElementById("move-right");
let allRightButton = document.getElementById("move-all-right");
allLeftButton.addEventListener("click", moveAllLeft);
allRightButton.addEventListener("click", moveAllRight);
leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);

// let inputSelected = document.querySelectorAll(
//   "input[type='checkbox']:checked"
// );
// console.log(inputSelected);


// inputSelected.addEventListener("change", function (event) {
//   leftButton.classList.replace("initial","disabled");
//   rightButton.style.cssText += disabled;
//   if (event.target.type === "checkbox") {
//     if (event.target.parentNode.parentNode.id == "right-container") {
//       leftButton.style.cssText += initial;
//     } else {
//       rightButton.style.cssText += initial;
//     }
//   }
// });


let inputElements = document.querySelectorAll("input[type='checkbox']");
console.log(inputElements);

// Add a change event listener to each checkbox
inputElements.forEach((checkbox) => {
  checkbox.addEventListener("change", function (event) {
    leftButton.classList.replace("initial", "disabled");
    rightButton.classList.replace("initial", "disabled");

    if (event.target.parentNode.parentNode.id === "right-container") {
      leftButton.classList.replace("disabled", "initial");
    } else {
      rightButton.classList.replace("disabled", "initial");
    }
  });
});

function moveLeft() {
  let selected = rightElements.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  if (selected.length > 0) {
    allRightButton.classList.replace("disabled", "initial");
    leftButton.classList.replace("initial", "disabled");
  }
  for (let itr = 0; itr < selected.length; itr++) {
    selected[itr].checked = false;
    leftElements.append(selected[itr].parentNode);
  }
}

function moveRight() {
  let selected = leftElements.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  if (selected.length > 0) {
    allLeftButton.classList.replace("disabled", "initial");
    rightButton.classList.replace("initial", "disabled");

  }
  for (let itr = 0; itr < selected.length; itr++) {
    selected[itr].checked = false;
    rightElements.append(selected[itr].parentNode);
  }
}

function moveAllLeft() {
  allRightButton.classList.replace("disabled", "initial");
    let boxes = rightElements.querySelectorAll("input");
  for (itr = 0; itr < boxes.length; itr++) {
    boxes[itr].checked = false;
    leftElements.append(boxes[itr].parentNode);
  }
  if(leftButton.classList.contains("initial")) {
    leftButton.classList.replace("initial", "disabled");
  }
  allLeftButton.classList.replace("initial", "disabled");

}
function moveAllRight() {
  console.log("clicked");
  allLeftButton.classList.replace("disabled", "initial");
    
  let boxes = leftElements.querySelectorAll("input");
  for (itr = 0; itr < boxes.length; itr++) {
    boxes[itr].checked = false;
    rightElements.append(boxes[itr].parentNode);
  }
  if(rightButton.classList.contains("initial")) {
    rightButton.classList.replace("initial", "disabled");
  }
  allRightButton.classList.replace("initial", "disabled");

}
