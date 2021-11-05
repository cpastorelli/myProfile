// DOM Navigation by class
const navEl = document.querySelector(".navi");
//const aboutEl = document.querySelector(".about-me"); //For future use?
const workEl = document.querySelector(".my-work");
const contactEl = document.querySelector(".contact");
// Variables used in Navigation Section
const title1 = "Caroline Pastorelli"
const linkAbout = "#about-me";
const toAbout = "About Me";
const linkWork = "#my-work";
const toWork = "My Work";
const linkContact = "#contact-links";
const toContact = "Contact Me";

// Variables used in Contact Section
const title3 = "Contact Me";
const linkGithub = "https://github.com/cpastorelli/";
const toGithub = "To Github";
const linkEmail = "mailto:caroline.pastorelli@gmail.com";
const toEmail = "To E-mail";
const linkPhone = "tel:+123456789";
const toPhone = "To Phone";

setNav();
setContact();

//Create Navigation section
function setNav(){
    let navH = document.createElement("h1");
    navH.textContent = title1;
    
    let navSect = document.createElement("nav");
    navSect.className = "menu";

    let navUl = document.createElement("ul");
    let navLi = document.createElement("li");

    // 
    let navA1 = simpleAnchor(linkAbout, toAbout);
    let navA2 = simpleAnchor(linkWork, toWork);
    let navA3 = simpleAnchor(linkContact, toContact);

    // append elements to page
    navLi.append(navA1, navA2, navA3);
    navUl.append(navLi);
    navSect.append(navUl);
    navEl.append(navH, navSect);
}

//Create Contact Section
function setContact(){
    let contactH = document.createElement("h3");
    contactH.textContent = title3;

    let contactDiv = document.createElement("div");
    contactDiv.className = "links";

    let contactUl = document.createElement("ul");
    let contactLi = document.createElement("li");

    // 
    let contactA1 = simpleAnchor(linkGithub, toGithub);
    let contactA2 = simpleAnchor(linkEmail, toEmail);
    let contactA3 = simpleAnchor(linkPhone, toPhone);

    // append elements to page
    contactLi.append(contactA1, contactA2, contactA3);
    contactUl.append(contactLi);
    contactDiv.append(contactUl);
    contactEl.append(contactH, contactDiv);
}

function simpleAnchor(linkTo, phrase) {
let sAnchor = document.createElement("a");
sAnchor.setAttribute("href", linkTo);
sAnchor.textContent = phrase;
return sAnchor;
}

