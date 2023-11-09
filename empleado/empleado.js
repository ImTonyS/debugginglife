const menu = document.querySelector('#nav-menu');
const menuList = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-link');

menu.addEventListener('click', function(){

    menuList.classList.toggle('nav-list--show');

});

links.forEach(function(link){

    link.addEventListener('click', function(){

        menuList.classList.remove('.nav-list--show')
    })

});

