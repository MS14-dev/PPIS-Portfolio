var projects = [{
    title:"The Barrel",
    desc:"A website for learn to make new beverages, the whole project is done by myself. Including front end using React and logo."+
    "Consumers can search various kind of drinks, recepies by their own",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/barrel.jpg')"
},{
    title:"Single Page Portfolio",
    desc:"A single page portfolio developed using React. The complete project from the idea to reality is done by myself."+
    "Users can put their project details to the website also. A very simple and attractive platform to view the profile of user.",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/portfolio.jpg')"
},{
    title:"Pack Money",
    desc:"Pack Money is platform to transfer your funds more securely. In here the back end is fully encrypted and all the transactions"+
    "are secure. Also the account balance change is also quick and accurate with in just a second.",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/packmoney.jpg')"
},{
    title:"astroX",
    desc:"A concept website design for astronomy articles and news. The logo also designed. Login, signin and news feed design included.",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/astrox.jpg')"
},{
    title:"Chat App",
    desc:"Concept design of web based chat application. Login, chat screnn, account and account setting pages are designed "+
    "",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/chatapp.jpg')"
},{
    title:"Password Reset",
    desc:"Simple UI for password reset and warning message for them. This include the password reset security question also.",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/password.jpg')"
},{
    title:"Tree",
    desc:"The Tree is a concept organization for save the mother nature. The logo design is inspired from the regular shape of"+
    "The logo, the tagline and the branding part is completed.",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/tree.png')"
},{
    title:"Brave Birds",
    desc:"Brave Birds is a motor cycle club that named after eagle. The design is inspired from eagle and the colors are based on "+
    " the organizations theam colors.",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/bravebirds.jpg')"
},{
    title:"Bird Airline",
    desc:"An imaginary airline company. The logo is basically represent a bird with colorful body. The logo, tagline and the font design also "+
    "created. ",
    img:"linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/birdairline.jpg')"
},]

var projectTitel;
var projectDescription;
var projectDiv;

window.addEventListener('load',function(){
projectTitel = document.getElementById("project-title-dynamic")
projectDescription = document.getElementById("project-description-dynamic")
projectDiv = document.getElementById("project-div-dynamic");

projectTitel.innerText = projects[0].title
projectDiv.style.backgroundImage = projects[0].img
projectDescription.innerText = projects[0].desc;
})

function projectDescDynamic(position){
    projectTitel.innerText = projects[position].title
    projectDiv.style.backgroundImage = projects[position].img
    projectDescription.innerText = projects[position].desc;
}
// linear-gradient(to right ,rgba(0, 0, 0, 0.459),rgba(0, 0, 0, 0.185)),url('../image/projects/astrox.jpg')