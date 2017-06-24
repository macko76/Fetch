  const fetchNewComment = function() {
   $('#comments-container').comments({
      getComments: function(success, error) {
        $.ajax({
            type: 'get',
            url: '/api/comments/',
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

     $('#comments-container').comments({
      getComments: function(success, error) {
        $.ajax({
            type: 'get',
            url: '/api/comments/',
            success: function(commentsArray) {
                success(commentsArray)
            },
            error: error
        });
      }
   });

   $('#comments-container').comments({
    postComment: function(commentJSON, success, error) {
        $.ajax({
            type: 'post',
            url: '/api/comments/',
            data: commentJSON,
            success: function(result){
           fetchNewComment();
           },
            error: function(err) {
              console.log("post error", err);
              error(err);
            }
        });
    }
  });


    $('.comment').on('click', function() {
    $('#comments-container').slideToggle('slow');
    });


  });

});



