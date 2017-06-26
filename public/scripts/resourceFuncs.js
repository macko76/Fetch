function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createCategoryIcon(categoryID) {
 if (categoryID == 1) {
   return "🎥";
  } else if (categoryID == 2) {
    return "🥑";
  } else if (categoryID == 3) {
    return "📘";
  } else if (categoryID == 4) {
    return "📣";
  } else if (categoryID == 5) {
    return "🕶";
  } else {
    return "☹";
  }
};

// createResourceCard

function createResourceCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var resourceURL = resource.url;
  var imageURL = resource.image;
  var resourceID = resource.id;
  var category = createCategoryIcon(resource.category_id);

  return  `<div class="grid-item">
          <div class="card">
            <div class="grid-sizer"></div>
           <div class="row">
             <div class="col-md-11"><p class="card-title">${escape(title)}</p></div> 
              <div class="col-md-1"><button class='edit-button'>${category}</button></div>
              </div>
 
            <a href="${escape(resourceURL)}"><img src="${escape(imageURL)}"></a> 
            <p>${escape(description)}</p>             
              
              <form class="rating-form-dec" action="/api/resources/${resourceID}/dec" method="POST">
              <input class='heart' type="submit" value="✗"></form><form class="rating-form-inc" action="/api/resources/${resourceID}/inc" method="POST">
              <input class='heart' type="submit" value="♥︎">
              </form>

            <div class="comment">Comment</div>
            <div class="comments-container"></div>
             <br><br>
          </div></div>
          </div>`;
          
};


function createUserResourceCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var resourceURL = resource.url;
  var imageURL = resource.image;
  var resourceID = resource.id;

  return `<div class="grid-item">
          <div class="card">
            <div class="grid-sizer"></div>
              <div class="row">
             <div class="col-md-10"><p class="card-title">${escape(title)}</p></div> 
              <div class="col-md-2"><button class='edit-button'>✎</button></div>
              </div>

           <a href="${escape(resourceURL)}"><img src="${escape(imageURL)}"></a> 
            <p>${escape(description)}</p>

              <form class="rating-form-dec" action="/api/resources/${resourceID}/dec" method="POST">
              <input class='heart' type="submit" value="✗"></form><form class="rating-form-inc" action="/api/resources/${resourceID}/inc" method="POST">
              <input class='heart' type="submit" value="♥︎">
              </form>

            <div class="comment">Comment</div>
            <div class="comments-container"></div>
        
          
          <br><br>

           <div class="form-toggle" style="display:none">
              <form action="/api/resources/${resourceID}" name="newcardform" method="POST">
                <input class="form-control" type="text" name="cardUrl" placeholder="Resource URL" value="${resourceURL}"><br>
                <input class="form-control" type="text" name="cardImage" placeholder="Image" value="${imageURL}"><br>
                <input class="cardTitle form-control" type="text" name="cardTitle" placeholder="Title" value="${title}"><br>
                <textarea class="form-control" name="cardDescription" placeholder="Description" value="${description}"></textarea> <br>
                <select class="form-control" name="cardCategory"><br>
                  <option value=1>Entertainment</option>
                  <option value=2>Food</option>
                  <option value=3>Education</option>
                  <option value=4>News</option>
                  <option value=5>Lifestyle</option>
                </select><br>
              <input class="form-control" type="submit" value="Submit">
              </form>
        </div>
         </div>
        </div>
        </div>
          `;
 };

// editResource 

function addEdit($card, resourceID) {
  var url = `/api/resources/${resourceID}`;

  $card.find('.edit-button').on('click', function () {
  $card.find('.form-toggle').slideToggle();
  $card.find('.card-toggle').slideToggle();
  });

  function reloadCards() {
    $.ajax({
      method: "GET",
      url: "/api/user"
    }).done((resources) => {
      renderUserResources(resources);
    });
    }

  $card.find('form').on('submit', function(e){
    var resourceID = resourceID;
    e.preventDefault();
    $.ajax({
      method: "post",
      url: url,
      data: $(this).serialize(),
      dataType: "json",
      success: function(result, error){
        $('form').each(function(){ this.reset(); });
        reloadCards();
       },
      error: function(error){
        console.log(error); 
      }
    });
  });
};

// ------ add comment to card -------------

