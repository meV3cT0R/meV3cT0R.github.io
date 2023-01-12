let links = [document.getElementById("profileLink"),
    document.getElementById("contactLink"),
    document.getElementById("skillsLink")

]
const display = document.getElementById("display");

const profileMarkup = '<p class="text-success"> meow meow</p>';
const contactMarkup = '<p class="text-success"> Email: shresthasumit09876@gmail.com </p>'+
'<p class="text-success"> chess.com: meV3cT0R </p>'+
'<p class="text-success"> github: meV3cT0R </p>';
const skillsMarkup = '<p class="text-success"> Java : *** </p>'+
'<p class="text-success"> Spring Framework : ** </p>';


// Show profile
document.addEventListener("onload",displayText(0,profileMarkup));
links[0]
.addEventListener("click",()=>displayText(0,profileMarkup));
//


links[1].addEventListener("click",()=>displayText(1,contactMarkup));

links[2].addEventListener("click",()=>displayText(2,skillsMarkup));

function displayText(index,text) {

    for(var i=0;i<links.length;i++) {
        if(i==index) links[i].classList.add("active");
        else links[i].classList.remove("active");
    }

    display.innerHTML = text;
}