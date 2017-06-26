$(() => {

  $("#search-form").on('submit', function () {
    const searchText = this;
    console.log(searchText);
    $.ajax({
      method: "GET",
      url: `/api/search/${searchText}`
    }).done((resources) => {
      renderUserResources(resources);
    });
  });

});
