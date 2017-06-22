$(() => {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    
  });;

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    renderResources(resources);
  });;


});

