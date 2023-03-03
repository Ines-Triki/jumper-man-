var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

function jumpe(){
    // function to make the character jump
    if(perso.classList != "animation"){
        perso.classList.add('animation'); 
    }
    setTimeout(function(){
        perso.classList.remove('animation'); 
    },500)
}

//check if the obstacle touches the character

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left")) ;

    if(obstaclesLeft<20 && obstaclesLeft >0 && persoTop>= 130){
        obstacles.style.animation = "none";
        alert("game over")

    }

},1)
$("#st").click(function(){
    location.reload(true)
})