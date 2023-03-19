const btn = document.getElementById("btn");
const modal = document.getElementById("myModal");
const closeButton = document.getElementById("btn-close");

btn.addEventListener('click', function(){
    console.log("Button clicked");
    modal.style.display = "block";
});

closeButton.addEventListener('click', ()=>{
    console.log("Button clicked");
    modal.style.display = "none";
});