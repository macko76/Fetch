$(() => {

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    renderResources(resources);
  });;


});

