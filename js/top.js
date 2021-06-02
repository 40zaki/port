'use strict';

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.sp_gmenu').addClass('active');
      } else {
          $('.sp_gmenu').removeClass('active');
      }
  });
});

