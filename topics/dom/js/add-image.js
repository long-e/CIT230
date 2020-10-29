var myImg = document.createElement('IMG');
myImg.setAttribute('src', 'images/flower.jpg');
myImg.setAttribute('alt','Single Flower');
myImg.setAttribute('class', 'testing');
document.getElementsByTagName('main')[0].appendChild(myImg);

footer2.innerHTML = 'testing...'