//toggleMenu
document.querySelector('header .container nav span.toggle').onclick = function(){
if(document.querySelector('header .container nav .mobile').style.transform === "translateY(-200%)"){
document.querySelector('header .container nav .mobile').style.transform = "translateY(-9%)";
this.classList.add('active');
}else{
    document.querySelector('header .container nav .mobile').style.transform= "translateY(-200%)";
    this.classList.remove('active');

    }
};
//slider
var sliderImage = Array.from(document.querySelectorAll('.landing img')),
sliderLength = sliderImage.length,
currentSlide = 1,
nextBtn = document.querySelector('.landing .right'),
preBtn = document.querySelector('.landing .left');

nextBtn.onclick = nextImg ; 
preBtn.onclick = previousImg ;



let bulletsContainer = document.createElement('ul');
bulletsContainer.id = "bullets-balls";
for(let i = 1 ; i <= sliderImage.length; i++){
    let bullets = document.createElement('li');
    bullets.setAttribute('index-number', i);
    bulletsContainer.appendChild(bullets);
    document.querySelector('.landing').appendChild(bulletsContainer);
};
let liBullets = Array.from(document.querySelectorAll('#bullets-balls li'));
checker();
function nextImg(){
    if(!nextBtn.classList.contains('disapled')){
        currentSlide++;
        checker();
    }
    };
    function previousImg(){
        if(!preBtn.classList.contains('disapled')){
            currentSlide--;
            checker();
        }
    };

function checker(){
    removeActive()
    sliderImage[currentSlide - 1].classList.add('active');
    bulletsContainer.children[currentSlide - 1].classList.add('active');
    if(currentSlide == 1){
        preBtn.classList.add('disapled'); 
    }else{
        preBtn.classList.remove('disapled'); 

    };
    if(currentSlide == sliderLength){
        nextBtn.classList.add('disapled'); 
    }else{
        nextBtn.classList.remove('disapled'); 

    };
    for(let i = 0; i < liBullets.length; i++){
        liBullets[i].onclick = function(){
            currentSlide = parseInt(this.getAttribute('index-number'));
            checker();}
    }

};

function removeActive(){
    sliderImage.forEach((img) =>{
        img.classList.remove('active')
    });
    liBullets.forEach((li) =>{
        li.classList.remove('active')
    } );
};

setInterval(function(){
    if(currentSlide == sliderLength){
        currentSlide = 1;
        checker();
    }else{
        currentSlide++;
        checker();
    }
},3000)



