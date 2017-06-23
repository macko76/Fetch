$(() => {

  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderResources(resources);
  });
  ;

  $('<span>').addClass('glyphicon glyphicon-search');
  .attr('aria-hidden', true);
  .appendTo($resourceCard);
  };


  // function addEditButton () {
  //   const $resourceCard = $('.card');
  //
  //   return $resourceCard;
  // };
  //
  // addEditButton();

});