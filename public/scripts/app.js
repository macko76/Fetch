$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(var user of users) {
      // $("<div>").text(user.first_name).appendTo($(".column"));
    }
  });;
});


$(() => {
  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    for(var item of resources) {
      $("<h1>").text(item.title).appendTo($(".column"));
      $("<div>").text(item.url).appendTo($(".column"));
      $("<div>").text(item.description).appendTo($(".column"));
    }
  });;
});
