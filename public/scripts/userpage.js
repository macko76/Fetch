$(() => {

  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderResources(resources);
  });;

  $('.add-card').on('click', function(){
    $('.new-card').toggle();
    $('.cardUrl').focus();
  });

});

