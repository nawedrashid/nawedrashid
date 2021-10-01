var dots1 = document.querySelector("#dots1");
var moreText1 = document.querySelector("#more1");
var btnText1 = document.querySelector(".btn1");
var dots2 = document.querySelector("#dots2");
var moreText2 = document.querySelector("#more2");
var btnText2 = document.querySelector(".btn2");

btnText1.addEventListener("click", function clickHandler1(){
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read More"; 
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less"; 
      moreText1.style.display = "inline";
    }
  });
  btnText2.addEventListener("click", function clickHandler2(){
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Read More"; 
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Read less"; 
      moreText2.style.display = "inline";
    }
  });