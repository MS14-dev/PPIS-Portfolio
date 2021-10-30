
var count;
var displayPic;
var jobImage;
var jobDesc
var jobList

var skills = [{id:1,
    image:`linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url(./image/webdes.jpg)`,
    description:"Plan and create internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. Responsible for creating the design and layout of a website or web pages. Working on a brand new website or updating an already existing site.",
    skills:"<li>UI</li><li>UX</li><li>Adobe XD</li><li>Figma</li>"},
    {id:2,
    image:`linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url(./image/webdev.jpg)`,
    description:"Design and build websites. Responsible for the appearance, of the site and technical aspects, such as site speed and how much traffic the site can handle. Also create site content that requires technical features.",
    skills:"<li>Front End(HTML/CSS/JS/REACT)</li><li>Back End End(PHP/NodeJS)</li><li>WordPress</li>"},
    {id:3,
    image:`linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url(./image/logodes.jpg)`,
    description:"Create graphical and typographical symbols that represent a company or product in presentations and on websites and packaging. Might work with researchers who study a target audience, as well as with advertising specialists to effectively produce a logo that achieves brand recognition.",
    skills:"<li>New Design</li><li>Redesign</li><li>Liiustrator</li><li>Branding</li>"},
    {id:4,
    image:`linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url(./image/filmcon.jpg)`,
    description:"Responsible for the visual concept of a film, television or theatre production. Design style for sets, locations, graphics, props, lighting, camera angles and costumes.",
    skills:"<li>Story Building</li><li>Charator Design</li><li>Illustrator</li><li>Photoshop</li>"}];

// function carousel(){  
window.addEventListener('load',function(){
    
    count = 0;
    setInterval(carousel,1000)
    displayPic = document.getElementById("index-about-dp");
    jobImage = this.document.getElementById("index-gob-image");
    jobDesc = this.document.getElementById("index-gob-description");
    jobList = this.document.getElementById("index-gob-list");
    jobImage.style.backgroundImage = skills[0].image;
    jobDesc.innerText = skills[0].description
    jobList.innerHTML = skills[0].skills
})

window.addEventListener('scroll',function(){
    var nav = this.document.getElementById("navigation-bar");
    
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        nav.classList.add("scroll");
        displayPic.classList.add("index-dp");
    }else {
        nav.classList.remove("scroll");
        displayPic.classList.remove("index-dp");
    }
})

function carousel(){
var jobs = ["Web Developer","Web Designer","Logo Creating","Film Concepts"]
var job = document.getElementById('index-carousel-job')
        if(count < jobs.length){
            job.innerText = jobs[count]
            count++
        }else{
            count=0
            job.innerText = jobs[count];
        }
}

function changeDynamic(x){
    // document.addEventListener('click',function(e){
    //     if(e.target.classList.contains('index-job-link-active')){
    //         e.target.classList.remove('index-job-link-active')
    //     }else{
    //         e.target.classList.add('index-job-link-active')
    //     }
    // })
    console.log(this)
    jobImage.style.backgroundImage = skills[x].image;
    jobDesc.innerText = skills[x].description
    jobList.innerHTML = skills[x].skills
}

function formSub(){
    var emailTag = document.getElementById("emailTag")
    var messageTag = document.getElementById("messageTag")

    let email = emailTag.value;
    let message = messageTag.value;

    if(email == '' || message == ''){
        alert("All Sections Must full !!")
        return false
    }else{
        let goodMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(goodMail)){
            alert("Successfull")
            return true
        }else{
            alert("Invalid Email Address !!")
            return false;
        }
    }
}


