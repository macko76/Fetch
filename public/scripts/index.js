const fetchNewComment = function() {
  $('.comments-container').comments({
    getComments: function(success, error) {
      $.ajax({
          type: 'get',
          url: '/api/comments',
          success: function(commentsArray) {
              success(commentsArray)
          },
          error: error
      });
    }
  });
}

const fetchingAndRenderingIndex = function(){
  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    renderResources(resources);
  });
}

$(() => {

  $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
});

fetchingAndRenderingIndex();

//---------------------------------------------------------------- filtering index categories
  $('.form-control.card').change(function(){
    const categoryFilterValue = this.value;
    if (categoryFilterValue != 0) {
      $.ajax({
      method: "GET",
      url: `/api/resources/${categoryFilterValue}`
      }).done((resources) => {
        renderResources(resources);
      });
    } else {
      fetchingAndRenderingIndex();
    }  
  });

});



