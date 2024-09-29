document.addEventListener("DOMContentLoaded", () => {
    let insideOfСup = document.getElementById("Layer_2");
    insideOfCup.addEventListener("click", () => {
      document.getElementById("textbox").innerText = "You have clicked on the inside of the donut!";
    });
  });