$(() => {

  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      url: "/api/search",
      data: $(this).serialize(),
    })
      .done((resources) => {
        renderResources(resources);
        // renderUserResources(resources);
      });
  });

});
