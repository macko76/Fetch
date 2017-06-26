const fetchingAndRendering = function() {
  $.ajax({
    method: "GET",
    url: "/api/user"
  }).done((resources) => {
    renderUserResources(resources);
  });
}

$(() => {

  $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
  });


  fetchingAndRendering();

// ----------------------------------------------------------------- show new card
  $('.add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });

// ----------------------------------------------------------------- hide new card
  $('.hide-add-new-card').on('click', function(){
    $('.add-new-card').toggle();
    $('.hide-add-new-card').toggle();    
    $('.new-card').slideToggle();
    $('.cardUrl').focus();
  });

// ----------------------------------------------------------------- add card
  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/resources/create",
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

//---------------------------------------------------------------- filtering user categories
 $('.form-control.card').change(function(){
    const categoryFilterValue = this.value;
    if (categoryFilterValue != 0) {
      $.ajax({
      method: "GET",
      url: `/api/resources/user/${categoryFilterValue}`
      }).done((resources) => {
        renderUserResources(resources);
      });
    } else {
      fetchingAndRendering();
    }  
  });

//---------------------------------------------------------------- filtering user likes
  $('.form-control.like').change(function(){
    const likesFilterValue = this.value;
    console.log(likesFilterValue);
    if (likesFilterValue != 0) {
      $.ajax({
      method: "GET",
      url: `/api/resources/user/likes/${likesFilterValue}`
    }).done((resources) => {
      console.log(resources);
        renderUserResources(resources);
      });
    } else {
      fetchingAndRendering();
    }  
  });


});