function addCommentsToCard($card, resourceID) {
  var url = `/api/comments/${resourceID}`;

  function getComments(success, error) {
    $.ajax({
        type: 'get',
        url: url,
        success: function(commentsArray) {
            success(commentsArray)
        },
        error: error
    });
  }

  $card.find('.comments-container').comments({
      getComments: getComments,
      postComment: function(commentJSON, success, error) {
          $.ajax({
              type: 'post',
              url: url,
              data: commentJSON,
              success: function(result){
                $card.find('.comments-container').comments({
                  getComments: getComments
                 })
               },
              error: function(err) {
                console.log("post error", err);
                error(err);
              }
          });
      }
  });
    $card.find('.comment').on('click', function () {
    $card.find('.comments-container').slideToggle();
  });
  
  
}

// renderResources

function renderResources(resources) {
  var $resources = $('.all-cards');
  $resources.empty();
  for(var i = 0; i < resources.length; i++) {
    var card = createResourceCard(resources[i]);
    var $card = $(card);
    $resources.prepend($card);
    addIndexFavClickHandlers($card, resources[i].id);
    addCommentsToCard($card, resources[i].id);
  }
};
    


function renderUserResources(resources) {
  var $resources = $('.user-cards');
  $resources.empty();
  for(var i = 0; i < resources.length; i++) {
    var card = createUserResourceCard(resources[i]);
    var $card = $(card);
    var resourceID = resources[i].id;
    $resources.prepend($card);
    addEdit($card, resources[i].id);
    addUserFavClickHandlers($card, resourceID);
    addCommentsToCard($card, resourceID);
  }
};


//  renderProfile data

function renderProfileData(user) {
  var first = user.first_name;
  var last = user.last_name;
  var email = user.email;
  var image = user.profile_photo;

  return `
          <h1>Your Profile</h1>
          <br><br>
          <div class="row">
          <div class="col-md-4">
          <img src="${escape(image)}">
          </div>
          
          <div class="col-md-8">
          <br><br>
            <h3>👤&nbsp;&nbsp;&nbsp; ${escape(first) + " " + escape(last)}</h3>
            <h3>✉️&nbsp;&nbsp;&nbsp; ${escape(email)}</h3>
            <h3>📷&nbsp;&nbsp;&nbsp; ${escape(image)}</h3>
          </div>
          </div>`;

};

function renderProfile(data) {
  var $profile = $('.user-info');
  $profile.empty();
  var $card = renderProfileData(data[0]);
  $profile.prepend($card);
};

// getURLMetaData

// addNewResource

// editResource

// addRating

function addUserFavClickHandlers($card, resourceID) {

  function addUserFavourite($card, resourceID) {
  var url = `/api/resources/${resourceID}`;

    $card.find('.rating-form-inc').on('submit', function(e){
      var resourceID = resourceID;
      e.preventDefault();
      $.ajax({
        method: "post",
        url: url + '/inc',
        success: function(result, error){
        },
        error: function(error){
          console.log(error); 
        }
      });
    });

  };

  function removeUserFavourite($card, resourceID) {
    var url = `/api/resources/${resourceID}`;


    $card.find('.rating-form-dec').on('submit', function(e){
      var resourceID = resourceID;
      e.preventDefault();
      $.ajax({
        method: "post",
        url: url + '/dec',
        success: function(result, error){
        },
        error: function(error){
          console.log(error); 
        }
      });
    });
  };

  addUserFavourite($card, resourceID);
  removeUserFavourite($card, resourceID);
};

function addIndexFavClickHandlers($card, resourceID) {

  function addIndexFavourite($card, resourceID) {
  var url = `/api/resources/${resourceID}`;



    $card.find('.rating-form-inc').on('submit', function(e){
      var resourceID = resourceID;
      e.preventDefault();
      $.ajax({
        method: "post",
        url: url + '/inc',
        success: function(result, error){
        },
        error: function(error){
          console.log(error); 
        }
      });
    });

  };

  function removeIndexFavourite($card, resourceID) {
    var url = `/api/resources/${resourceID}`;


    $card.find('.rating-form-dec').on('submit', function(e){
      var resourceID = resourceID;
      e.preventDefault();
      $.ajax({
        method: "post",
        url: url + '/dec',
        success: function(result, error){
        },
        error: function(error){
          console.log(error); 
        }
      });
    });
  };

  addIndexFavourite($card, resourceID);
  removeIndexFavourite($card, resourceID);
};