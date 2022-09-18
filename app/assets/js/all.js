$(document).ready(function () {
  $('.navbar-toggler').click(function () { 
      $('body').toggleClass('navbar-nav_show');
  });

  $('.btn-dark-close').hover(function () { 
    $('.btn-dark-close').toggleClass('animate__heartBeat');    
  });

  $('.btn-chart').click(function () { 
    $(this).toggleClass('open');
    $(this).find('.plus').toggleClass('d-none');
    $(this).find('.minus').toggleClass('d-block');
  });

  $('.accordion-button').click(function () { 
    $(this).parent().parent('.accordion-item').toggleClass('active');
    $(this).parent().parent().siblings().removeClass('active');
  });

});

function getSrc() {
  if ($("#player")[0].src.indexOf("?") > -1) {
      var symbol = $("#player")[0].src;
      symbol = symbol.substring(0, symbol.indexOf("?") + 1);
      return symbol;
  }
  return $("#player")[0].src + "?";
}

function playVideo() {
  $("#player")[0].src = getSrc() + "autoplay=1&mute=1";
  // console.log($("#player")[0].src);
}

function stopVideo() {
  $("#player")[0].src = getSrc() + "autoplay=0";
  // console.log($("#player")[0].src);
}

var topButton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// function addCart() {
//   var temp = document.createElement("div");
//   temp.setAttribute("class", "d-flex mb-3");

//   var A = document.createElement("div");
//   A.setAttribute("class", "d-none d-md-block w-25");
//   temp.appendChild(A);

//   var Img = document.createElement("img");
//   Img.setAttribute("src", "assets/images/cart-1.jpg");
//   A.appendChild(Img);

//   var B = document.createElement("div");
//   B.setAttribute("class", "w-sm-100 w-md-75 bg-cartList-item d-flex flex-column justify-content-between p-4");
//   temp.appendChild(B);

//   var Btn = document.createElement("button");
//   Btn.setAttribute("class", "btn-close");
//   B.appendChild(Btn);

//   var B_1 = document.createElement("div");
//   B.appendChild(B_1);

//   var B_1_1 = document.createElement("h5");
//   B_1_1.setAttribute("class", "fs-5 mb-1");
//   B_1_1.appendChild(document.createTextNode("捍衛戰士：獨行俠"));
//   B_1.appendChild(B_1_1);

//   document.getElementById("cartBody").appendChild(temp);
// }