// responsive nav
$(function () {
      menu = $('nav ul');

      $('#openup').on('click', function (e) {
            e.preventDefault();
            menu.slideToggle();
      });

      $(window).resize(function () {
            var w = $(this).width();
            if (w > 480 && menu.is(':hidden')) {
                  menu.removeAttr('style');
            }
      });

      $('nav li').on('click', function (e) {
            var w = $(window).width();
            if (w < 480) {
                  menu.slideToggle();
            }
      });
      $('.open-menu').height($(window).height());
});


//  Smooth scrolling snippet
$('.cf a').on('click', function (event) {
      if (this.hash !== ' ') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                        scrollTop: $(hash).offset().top
                  },
                  800,
                  function () {
                        window.location.hash = hash;
                  }
            );
      }
});


// Pause button
var video = document.getElementById('myVideo');
var btn = document.getElementById('myBtn');

function pauseVideo() {
      if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
      } else {
            video.pause();
            btn.innerHTML = "Play";
      }
}

//  popup  menu
// Get the popup
var popup = document.getElementById('mypopup');

// Get the button that opens the popup
var btn = document.getElementById("buyBtn");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the popup 
btn.onclick = function () {
      popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function () {
      popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
      if (event.target == popup) {
            popup.style.display = "none";
      }
}

// The tabs inside the popup menu
function openTicket(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// validate buy ticket form and finalize the purchase
function validateForm() {
      var name = document.forms["buyForm"]["name"].value;
      var address = document.forms["buyForm"]["address"].value;
      var email = document.forms["buyForm"]["email"].value;
      var creditNumber = document.forms["buyForm"]["creditNumber"].value;

      // If creditNumber is Not a Number 
      if (isNaN(creditNumber)) {
            // ---> don't show an alert. instead forcus on the form or make it red
            alert("The credit number must be a number");
      } else {
            var strMsg = "Hi " + name + " thanks for purchasing our product using your credit card no. xxxx xxxx xxxx We will email your receipt on " + email + " and send the product to " + email;
            alert(strMsg);
      }
}
