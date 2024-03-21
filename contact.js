// ANIMATIONS FOR THE CONTACT PAGE

// THE CONTACT HANDLES SECTION OF THE CONTACT PAGE


const contact = document.querySelector(".contact-handles")

const optionscontact = {
    threshold: 0.2
}

const observercontact = new IntersectionObserver (function(entries, observercontact) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_contactHandles")
        } else{
            entry.target.classList.remove("animate_contactHandles")
        }
    });
}, optionscontact)

observercontact.observe(contact);


// THE CONTACT FORM SECTION OF THE CONTACT PAGE


const contactForm = document.querySelector(".contact-form")

const optionscontactForm = {
    threshold: 0.2
}

const observercontactForm = new IntersectionObserver (function(entries, observercontactForm) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            // console.log(entry);
            entry.target.classList.add("animate_contactForm")
        } else{
            entry.target.classList.remove("animate_contactForm")
        }
    });
}, optionscontactForm)

observercontactForm.observe(contactForm);