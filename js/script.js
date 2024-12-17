const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBox = document.querySelector('.nav-box');
const navLinks = document.querySelectorAll('.nav-link');


hamburgerMenu.onclick = function () {
    navBox.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navBox.classList.contains('active')) {
            navBox.classList.remove('active');
        }
    });
});

// ####### GALERIA #######

document.addEventListener( 'DOMContentLoaded', function () {
	var main = new Splide( '#main-carousel', {
	  type      : 'fade',
	  rewind    : true,
	  pagination: false,
	  arrows    : false,
	} );
  
  
	var thumbnails = new Splide( '#thumbnail-carousel', {
	  fixedWidth  : 100,
	  fixedHeight : 60,
	  gap         : 10,
	  rewind      : true,
	  pagination  : false,
	  isNavigation: true,
	  breakpoints : {
		600: {
		  fixedWidth : 60,
		  fixedHeight: 44,
		},
	  },
	} );
  
  
	main.sync( thumbnails );
	main.mount();
	thumbnails.mount();
  } );

  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.splide__slide img');

    const isLargeScreen = window.innerWidth > 1024;

    if (isLargeScreen) {
        images.forEach(img => {
            const currentSrc = img.getAttribute('src');
            const newSrc = currentSrc.replace('-phone', '-pc');
            img.setAttribute('src', newSrc); 
        });
    }
});


document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function () {
        const currentText = this.textContent;
        
        if (currentText === 'Dowiedz się więcej') {
            this.textContent = 'Zadzwoń: +48 999 888 777';
        } else {
            this.textContent = 'Dowiedz się więcej';
        }
    });
});






