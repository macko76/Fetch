// createResourceCard

function createResourceCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var imageURL = resource.url;

  return `<div class="column">
            <h1>${title}</h1><br>
            <img src="${imageURL}">
            <h3>${description}</h3>
          </div>`;

};

// renderResources

function renderResources(resources) {
  var $resources = $('.cards');
  $resources.empty();
  for(var i = 0; i < resources.length; i++) {
    var $card = createResourceCard(resources[i]);
    $resources.prepend($card);
  }
};



//  renderProfile data

function renderProfileData(user) {
  var first = user.first_name;
  var last = user.last_name;
  var email = user.email;
  var image = user.profile_photo;

  return `<div class="user-info">
            <h1>${first} ${last}</h1><br>
            <img src="${image}">
            <h3>${email}</h3>
          </div>`;

};

function renderProfile(data) {
  console.log(data);
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

// function renderUserResources(resources) {
//   var $resources = $('.cards');
//   $resources.empty();
//   for(var i = 0; i < resources.length; i++) {
//     var $card = createResourceCard(resources[i]);
//     $resources.prepend($card);
//   }
// };

// filterResultsByCategory

// filterResultsBySearchTerm
