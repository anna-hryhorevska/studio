$(function() {
  //slider
  const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" >
      <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z"/>
    </svg>`;

  const carousel = $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    navContainer: '.benefits__navigation-buttons',
    onInitialized: function(e) {
      $('.benefits__navigation-counter').text(
        `${e.relatedTarget.current() + 1} / ${e.item.count}`,
      );
    },
    navText: [arrow, arrow],
  });

  carousel.on('changed.owl.carousel', function(e) {
    $('.benefits__navigation-counter').text(
      `${e.relatedTarget.current() + 1 + ' / ' + e.item.count}`,
    );
  });

  //mobile navigation
  $('#button-open, #button-closed').click(function() {
    $(this).toggleClass('open');
    $('#burger-menu').toggleClass('open');
    $('.overlley').toggleClass('open');
  });

  //scroll
  $('.flowing-scroll').on('click', function() {
    const dest = $(this).data('href');
    if (dest) {
      $('html').animate(
        {
          scrollTop: $(dest).offset().top,
        },
        300,
      );
    }
    return false;
  });
});
