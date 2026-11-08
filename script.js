
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const sideMenu = document.querySelector('.side-menu');

// menu butonuna tıklayınca 
openBtn.addEventListener('click', function() {
    sideMenu.classList.add('active');
});

//   Kapat tıklayınca menüden active sınıfını çıkar
closeBtn.addEventListener('click', function() {
    sideMenu.classList.remove('active');
});