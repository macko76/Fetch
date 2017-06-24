
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

  $('.add-card').on('click', function(){
    $('.add-card').toggle();
    $('.new-card').toggle();
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

