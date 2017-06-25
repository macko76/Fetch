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

  fetchingAndRenderingIndex();

//---------------------------------------------------------------- filtering index categories
  $('select').change(function(){
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



