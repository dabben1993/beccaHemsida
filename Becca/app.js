const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

/* Banner changer */
var images = [], x = -1;
images [0] = "Becca/img/Banner/067.jpg"
images [1] = "Becca/img/Banner/068.jpg"
images [2] = "Becca/img/Banner/069.jpg"
images [3] = "Becca/img/Banner/070.jpg"
images [4] = "Becca/img/Banner/071.jpg"
images [5] = "Becca/img/Banner/072.jpg"

function changeImage()
{
    var img = document.getElementById("hero");
    img.style.backgroundImage = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    }
    var timerid = setInterval(changeImage(), 1000);
}