document.getElementById("profileLink").addEventListener("click",()=>{
    var displayIt = document.getElementById("display");
    document.getElementById("contactLink").classList.remove("active");
    document.getElementById("profileLink").classList.add("active");
    displayIt.innerHTML = '<p class="text-success"> meow meow</p>';
});
document.getElementById("contactLink").addEventListener("click",()=>{
    var displayIt = document.getElementById("display");
    
    document.getElementById("profileLink").classList.remove("active");
    document.getElementById("contactLink").classList.add("active");
    displayIt.innerHTML = '<p class="text-success"> Email: shresthasumit09876@gmail.com </p>'+
    '<p class="text-success"> chess.com: meV3cT0R </p>'+
    '<p class="text-success"> github: meV3cT0R </p>'
});