$(document).ready(function () {

$( '.mob-about-slide' ).click(function() {
  $( '.about-combined' ).slideDown( "slow");
  $( '.mob-about-slide' ).hide();
  $( '.mob-about-slide-up' ).show();
});

$( '.mob-about-slide-up' ).click(function() {
  $( '.about-combined' ).slideUp( "slow");
  $( '.mob-about-slide' ).show();
  $( '.mob-about-slide-up' ).hide();
});

});