// FOR COLOR THEME TOGGLE

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
        icon.src = "moon.png";
    }else{
        icon.src = "sun.png"
    }
}




// COLOR THEME TOGGLE FOR MOBILE SCREENS

var mobileicon = document.getElementById("mobileicon");

mobileicon.onclick = function(){
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
        mobileicon.src = "moon.png";
    }else{
        mobileicon.src = "sun.png"
    }
}



// ABOUT WEBPAGE==============================================================================================================

// THE TAB OR CARET TOGGLE FOR DISPLAYING AND HIDING THE DESCRIPTIONS.

// When the user clicks on the button, toggle b/w hiding and showing the dropdown content
function myFunction() {

    document.getElementById("myDropdown").classList.toggle("show");
}

// CLOSE THE DROP DOWN IF THE USER CLICKS OUTSIDE ITS AMBIENTS
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}



// FOR MY EDUCATION
// When the user clicks on the button, toggle b/w hiding and showing the dropdown content
function myFunctiontwo() {

    document.getElementById("myDropdowntwo").classList.toggle("showtwo");
}

// CLOSE THE DROP DOWN IF THE USER CLICKS OUTSIDE ITS AMBIENTS
window.onclick = function(e) {
    if (!e.target.matches('.dropbtntwo')) {
        var myDropdowntwo = document.getElementById("myDropdowntwo");
        if (myDropdowntwo.classList.contains('showtwo')) {
            myDropdowntwo.classList.remove('showtwo');
        }
    }
}


// FOR MY TECH JOURNEY
// When the user clicks on the button, toggle b/w hiding and showing the dropdown content
function myFunctionthree() {

    document.getElementById("myDropdownthree").classList.toggle("showthree");
}

// CLOSE THE DROP DOWN IF THE USER CLICKS OUTSIDE ITS AMBIENTS
window.onclick = function(e) {
    if (!e.target.matches('.dropbtnthree')) {
        var myDropdownthree = document.getElementById("myDropdownthree");
        if (myDropdownthree.classList.contains('showthree')) {
            myDropdownthree.classList.remove('showthree');
        }
    }
}


// FOR MY HOBBIES
// When the user clicks on the button, toggle b/w hiding and showing the dropdown content
function myFunctionfour() {

    document.getElementById("myDropdownfour").classList.toggle("showfour");
}

// CLOSE THE DROP DOWN IF THE USER CLICKS OUTSIDE ITS AMBIENTS
window.onclick = function(e) {
    if (!e.target.matches('.dropbtnfour')) {
        var myDropdownfour = document.getElementById("myDropdownfour");
        if (myDropdownfour.classList.contains('showfour')) {
            myDropdownfour.classList.remove('showfour');
        }
    }
}




















// ANIMATIONS






// HERO SECTION OF THE HOMEPAGE

const heroHome = document.querySelector(".hero-container")

const optionsone = {
    threshold: 0.2
}

const observerone = new IntersectionObserver (function(entries, observerone) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate-home-hero")
        } else{
            entry.target.classList.remove("animate-home-hero")
        }
    });
}, optionsone)

observerone.observe(heroHome);



// FIRST TRIAD SECTION OF THE HOMEPAGE

const triad = document.querySelector(".first-triad")

const optionstriad = {
    threshold: 0.2
}

const observertriad = new IntersectionObserver (function(entries, observertriad) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_triad")
        } else{
            entry.target.classList.remove("animate_triad")
        }
    });
}, optionstriad)

observertriad.observe(triad);




// THEFIRST SPECIALISATION SECTION OF THE HOMEPAGE

const specialisation_one = document.querySelector(".first-specialization")

const optionsspecialisation_one = {
    threshold: 0.2
}

const observerspecialisation_one = new IntersectionObserver (function(entries, observerspecialisation_one) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_specialisation_one")
        } else{
            entry.target.classList.remove("animate_specialisation_one")
        }
    });
}, optionsspecialisation_one)

observerspecialisation_one.observe(specialisation_one);





// THE SECOND SPECIALISASTION SECTION OF THE HOMEPAGE

const specialisation_two = document.querySelector(".second-specialization")

const optionsspecialisation_two = {
    threshold: 0.2
}

const observerspecialisation_two = new IntersectionObserver (function(entries, observerspecialisation_two) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_specialisation_two")
        } else{
            entry.target.classList.remove("animate_specialisation_two")
        }
    });
}, optionsspecialisation_two)

observerspecialisation_two.observe(specialisation_two);





// INTERESTED IN ME SECTION IN THE HOME PAGE

const interested = document.querySelector(".interested")

const options = {
    threshold: 0.2
}

const observer = new IntersectionObserver (function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate-interest")
        } else{
            entry.target.classList.remove("animate-interest")
        }
    });
}, options)

observer.observe(interested);






// CONCERNING NNAEMEKASECTION IN THE HOME PAGE

const concern = document.querySelector(".concern-box")
const concern_images = document.querySelector(".concern-imgs")

const options_concern = {
    threshold: 0.2
}

const observer_concern = new IntersectionObserver (function(entries, observerconcern) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add("animate_concern")
        } else{
            entry.target.classList.remove("animate_concern")
        }
    });
}, options_concern)

observer_concern.observe(concern);
observer_concern.observe(concern_images);