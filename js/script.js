var id = setInterval(movimenta,10);
const altWind = window.innerHeight;
var y = 0;
function movimenta(){
    var logo = document.getElementById('logo')
    if(y==altWind){
        clearInterval(id);
    } else{
        y++;
        logo.style.top = y + "px";
    }
    

}
