$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["UI/UX Designer", "Project Manager", "FrontEnd Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["UI/UX Designer", "Project Manager", "FrontEnd Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }


//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Get the form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;

//     // Send the email
//     emailjs.send("service_1pjmcpd", "template_jlx5f6b", {
//         from_name: name,
//         from_email: email,
//         subject: subject,
//         message: message
//     })
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Message sent successfully!');
//     }, function(error) {
//         console.log('FAILED...', error);
//         alert('Failed to send the message. Please try again later.');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Toggle "Read more" / "Read less" function
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
    
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    // Function to clear form fields
    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    }

    // Add event listener for form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Send the email
        emailjs.send("service_1pjmcpd", "template_jlx5f6b", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            clearForm(); // Clear the form fields after successful submission
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
        });
    });
});