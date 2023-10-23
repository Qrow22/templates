var imagens = ["assets/image1.jpg", "assets/image2.jpg", "assets/image3.jpeg", "assets/image4.jpeg", ];
var imagemIndex = 0; 
var imagemElement = document.getElementById("img");


function trocar(){
    imagemIndex = (imagemIndex + 1) % imagens.length;
    imagemElement.src = imagens[imagemIndex];

}

var interval = setInterval(trocar, 3000);


setTimeout(function(){
    clearInterval(interval);
    imagemIndex = 0;
    imagemElement.src = imagens[imagemIndex];
    interval = setInterval(trocar, 3000);
}, 10000);