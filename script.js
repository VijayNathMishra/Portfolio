$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
//<!---Developed-By Vijay Nath Mishra-->
    // typing text animation script for the home section
    var typedHome = new Typed(".typing", {
        strings: ["Frontend Developer", "Web Developer", "Back end Developer", "Full Stack Developer", "Python Developer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // typing text animation script for the about section
    var typedAbout = new Typed(".typing-about", {
        strings: [
            "I've recently embarked on my journey in the world of programming and technology.",
            "I'm excited to explore all that this field has to offer.",
            "Eager to learn and grow, I'm dedicated to honing my skills and collaborating with fellow enthusiasts.",
           "Join me as I dive into the fascinating realm of computer science and strive to make meaningful contributions to the tech community."
        ],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 1000,
        backDelay: 2000,
        loop: true
    });

// Developed-By = Vijay Nath Mishra

    // typing text animation script for the additional section (if needed)
    var typedAdditional = new Typed(".typing-2", {
        strings: ["Frontend Developer", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
//<!---Developed-By Vijay Nath Mishra-->
});