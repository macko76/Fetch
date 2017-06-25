$(() => {

  $("#search-form").on('submit', function (event) {
    event.preventDefault();
    // const searchTerm = request.params;
    $.ajax({
      method: "GET",
      url: `/api/resources/search`
    }).done((resources) => {
      renderUserResources(resources);
    });
  });
});
