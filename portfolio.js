// ANIMATIONS FOR THE PORTFOLIO PAGE

// THE HERO SECTION OF THE PORTFOLIO PAGE

// THE FIRST PROJECT CARD

const portfolio = document.querySelector(".project-card_one")

const optionsportfolio = {
    threshold: 0.2
}

const observerportfolio = new IntersectionObserver (function(entries, observerportfolio) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_portfolio")
        } else{
            entry.target.classList.remove("animate_portfolio")
        }
    });
}, optionsportfolio)

observerportfolio.observe(portfolio);





// THE SECOND PROJECT CARD

const portfolioTwo = document.querySelector(".project-card_two")
const portfolioThird = document.querySelector(".project-card_third")

const optionsportfolioTwo = {
    threshold: 0.2
}

const observerportfolioTwo = new IntersectionObserver (function(entries, observerportfolioTwo) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_portfolioTwo")
        } else{
            entry.target.classList.remove("animate_portfolioTwo")
        }
    });
}, optionsportfolioTwo)

observerportfolioTwo.observe(portfolioTwo);





// THE THIRD PROJECT CARD

const portfolioFour = document.querySelector(".project-card_four")

const optionsportfolioFour = {
    threshold: 0.2
}

const observerportfolioFour = new IntersectionObserver (function(entries, observerportfolioFour) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_portfolioFour")
        } else{
            entry.target.classList.remove("animate_portfolioFour")
        }
    });
}, optionsportfolioFour)

observerportfolioFour.observe(portfolioFour);