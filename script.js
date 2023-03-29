const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    slidesPerView : 1 ,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      900: {
        slidesPerView: 2,
        setWrapperSize: true
      },
    }
  });