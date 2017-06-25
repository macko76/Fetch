$(() => {

  $('#search-form').on('submit', function (e) {
    var searchTerm = req.params.name;
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "/user/resources/req.params.name",
      success: function (result) {
        console.log("works!");
        // fetchingAndRendering();
        // $('#search-form').each(function () {
        //   this.reset();
      },
    });
  });
});