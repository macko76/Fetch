$(() => {

  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderUserResources(resources);
  });;

  $('.add-card').on('click', function(){
    $('.new-card').toggle();
    $('.cardUrl').focus();
  });

});

