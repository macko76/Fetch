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

  $('.add-card').on('click', function(){
    $('.new-card').toggle();
    $('.cardUrl').focus();
  });

  // function addEditButton () {
  //   const $resourceCard = $('.card');
  //
  //   return $resourceCard;
  // };
  //
  // addEditButton();

});