var id = setInterval(movimenta,1);
const altWind = window.innerHeight;
const largWind = window.innerWidth;
const logoHeight = document.getElementById('logo').clientHeight
const logoWidth = document.getElementById('logo').clientWidth
const maxHeight = altWind - logoHeight
const maxWidth = largWind - logoWidth
var y = 0;
var x = 0;
var xAd = 1; 
var yAd = 1; 
function movimenta(){
    var logo = document.getElementById('logo')
    y+=yAd;
    x+=xAd;
    logo.style.top = y + "px";
    logo.style.left = x + "px";
    if(y>=maxHeight || y<=0){
        yAd *= -1;
    } 
    if(x>=maxWidth || x<=0){
        xAd *= -1;
    }
}
