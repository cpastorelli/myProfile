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
        name: "Password Generator",
        deployname: "Live Page",
        link: "https://cpastorelli.github.io/Password-Generator/", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/Password-Generator",
        img: "./assets/images/passwordGeneratorSM.png",
        alt: "A password being generated based on certain criteria"
    },
    {
        name: "Day Planner",
        deployname: "Live Page",
        link: "https://cpastorelli.github.io/day-planner/", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/Day-Planner",
        img: "./assets/images/dayPlannerSM.png",
        alt: "A functional day planner"
    },
    {
        name: "Timed Quiz",
        deployname: "Live Page",
        link: "https://cpastorelli.github.io/timed-quiz/", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/timed-quiz",
        img: "./assets/images/timedQuizSM.png",
        alt: "A timed quiz setup"
    },
    {
        name: "Weather Dashboard",
        deployname: "Live Page",
        link: "https://cpastorelli.github.io/weather-Dashboard/", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/weather-Dashboard",
        img: "./assets/images/WeatherDashSM.png",
        alt: "Weather dashboard showing the weather forcast for the city of Houston"
    },
    {
        name: "Trip Planner",
        deployname: "Live Page",
        link: "https://amdiebolt.github.io/trip-planner/", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/trip-planner",
        img: "./assets/images/tripPlannerSM.png",
        alt: "Get weather and entertainment shows based on city searched"
    },
    {
        name: "Covid Travel Search",
        deployname: "Live Page",
        link: "https://intense-mesa-45226.herokuapp.com/", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/Covid-travel-search",
        img: "./assets/images/covidTravel.png",
        alt: "Find Covid Travel Restrictions for countries you wish to visit"
    },
    {
        name: "Team Profile Generator",
        deployname: "Video Description",
        link: "https://cpastorelli.github.io/Team_Profile_Generator/", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/Team_Profile_Generator",
        img: "./assets/images/teamProfiles.png",
        alt: "Employee profiles for a team"
    },
    {
        name: "README.md Generator",
        deployname: "Video Description",
        link: " https://www.screencast.com/t/FHwNjb5pBO", 
        ghname: "Repository",
        ghlink: "https://github.com/cpastorelli/README-Generator",
        img: "./assets/images/nodeExample.png",
        alt: "Sample questions from README.md Generator Program"
    },
] 
// Variables used in Contact Section
const title4 = "Contact Me";
const linkGithub = "https://github.com/cpastorelli/";
const toGithub = "Github";
const linkLinkedIn = "https://www.linkedin.com/in/carolinedawespastorelli/";
const toLinkedIn = "LinkedIn";
const linkEmail = "mailto:caroline.pastorelli@gmail.com";
const toEmail = "E-mail";
const linkPhone = "tel:+7604407712";
const toPhone = "Phone";
const linkResume = "./assets/resume/CarolinePastorelli_Resume.pdf";
const toResume = "Resume (PDF)"

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
    let contactLi4 = document.createElement("li");
    let contactLi5 = document.createElement("li");

    // 
    let contactA1 = simpleAnchor(linkGithub, toGithub);
    let contactA2 = simpleAnchor(linkLinkedIn, toLinkedIn);
    let contactA3 = simpleAnchor(linkEmail, toEmail);
    let contactA4 = simpleAnchor(linkPhone, toPhone);
    let contactA5 = simpleAnchor(linkResume, toResume);
    contactA5.setAttribute("download", "CarolinePastorelli_Resume");

    // append elements to page
    contactLi1.append(contactA1);
    contactLi2.append(contactA2);
    contactLi3.append(contactA3);
    contactLi4.append(contactA4);
    contactLi5.append(contactA5);
    contactUl.append(contactLi1, contactLi2, contactLi3, contactLi4, contactLi5);
    contactDiv.append(contactUl);
    contactEl.append(contactH, contactDiv);
    console.log(contactLi5);
}

function simpleAnchor(linkTo, phrase) {
    let sAnchor = document.createElement("a");
    sAnchor.setAttribute("href", linkTo);
    sAnchor.textContent = phrase;

    return sAnchor;
}

function workAnchor(obj){
    let workItems = document.createElement("div");
    workItems.className = "card";
    
    let workCard = document.createElement("div");
    workCard.className = "card-body";

    let wImg = setImg(obj.img, obj.alt);

    let wTitle = document.createElement("h4");
    wTitle.innerText = obj.name;
    wTitle.className = "card-title";

    let wAnchor1 = simpleAnchor(obj.link, obj.deployname);
    wAnchor1.setAttribute("target", "_blank");
    wAnchor1.className = "card-link";

    let wAnchor2 = simpleAnchor(obj.ghlink, obj.ghname);
    wAnchor2.setAttribute("target", "_blank");
    wAnchor2.className = "card-link";
    
    workCard.append(wImg, wTitle, wAnchor1, wAnchor2);
    workItems.append(workCard);
    workCont.append(workItems);
    workEl.append(workCont);
    
    return workItems;
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

