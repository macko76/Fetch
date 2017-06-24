
const fetchingAndRendering = function() {
  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderResources(resources);
  });
}

$(() => {

  fetchingAndRendering();

  $('.add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });

   $('.hide-add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });


  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/user",
      data: $(this).serialize(),
      dataType: "json",
      success: function(result){
        console.log(result);
        fetchingAndRendering();
      },
      error: function(error){
        console.log(error); 
      }
    });
  });





});

