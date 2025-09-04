// var images=[
//     "https://m.media-amazon.com/images/I/71jYpnMHH3L.jpg",
//     "https://png.pngtree.com/thumb_back/fh260/background/20240916/pngtree-aesthetic-flower-backgrounds-in-pink-and-white-hues-featuring-a-variety-image_16216307.jpg",
//     "https://img.freepik.com/premium-photo/colorful-assortment-sweets-candies-pink-background_777078-111104.jpg",
//     "https://thumbs.dreamstime.com/b/exploring-unique-patterns-found-large-pile-colorful-sea-shells-shoreline-stunning-photograph-captures-diverse-367478692.jpg",
//     "https://t3.ftcdn.net/jpg/14/55/10/58/360_F_1455105842_Mwb0pYYlm9KFkciHhWsguBVEFq5PlWAk.jpg",
//     "https://i.pinimg.com/736x/4c/7a/b5/4c7ab51b01573d4addcc07c7b2ac9a67.jpg"
// ]

var images = ["./assets/beads.jpg" , "./assets/seaform.jpg" , "./assets/candies.jpg" , "./assets/flowers.jpg" ,"./assets/pearls.jpg" ,"./assets/seashell2.jpg"]
var slideImg = document.getElementById("slider-img");
var indicator = document.getElementsByClassName("indicator");
// console.log(indicator)
var imgIndex = 0;

function right() {
   if(imgIndex === images.length-1) {
      imgIndex = 0;
   }else{
      imgIndex++;  
   }
   slideImg.src = images[imgIndex];
}

function left() {
   if(imgIndex === 0) {
      imgIndex = images.length-1;
   }else{
      imgIndex--;
   }
   slideImg.src = images[imgIndex];
}
function changeSource(source) {
slideImg.src= source;
for(var i = 0 ; i < indicator.length ; i++) {
   if(slideImg.src === indicator[i].src) {
      indicator[i].className += " bright"
   }     
}
}



