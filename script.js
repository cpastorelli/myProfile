// DOM Navigation by class
const navEl = document.querySelector(".navi");
//const aboutEl = document.querySelector(".about-me"); //For future use?
const workEl = document.querySelector(".my-work");
const workCont = document.querySelector(".work-container");
const contactEl = document.querySelector(".contact");
// Variables used in Navigation Section
const title1 = "Caroline Pastorelli"
const linkAbout = "#about-me";
const toAbout = "About Me";
const linkWork = "#my-work";
const toWork = "My Work";
const linkContact = "#contact-links";
const toContact = "Contact Me";
//Variables used in About section

// Variables used in Work section
const title3 = "My Work";
const workItem =[
    {
        name: "Password",
        link: "https://cpastorelli.github.io/Password-Generator/", 
        img: "./assets/images/passwordGeneratorSM.png",
        alt: "A password being generated based on certain criteria"
    },
    {
        name: "Day Planner",
        link: "https://cpastorelli.github.io/day-planner/", 
        img: "./assets/images/dayPlannerSM.png",
        alt: "A functional day planner"
    },
    {
        name: "Timed Quiz",
        link: "https://cpastorelli.github.io/timed-quiz/", 
        img: "./assets/images/timedQuizSM.png",
        alt: "A timed quiz setup"
    },
    {
        name: "Weather",
        link: "https://cpastorelli.github.io/weather-Dashboard/", 
        img: "./assets/images/weatherDashboardSM.png",
        alt: "Weather dashboard showing the weather forcast for the city of Houston"
    },
    {
        name: "Trip Planner",
        link: "https://amdiebolt.github.io/trip-planner/", 
        img: "./assets/images/tripPlannerSM.png",
        alt: "Get weather and entertainment shows based on city searched"
    },
] 
// Variables used in Contact Section
const title4 = "Contact Me";
const linkGithub = "https://github.com/cpastorelli/";
const toGithub = "To Github";
const linkEmail = "mailto:caroline.pastorelli@gmail.com";
const toEmail = "To E-mail";
const linkPhone = "tel:+123456789";
const toPhone = "To Phone";

setNav();
setWork();
setContact();

//Create Navigation section
function setNav(){
    let navH = document.createElement("h1");
    navH.textContent = title1;
    
    let navSect = document.createElement("nav");
    navSect.className = "links";

    let navUl = document.createElement("ul");
    let navLi1 = document.createElement("li");
    let navLi2 = document.createElement("li");
    let navLi3 = document.createElement("li");

    // 
    let navA1 = simpleAnchor(linkAbout, toAbout);
    let navA2 = simpleAnchor(linkWork, toWork);
    let navA3 = simpleAnchor(linkContact, toContact);

    // append elements to page
    navLi1.append(navA1);
    navLi2.append(navA2);
    navLi3.append(navA3);
    navUl.append(navLi1, navLi2, navLi3);
    navSect.append(navUl);
    navEl.append(navH, navSect);
}

// Create Work section
function setWork(){
    let workH = document.createElement("h3");
    workH.textContent = title3;
    workEl.append(workH);

    // This will loop through Obj 
    workItem.forEach(workAnchor);
}

//Create Contact Section
function setContact(){
    let contactH = document.createElement("h3");
    contactH.textContent = title4;

    let contactDiv = document.createElement("div");
    contactDiv.className = "links";

    let contactUl = document.createElement("ul");
    let contactLi1 = document.createElement("li");
    let contactLi2 = document.createElement("li");
    let contactLi3 = document.createElement("li");

    // 
    let contactA1 = simpleAnchor(linkGithub, toGithub);
    let contactA2 = simpleAnchor(linkEmail, toEmail);
    let contactA3 = simpleAnchor(linkPhone, toPhone);

    // append elements to page
    contactLi1.append(contactA1);
    contactLi2.append(contactA2);
    contactLi3.append(contactA3);
    contactUl.append(contactLi1, contactLi2, contactLi3);
    contactDiv.append(contactUl);
    contactEl.append(contactH, contactDiv);
}

function simpleAnchor(linkTo, phrase) {
    let sAnchor = document.createElement("a");
    sAnchor.setAttribute("href", linkTo);
    sAnchor.textContent = phrase;

    return sAnchor;
}

function workAnchor(obj){
    let wSubCont = document.createElement("div");
    wSubCont.className = "wItems ";

    let wAnchor = divAnchor(obj.link, obj.name);
    wAnchor.setAttribute("target", "_blank");
    wAnchor.className = "fill-div";
    
    let wImg = setImg(obj.img, obj.alt);
    wAnchor.append(wImg);

    wSubCont.append(wAnchor);
    workCont.append(wSubCont);
    workEl.append(workCont);
    
    return wSubCont;
}

function divAnchor(linkTo, phrase){
    let dAnchor = document.createElement("a");
    dAnchor.setAttribute("href", linkTo);
    let hAnchor = document.createElement("p");
    hAnchor.textContent = phrase;
    dAnchor.append(hAnchor);
    return dAnchor;
}

function setImg(link, alt){
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", link);
    imgEl.setAttribute("alt", alt);
    return imgEl;
}