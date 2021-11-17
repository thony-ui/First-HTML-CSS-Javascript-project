// Get the button, and when the user clicks on it, execute myFunctio


/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function continent() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function color() {
    document.getElementById('label1').innerHTML = "You clicked me!"
}

function change() {
    document.getElementById('intro1').innerHTML = "Where is your next destination?"
}

var body = $('body');
var colors = ['https://www.dreamstime.com/stock-photo-peace-balance-banner-meditation-stones-relaxing-beach-website-image69551043', 'https://www.dreamstime.com/stock-photo-laptop-computer-sunny-beach-image-wooden-table-summer-vacation-photo-sharing-image73142517', 'https://www.dreamstime.com/stock-photo-sunglasses-phone-beach-close-up-white-headphones-warm-yellow-sand-blue-ocean-sky-background-image95650046', 'https://www.dreamstime.com/blue-vintage-water-color-beach-big-copy-space-your-business-project-paradise-image107395683', 'https://www.dreamstime.com/stock-photo-smoothed-deserted-beach-flat-blue-sea-smooth-sky-image48100055'];
var currentIndex = 0;
setInterval(function () {
   body.css({
     background: url([currentIndex])
   });
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 100);