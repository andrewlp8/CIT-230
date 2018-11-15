var sliderImages = [
   "images/img1.jpg",
   "images/img2.jpg",
   "images/img3.jpg",
   "images/img4.jpg",
   "images/img5.jpg",
   "images/img6.jpg",
   "images/img7.jpg"
];
var num = 0;

function next() {
   var slider = document.getElementById("slider");
   num++;
   if (num >= sliderImages.length) {
      num=0;
   }
   slider.src = sliderImages[num];
}

function prev() {
   var slider = document.getElementById("slider");
   num--;
   if (num < 0) {
      num = sliderImages.length - 1;
   }
   slider.src = sliderImages[num];
}
