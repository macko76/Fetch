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
