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

$(() => {

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    renderResources(resources);
  });

  

});



