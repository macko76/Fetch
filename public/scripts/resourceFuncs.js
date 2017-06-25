function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


// createResourceCard

function createResourceCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var resourceURL = resource.url;
  var imageURL = resource.image;

  return  `<div class="col-md-4">
            <div class="card">
            <p class="card-title">${escape(title)}</p>
           <a href="${escape(resourceURL)}"><img src="${escape(imageURL)}"></a> 
            <p>${escape(description)}</p>
            <div class="comment">Comment</div>
            <fieldset class="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label><br><br>
             </fieldset>
            <div class="comments-container"></div>
          </div></div>`;
          
};


function createUserResourceCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var resourceURL = resource.url;
  var imageURL = resource.image;
  var resourceID = resource.id;

  return `<div class="col-md-4">
             <div class="card">
             <div class=".card-toggle">
              <div class="row">
             <div class="col-md-10"><p class="card-title">${escape(title)}</p></div> 
              <div class="col-md-2"><button class='edit-button'>edit</button></div>
              </div>

           <a href="${escape(resourceURL)}"><img src="${escape(imageURL)}"></a> 
            <p>${escape(description)}</p>
            <div class="comment">Comment</div><fieldset class="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label><br><br>
             </fieldset>
            <div class="comments-container"></div>
        </div>
          
          <br><br>

           <div class="form-toggle" style="display:none">
              <form action="/api/resources/${resourceID}" name="newcardform" method="POST">
                <input class="form-control" type="text" name="cardUrl" placeholder="Resource URL"><br>
                <input class="form-control" type="text" name="cardImage" placeholder="Image"><br>
                <input class="cardTitle form-control" type="text" name="cardTitle" placeholder="Title"><br>
                <textarea class="form-control" name="cardDescription" placeholder="Description"></textarea> <br>
                <select class="form-control" name="cardCategory"><br>
                  <option value=1>Entertainment</option>
                  <option value=2>Food</option>
                  <option value=3>Education</option>
                  <option value=4>News</option>
                  <option value=5>Lifestyle</option>
                </select><br>
              <input class="form-control submit" type="submit" value="Submit" data-resourceId="${resourceID}">
              </form>
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
  // $card.parent().find('.card-toggle').slideToggle();
  });

  function reloadCards(success, error) {
    $.ajax({
        type: 'GET',
        url: '/user',
      })
      .done((resources) => {
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
        reloadCards();
        $('form').each(function(){
          this.reset();
        });
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
}

// renderResources

function renderResources(resources) {
  var $resources = $('.all-cards');
  $resources.empty();
  for(var i = 0; i < resources.length; i++) {
    var card = createResourceCard(resources[i]);
    var $card = $(card);
    $resources.append($card);
    addCommentsToCard($card, resources[i].id);
  }
};

function renderUserResources(resources) {
  var $resources = $('.user-cards');
  $resources.empty();
  for(var i = 0; i < resources.length; i++) {
    var card = createUserResourceCard(resources[i]);
    var $card = $(card);
    $resources.append($card);
    addEdit($card, resources[i].id);
// ----------------------------------------------------------------- clicking edit button
  //   $card.find('.edit-button').on('click', function(){ 
  //   $('.add-new-card').toggle();
  //   $('.hide-add-new-card').toggle();
  //   $('.new-card').slideToggle('slow');  
  //   $('.cardUrl').focus();

  // });

  }
};


//  renderProfile data

function renderProfileData(user) {
  var first = user.first_name;
  var last = user.last_name;
  var email = user.email;
  var image = user.profile_photo;

  return `<div class="user-info">
            <h1>${escape(first) + " " + escape(last)}</h1><br>
            <img src="${escape(image)}">
            <h3>${escape(email)}</h3>
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

// addComment

// showUserResources

// filterResultsByCategory

// filterResultsBySearchTerm
