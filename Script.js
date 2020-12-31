//Smooth Scroll Function TOP
function smoothScroll(target,duration){
    var target = document.getElementById(target);
    var navbar = document.querySelector('.navbar');
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    console.log(window.screen.height);
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,targetPosition,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
        //console.log(timeElasped);
    }

    function ease(t,b,c,d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t-2) - 1) + b;
    }
    
    requestAnimationFrame(animation);

}

//Smooth Scroll Function BOTTOM
function smoothScrollBottom(target,duration){
    var target = document.getElementById(target);
    var navbar = document.querySelector('.navbar');
    var targetPosition = target.getBoundingClientRect().bottom + 1;
    console.log(targetPosition);
    var startPosition = window.pageYOffset;
    console.log(window.pageYOffset);
    var startTime = null;

    //console.log(target);
    //console.log(targetPosition);
    //console.log(startPosition);

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,targetPosition,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
        //console.log(timeElasped);
    }

    function ease(t,b,c,d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t-2) - 1) + b;
    }
    
    requestAnimationFrame(animation);

}

var about = document.querySelector('.about1');
var projects = document.querySelector('.projects1');
var photography = document.querySelector('.photography1');
var skills = document.querySelector('.skills1');


about.addEventListener('click',function(){
    smoothScrollBottom('home',1000);
})

projects.addEventListener('click',function(){
    smoothScroll('transition-projects-pic',1000);
})

photography.addEventListener('click',function(){
    smoothScroll('transition-photography-pic',1000);
})

skills.addEventListener('click',function(){
    smoothScroll('skills',1000);
})


//navbar grayed
function scrollNavBar(i) {
    var home = document.getElementById('home');
    var about = document.getElementById('about');
    var transition1 = document.getElementById('transition-projects-pic');
    var transition2 = document.getElementById('transition-photography-pic');
    var projects = document.getElementById('projects');
    var photography = document.getElementById('photography');
    var skills = document.getElementById('skills');
    var contact = document.getElementById('contact')

    //buttons
    var about1 = document.querySelector('.about1');
    var projects1 = document.querySelector('.projects1');
    var photography1 = document.querySelector('.photography1');
    var skills1 = document.querySelector('.skills1');

    //get section coords on window
    var aboutTop = home.getBoundingClientRect().bottom;
    var aboutBottom = transition1.getBoundingClientRect().top - 50;
    //var projectsTop = transition1.getBoundingClientRect().top;
    var projectsBottom = transition2.getBoundingClientRect().top - 50;
    //var photographyTop = photography.getBoundingClientRect().top;
    var photographyBottom = skills.getBoundingClientRect().bottom - window.screen.height;
    //var skillsTop = skills.getBoundingClientRect().top;
    var skillsBottom = skills.getBoundingClientRect().bottom;

    //About
    if(aboutTop <= 0 && aboutBottom > 0){
        about1.classList.add('navbar-active');
    }
    else {
        about1.classList.remove('navbar-active');
    }
    //Projects
    if(aboutBottom <= 0 && projectsBottom > 0){
        projects1.classList.add('navbar-active');
    }
    else {
        projects1.classList.remove('navbar-active');
    }
    //Other
    if(projectsBottom <= 0 && photographyBottom > 0){
        photography1.classList.add('navbar-active');
    }
    else {
        photography1.classList.remove('navbar-active');
    }
    //Contact
    if(photographyBottom <= 0 && skillsBottom > 0){
        skills1.classList.add('navbar-active');
    }
    else {
        skills1.classList.remove('navbar-active');
    }
}
window.addEventListener('scroll',scrollNavBar)

// Text Appears on scroll
function scrollAppear(){
    var aboutText = document.querySelector('.welcome')
    console.log(aboutText);
    var aboutPosition = aboutText.getBoundingClientRect().top;
    //console.log(aboutPosition);
    var screenPosition = window.innerHeight/1.25;
    //console.log(screenPosition);

    if(aboutPosition < screenPosition){
        if(aboutPosition > 50){
            aboutText.classList.add('about-appear');
        }
        else {
            aboutText.classList.remove('about-appear');
        }
    }
    else {
        aboutText.classList.remove('about-appear');
    }
}

function scrollAppearprev(){
    var aboutText = document.querySelector('.prev')
    console.log(aboutText);
    var aboutPosition = aboutText.getBoundingClientRect().top;
    //console.log(aboutPosition);
    var screenPosition = window.innerHeight/1.25;
    //console.log(screenPosition);

        if(aboutPosition > 50){
            aboutText.classList.add('appearprev');
        }
        else {
            aboutText.classList.remove('appearprev');
        }
}

function scrollAppearNext(){
    var aboutText = document.querySelector('.next')
    console.log(aboutText);
    var aboutPosition = aboutText.getBoundingClientRect().top;
    //console.log(aboutPosition);
    var screenPosition = window.innerHeight/1.25;
    //console.log(screenPosition);

        if(aboutPosition > 50){
            aboutText.classList.add('appearprev');
        }
        else {
            aboutText.classList.remove('appearprev');
        }
}

// update every time user scrolls
window.addEventListener('scroll',scrollAppear)
window.addEventListener('scroll',scrollAppearprev)
window.addEventListener('scroll',scrollAppearNext)

//Home Parallax
//window.addEventListener('scroll', function(){
  //  const parallax = document.querySelector('.parallax');
    //let scrollPosition = window.pageYOffset;
    //console.log(scrollPosition);

    //parallax.style.transform = 'translateY('+ scrollPosition * 0.52 +'px)';
//});

//Transition Parallax
window.addEventListener('scroll',function(e){

    const target = document.querySelectorAll('.scroll')

    var index = 0, length = target.length;

    for(index; index < length; index++){
        var activeDiv = target[index];
        var activeDivPosition = activeDiv.getBoundingClientRect();
        var averagePos = activeDivPosition.top + (activeDivPosition.top - activeDivPosition.bottom)/2;
        //- window.innerHeight/8 moves parallax photo up
        var pos = (averagePos- window.innerHeight) * target[index].dataset.rate;
        target[index].style.backgroundPositionY = pos + "px";
    }
});


// Slideshow 1

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

//Slide Show 2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");

  if (m > slides.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex2-1].style.display = "block";  
}

//animate video on scroll

window.addEventListener('scroll', function(){
    bound = document.querySelector(".bound");
    video = document.querySelector(".video2");
    
    const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
    //console.log(window.scrollY)
    //console.log(distanceFromTop)
    const rawPercentScrolled = 0.4*(window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
    const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
    
    video.currentTime = 9 * percentScrolled;
});

function scrollVideo(){
}

//toggle button
var toggle = document.querySelector('.newline')
var links = document.querySelector('.links')
var toggle2 = document.querySelector('.newline2')

toggle.addEventListener('click',function(){
    links.classList.add('links-active');
    toggle.classList.add('disappear')
    toggle2.classList.add('appear')
})

toggle2.addEventListener('click',function(){
    links.classList.remove('links-active');
    toggle.classList.remove('disappear')
    toggle2.classList.remove('appear')
})
