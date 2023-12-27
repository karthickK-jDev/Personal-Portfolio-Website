var mode = document.getElementById("mode");
var theme = document.getElementById("theme");
var menu = document.getElementById("menu-threebar");

mode.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "images/sun-line.svg";
        
        
    } else {
        mode.src = "images/moon-line.svg";

    }
    
}

var mobilelist = document.getElementById("mobilelist");
menu.onclick = function () {
    document.body.classList.toggle("menu-cancel");
    if (document.body.classList.contains("menu-cancel")) {
        menu.src = "images/close-line.svg";
        mobilelist.style.display = "block";
    } 
    else{
        menu.src = "images/menu-fill.svg";
        mobilelist.style.display = "none";
    }
    
}


var mobhome = document.getElementById("mob-home");
mobhome.addEventListener("click", ()=>{
     mobilelist.style.display = "none";
     menu.src = "images/menu-fill.svg";
})
var mobabout = document.getElementById("mob-about");
mobabout.addEventListener("click", ()=>{
     mobilelist.style.display = "none";
     menu.src = "images/menu-fill.svg";
})
var mobskills = document.getElementById("mob-skills");
mobskills.addEventListener("click", ()=>{
     mobilelist.style.display = "none";
     menu.src = "images/menu-fill.svg";
})
var mobprojects = document.getElementById("mob-projects");
mobprojects.addEventListener("click", ()=>{
     mobilelist.style.display = "none";
     menu.src = "images/menu-fill.svg";
})
var mobcontact = document.getElementById("mob-contact");
mobcontact.addEventListener("click", ()=>{
     mobilelist.style.display = "none";
     menu.src = "images/menu-fill.svg";
})

var btn1 = document.getElementById("switch1");
var btn2 = document.getElementById("switch2");
var bio = document.getElementById("bio-content");
var edu = document.getElementById("edu-content");

function leftClick() {
    btn2.style.background = "var(--third-color)";
    btn1.style.background = "white";
    btn2.style.color = "white";
    btn1.style.color = "var(--third-color)";
    bio.style.display = "block";
    edu.style.display = "none";
}
function rightClick() {
    btn2.style.background = "white";
    btn1.style.background = "var(--third-color)";
    btn2.style.color = "var(--third-color)";
    btn1.style.color = "white";
    bio.style.display = "none";
    edu.style.display = "block";
}

var mbio = document.getElementById("mbio-content");
var medu = document.getElementById("medu-content");

function mleftClick() {

    mbio.style.display = "block";
    medu.style.display = "none";
}
function mrightClick() {
    mbio.style.display = "none";
    medu.style.display = "block";
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

let calcScrollValue = () => {

    let scrollProgress = document.getElementById("scroll-icon");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#a8a8a8 ${scrollValue}%)`;

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


//---------------------SEND MAIL---------------//



const contactform = document.getElementById("contact-form");
contactmsg = document.getElementById("contact-msg")

const sendmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_t5p8wtj', 'template_fw9vj68', '#contact-form', 'hKAbok9WkPLcO9iZc')
        .then(() => {
            contactmsg.textContent = "Message Sent Successfully ✅"

            setTimeout(() => {
                contactmsg.textContent = ""
            }, 3000)

            contactform.reset()
        }, () => {
            contactmsg.textContent = "Message not Sent (Service Error) ❌"
        })
}
contactform.addEventListener("submit", sendmail);