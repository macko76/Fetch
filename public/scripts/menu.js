$(() => {


 $('.dropdown-toggle').on('click', function() {
   $('.dropdown-menu').slideToggle();
  });

$('#logout').on('click', function() {
  $.ajax({
    method: "POST",
    url: "/logout"
  }).done((resources) => {
    window.location.href="/";
  });
});


});
