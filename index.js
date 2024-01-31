var imgBox = document.querySelector(".img__box");
var imgWrap = document.querySelector(".img__wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

// here we are equating the width of the original img to the width of the imgBox 
originalImg.style.width = imgBox.offsetWidth + "px";

// we need to calculate the left space for the imgBox 
var letfSpace = imgBox.offsetLeft;

imgBox.onmousemove = (e) => {
    var boxWidth = (e.pageX - letfSpace) + "px";
    imgWrap.style.width = boxWidth;

    line.style.left = boxWidth;
}