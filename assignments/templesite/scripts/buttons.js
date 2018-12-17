window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("smallViewBtoTop").style.display = "block";
  } else {
    document.getElementById("smallViewBtoTop").style.display = "none";
  }
  
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}