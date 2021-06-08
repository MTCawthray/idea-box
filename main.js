//---------Variables-------------//
var filterStarIdeaBtn = document.querySelector('.filter-ideas-button');
var searchIconBtn = document.querySelector('.search-icon');
var saveIdeaBtn = document.querySelector('.save-input');
var showStarIdeaBtn = document.querySelector('.show-starred-ideas-button');
var bodyInput = document.querySelector('.body-input');
var searchIdeasInput = document.querySelector('.search-ideas-box');
var titleInput = document.querySelector('.title-input');
var displaySection = document.querySelector('.idea-display-section');
var closeCardBtn = document.querySelector('.close-card');
var star = document.querySelector('.star');
var ideasList = [];
var newIdea;

//-----------Event Listeners----------//
// filterStarIdeaBtn.addEventListener('', );
saveIdeaBtn.addEventListener('click', function() {
createIdea(event);
});
// showStarIdeaBtn.addEventListener('', );
// searchIdeasInput.addEventListener('', );
bodyInput.addEventListener('keyup', disableSaveButton);
titleInput.addEventListener('keyup', disableSaveButton);
window.addEventListener('load', renderIdea);
displaySection.addEventListener('click', closeCard);
displaySection.addEventListener('click', toggleStar);

//-------------functions----------------//

function toggleStar(event) {
  if (event.target.className === 'star') {
    event.target.src = './assets/star-active.svg';
    event.target.classList.add('active');
  } else if (event.target.className === 'star active') {
    event.target.src = './assets/star.svg';
    event.target.classList.remove('active');
  }
}

function closeCard(event) {
  if (event.target.className === 'close-card') {
    event.target.closest('article').remove();
  }
}

function createIdea(event) {
  event.preventDefault();
    saveIdeaBtn.disabled = false
    var newestIdea = new Idea({title:titleInput.value, body:bodyInput.value});
    newestIdea.saveToStorage();
    ideasList = [];
    renderIdea();
    clearIdeaInput();
    saveIdeaBtn.disabled = true;
};

function renderIdea() {
  ideasList = getIdeasFromLocalStorage();
  displaySection.innerHTML = ``;
  for (var i = 0; i < ideasList.length; i++) {
    displaySection.innerHTML += `
    <article class="idea-card" id="${ideasList[i].id}">
    <div class="card-header">
    <img class="star" src="./assets/star.svg" id="${ideasList[i].id}" alt="Favorite current card" >
    <img class="close-card" src="./assets/menu-close.svg" alt="Close current card" id="${ideasList[i].id}">
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
};

function getIdeasFromLocalStorage() {
  if (localStorage) {
    var list = [];
    for(var i =0; i < localStorage.length; i++){
      var retrieveIdea = localStorage.getItem(localStorage.key(i));
      var parsedIdea = JSON.parse(retrieveIdea);
      list.push(parsedIdea)
    }
  }
  return list;
};

function disableSaveButton() {
  if (titleInput.value === "" || bodyInput.value === "") {
    saveIdeaBtn.disabled = true;
    saveIdeaBtn.classList.add('save-input:disabled')
  } else {
    saveIdeaBtn.disabled = false;
  }
};

function clearIdeaInput() {
  titleInput.value = "";
  bodyInput.value = "";
};
