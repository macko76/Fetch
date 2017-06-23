
$(() => {

  $.ajax({
    method: "GET",
    url: "/api/userProfile"
  }).done((resources) => {
    renderProfile(resources);
  });;


});

