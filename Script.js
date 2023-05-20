
var typed = new Typed('.auto-input', {
    strings: ['Python Developer','UI Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });

  // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Emailjs
function SendMail(){
  var params={
    from_name : document.getElementById('fullname').value,
    email_id  : document.getElementById('email_id').value,
    number    : document.getElementById('number').value,
    message   : document.getElementById('message').value

  }
  emailjs.send("service_gdqkoz9","template_1g5fiuk",params).then(function(res){
    alert("Message send successfully");
  })
}