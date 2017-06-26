$(() => {

  // Ajax handler for search on main resources page
  $("#search-form-main").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      url: "/api/search/main",
      data: $(this).serialize(),
    })
      .done((resources) => {
        renderResources(resources);
      });
  });

  // Ajax handler for search on user resources page
  $("#search-form-user").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      url: "/api/search/user",
      data: $(this).serialize(),
    })
      .done((resources) => {
        renderUserResources(resources);
      });
  });

});
