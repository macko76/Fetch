
const fetchingAndRendering = function() {
  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderUserResources(resources);
  });
}


$(() => {

  fetchingAndRendering();

  $('.add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });

  $('.hide-add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });

  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/user/resources/create",
      data: $(this).serialize(),
      dataType: "json",
      success: function(result){
        fetchingAndRendering();
        $('form').each(function(){
          this.reset();
        });
        $('.new-card').slideToggle();
        $('.hide-add-new-card').toggle();   
        $('.add-new-card').toggle(); 
      },
      error: function(error){
        console.log(error); 
      }
    });
  });

//-------------------------------------------------
  $('select').change(function(e){
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/user/resources/create",
      data: $(this).serialize(),
      dataType: "json",
      success: function(result){
        fetchingAndRendering();
      },
      error: function(error){
        console.log(error); 
      }
    });
  });

});
