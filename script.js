$(document).ready(function() {
    // Sticky navbar on scroll
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        // Check visibility for the profile picture in the About section
        $('.about .about-content .left img').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            // If the image is in the viewport, add the 'visible' class
            if (elementTop < windowBottom) {
                $(this).addClass('visible');
            }
        });
    });

    // Slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll for menu items
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Custom cursor functionality
    const cursor = $('.custom-cursor');

    $(document).mousemove(function(e) {
        cursor.css({
            left: e.pageX,
            top: e.pageY
        });
    });

    // Optional: Add a hover effect for links and buttons
    $('a, button').hover(function() {
        cursor.css('background-color', '#fff'); // Change color on hover
    }, function() {
        cursor.css('background-color', 'crimson'); // Reset color
    });

    // Typing text animation script
    var options = {
        strings: ["Developer.", "Learner.", "Student.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    };

    var typed1 = new Typed(".typing", options);
    var typed2 = new Typed(".typing-2", options);

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Function to send email
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop the function if the email is invalid
    }

    const mailtoLink = `mailto:advikvijay271@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

    window.location.href = mailtoLink;
}