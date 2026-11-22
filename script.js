
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

document.addEventListener('keydown', function(event){
    if(event.key == 'Escape'){
        sideMenu.classList.remove('active');
    }
});

document.addEventListener('click', function(event){
    if(!sideMenu.contains(event.target) && event.target !== openBtn)
        sideMenu.classList.remove('active');
});



if (window.location.pathname.endsWith('products.html')) {

    const params = new URLSearchParams(window.location.search);
    const searchText = (params.get('search') || '').toLocaleLowerCase('tr-TR').trim();
    const products = document.querySelectorAll('.product-grid article');
    const noResults = document.getElementById('noResults');

    let foundCount = 0;


    products.forEach(function(product) {

        const productName = product.querySelector('h3').textContent.toLocaleLowerCase('tr-TR');

        if (productName.includes(searchText)) {
            product.style.display = '';
            foundCount++;
        } else {
            product.style.display = 'none';
        }

    });

    if(foundCount == 0){
        noResults.style.display = 'block';
    }
    else{
        noResults.style.display = 'none'
    }

}