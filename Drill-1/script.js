let data = [
  "Add contact details for further communications.",
  "Add shipping address for successful delivery",
  "Complete Payment to complete the order.",
  "Ready to get delivered!",
  "Order Delivered successfully🎉",
];
let counter = 0;
let numbering = ["zero", "one", "two", "three"];
let previous_btn = document.getElementById("previous");
let next_btn = document.getElementById("next");
previous_btn.addEventListener("click", back);
next_btn.addEventListener("click", move);
console.log(data.length);

let required, required_hr, content;

content = document.querySelector("#content-data");
content.innerHTML = data[counter];

//Function for Previous Button
function back() {
  counter--;
  console.log(counter);
  content.innerHTML = data[counter];
  if (counter == 0) {
    previous_btn.setAttribute("disabled", "");
    required = document.querySelector(`div.${numbering[counter - 1]}`);
  }
  if (counter != data.length - 1) {
    next_btn.removeAttribute("disabled");
    next_btn.innerHTML = "Next";
  }
  if (counter < data.length - 2) {
    required_hr = document.querySelector(`hr.${numbering[counter + 1]}`);
    required = document.querySelector(`div.${numbering[counter + 1]}`);
    required.classList.replace("active", "initial");
    required_hr.classList.replace("divider-finished", "divider");
  }
  required = document.querySelector(`div.${numbering[counter]}`);
  console.log(counter, required, required_hr);
  required.classList.replace("finished", "active");
  required.innerHTML = counter + 1;
}
//Function for Next Button
function move() {
  counter++;
  content.innerHTML = data[counter];
  if (counter != 0) {
    previous_btn.removeAttribute("disabled");
  }
  if (counter == 4) {
    next_btn.setAttribute("disabled", "");
    next_btn.innerHTML = "Finish";
  }

  required = document.querySelector(`div.${numbering[counter - 1]}`);
  required.classList.replace("active", "finished");
  required.innerHTML = "&#x2713;";
  if (counter != 4) {
    required_hr = document.querySelector(`hr.${numbering[counter]}`);
    required_hr.classList.replace("divider", "divider-finished");
    required = document.querySelector(`div.${numbering[counter]}`);
    required.classList.replace("initial", "active");
  }
}
