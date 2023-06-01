var darkmode = document.getElementById("darkmode_switcher");
var navbar = document.querySelector("nav");
var wrapper = document.querySelector(".wrapper");
var footer = document.querySelector("footer");
const textSpan = document.querySelectorAll("span");
var featuresMenu = document.querySelector(".features_wrapper");
const sections = document.querySelectorAll('section');
const nav_list = document.querySelectorAll('.nav_list li');
var currentTheme = 0;

document.addEventListener("DOMContentLoaded", function() {
  
        featuresMenu.style.visibility="hidden";

 });

                  
darkmode.addEventListener('click', ()=> {
  if (currentTheme == 0) {
  document.body.classList.toggle('dark'); //add the dark class at body tag when shitched to dark theme
  document.getElementById("particles-js").style.opacity = "40%"; // reduce the particles opacity in dark mode
  navbar.style.filter = "brightness(.8)"; //darken navbar
  wrapper.style.filter = "brightness(.8)"; //darken menu wrapper
  footer.style.filter = "brightness(.8)"; //barken footer
  textSpan.forEach((span) => {
  span.style.backgroundColor = "rgba(206, 203, 242, .7)"; // darken each span 
  });
  currentTheme++; //currentTheme = 1

} else { //light mode
  document.body.classList.toggle('dark');  //remove the dark class from the body when shitched to light theme
  document.getElementById("particles-js").style.opacity = "100%"; // max opacity for the particles
  navbar.style.filter = "brightness(1)"; //max brightness navbar
  wrapper.style.filter = "brightness(1)";  //max brightness wrapper
  footer.style.filter = "brightness(1)";  //max brightness footer
  textSpan.forEach((span) => {
  span.style.backgroundColor = "rgba(206, 203, 242, 1)";  // increase each span opacity
  });
  currentTheme--; //currentTheme = 0
}

});

/*navbar selection*/

const options = {

    treshold: "1",
    rootMargin: "-200px 0px -100px 0px", /*dupa ce atinge elementul, se executa functia doar dupa cati pixeli sunt setati la marginea viewport-ului*/
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {

            nav_list.forEach((link) => {

            if (e.target.id === link.dataset.nav) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
});
    }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});

/**/
