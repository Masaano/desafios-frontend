var id = setInterval(movimenta,10);
const altWind = window.innerHeight;
const logoHeight = document.getElementById('logo').clientHeight
var y = 0;
function movimenta(){
    var logo = document.getElementById('logo')
    if(y==(altWind - logoHeight)){
        clearInterval(id);
    } else{
        y++;
        logo.style.top = y + "px";
    }
    

}
