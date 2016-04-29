$(document).ready(function(){

function detectMobile() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    console.log("mobile user");
  }
 else {
    $(".container-fluid").css({'max-width': '90%'});
    $(".container").css({'max-width': '850px'});
  }
}

$(".scroll-home").click(function(){
    $('html,body').animate({scrollTop: 0 }, 750);
  });
});
