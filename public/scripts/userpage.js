
const fetchingAndRendering = function() {
  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderUserResources(resources);
  });
}

$(() => {

  fetchingAndRendering();

// ----------------------------------------------------------------- show new card
  $('.add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });

// ----------------------------------------------------------------- hide new card
  $('.hide-add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });


  $('edit-button').on('click', function(){
    $(this).find('.form-toggle').slideToggle();
  });
  
});
