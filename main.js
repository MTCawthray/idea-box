//---------Variables-------------//

var filterStarIdeaBtn = document.querySelector('.filter-ideas-button');
var searchIconBtn = document.querySelector('.search-icon');
var saveIdeaBtn = document.querySelector('.save-input');
var showStarIdeaBtn = document.querySelector('.show-starred-ideas-button');
var bodyInput = document.querySelector('.body-input');
var searchIdeasInput = document.querySelector('.search-ideas-box');
var titleInput = document.querySelector('.title-input');
var displaySection = document.querySelector('.idea-display-section');
var ideasList = [];
var newIdea;

//-----------Event Listeners----------//

// filterStarIdeaBtn.addEventListener('', );
saveIdeaBtn.addEventListener('click', function() {
createIdea(event);
});
// showStarIdeaBtn.addEventListener('', );
// bodyInput.addEventListener('', );
// searchIdeasInput.addEventListener('', );
// titleInput.addEventListener('', );
window.addEventListener('load', function() {
  renderIdea(event);
});

//-------------functions----------------//

function createIdea(event) {
  event.preventDefault();
  newIdea = new Idea({title:titleInput.value, body:bodyInput.value});
  console.log(newIdea);
  ideasList.push(newIdea);
  newIdea.saveToStorage(newIdea);
  renderIdea();
}

function renderIdea(event) {
  newIdea.getIdeasFromLocalStorage();
  displaySection.innerHTML = ``;
  for (var i = 0; i < ideasList.length; i++) {
    displaySection.innerHTML += `
    <article class="idea-card">
    <div class="card-header">
    <img src="./assets/star-active.svg" alt="Favorite current card">
    <img class="close-card" src="./assets/menu-close.svg" alt="Close current card">
    </div>
    <div class="card-content">
    <h3>${ideasList[i].title}</h3>
    <p>${ideasList[i].body}</p>
    </div>
    <div class="card-footer">
    <img src="./assets/comment.svg" alt="Add comment to card">
    <p>Comment</p>
    </div>
    </article>
    `
  }
}
