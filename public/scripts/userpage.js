
$(() => {

  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderResources(resources);
  });;


});

