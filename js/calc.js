function getHypotenuse() {
    var a = document.getElementById('a').innerHTML;
    var b = document.getElementById('b').innerHTML;

    var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById('c').innerHTML = c;
}

var aa = document.getElementById('aa').innerHTML;
var bb = document.getElementById('bb').innerHTML;

var area = (aa * bb)/2;

document.getElementById('area').innerHTML = area;