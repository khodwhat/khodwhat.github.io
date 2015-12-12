(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
  
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    // $('.slider').slider({full_width: true});
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});
