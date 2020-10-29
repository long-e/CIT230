function getHypotenuse() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);

    var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    c = c.toFixed(2);

    document.getElementById('c').innerHTML = c;
    
}

var aa = parseFloat(document.getElementById('aa').innerHTML);
var bb = parseFloat(document.getElementById('bb').innerHTML);

var area = (aa * bb)/2;
area = area.toFixed(2);

document.getElementById('area').innerHTML = area;