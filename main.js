//---------Variables-------------//
var bodyInput = document.querySelector('.body-input');
var closeCardBtn = document.querySelector('.close-card');
var displaySection = document.querySelector('.idea-display-section');
var filterStarIdeaBtn = document.querySelector('.filter-ideas-button');
var saveIdeaBtn = document.querySelector('.save-input');
var searchIconBtn = document.querySelector('.search-icon');
var searchIdeasInput = document.querySelector('.search-ideas-box');
var showStarIdeaBtn = document.querySelector('.show-starred-ideas-button');
var star = document.querySelector('.star');
var titleInput = document.querySelector('.title-input');

var ideasList = [];
var newIdea;

//-----------Event Listeners----------//
bodyInput.addEventListener('keyup', disableSaveButton);
displaySection.addEventListener('click', function() { deleteFromIdeasList(event)
});
displaySection.addEventListener('click', function() {
  toggleStar(event)
});
saveIdeaBtn.addEventListener('click', function() {
  createIdea(event);
});
showStarIdeaBtn.addEventListener('click', showFavorites);
titleInput.addEventListener('keyup', disableSaveButton);
window.addEventListener('load', renderIdea);

//-------------functions----------------//
function showFavorites() {
  var favoritesList = [];
  for (var i = 0; i < ideasList.length; i++) {
    if (ideasList[i].star) {
      favoritesList.push(ideasList[i]);
    }
  }
  displaySection.innerHTML = '';
  for (var i = 0; i < favoritesList.length; i++) {
    displaySection.innerHTML += `
    <article class="idea-card" id="${favoritesList[i].id}">
    <div class="card-header">
    <img class="star" src="${starType(favoritesList[i])}" id="${favoritesList[i].id}" alt="Favorite current card" >
    <img class="close-card" src="./assets/menu-close.svg" alt="Close current card" id="${ideasList[i].id}">
    </div>
    <div class="card-content">
    <h3>${favoritesList[i].title}</h3>
    <p>${favoritesList[i].body}</p>
    </div>
    <div class="card-footer">
    <img src="./assets/comment.svg" alt="Add comment to card">
    <p>Comment</p>
    </div>
    </article>
    `
  }
};
function toggleStar(event) {
  if (event.target.className === 'star') {
    event.target.src = './assets/star-active.svg';
    event.target.classList.add('active');
  } else if (event.target.className === 'star active') {
    event.target.src = './assets/star.svg';
    event.target.classList.remove('active');
  }
  newIdea = findClick(event);
  newIdea.updateIdea(event);
};

function deleteFromIdeasList(event) {
  newIdea = findClick(event);
  newIdea.deleteFromStorage(event);
};

function findClick(event) {
  var idea;
  for (var i = 0; i < ideasList.length; i++) {
    if (Number(event.target.id) === ideasList[i].id) {
      var retrievedIdea = new Idea(ideasList[i]);
      idea = retrievedIdea;
    }
  }
  return idea;
};

function createIdea(event) {
  event.preventDefault();
    saveIdeaBtn.disabled = false
    newIdea = new Idea({title:titleInput.value, body:bodyInput.value});
    newIdea.saveToStorage();
    ideasList = [];
    renderIdea();
    clearIdeaInput();
    saveIdeaBtn.disabled = true;
};

function renderIdea() {
  if (!localStorage.length) {
    displaySection.innerHTML = `
    <article class="idea-card">
      <div class="card-header">
        <img src="./assets/star-active.svg" alt="Favorite current card">
      </div>
      <div class="card-content">
        <h3>Got an idea?</h3>
        <p>Let's get started!</p><p>Fill out the form above and click 'Save' to add your first card to this page.</p>
      </div>
      <div class="card-footer">
        <img src="./assets/comment.svg" alt="Add comment to card">
        <p>Comment</p>
      </div>
    </article>
    `;
  } else {
    ideasList = getIdeasFromLocalStorage();
    displaySection.innerHTML = ``;
    for (var i = 0; i < ideasList.length; i++) {
      displaySection.innerHTML += `
      <article class="idea-card" id="${ideasList[i].id}">
      <div class="card-header">
      <img class="star" src="${starType(ideasList[i])}" id="${ideasList[i].id}" alt="Favorite current card" >
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
  }
};

function starType(idea) {
  if (idea.star) {
    return "./assets/star-active.svg";
  } else {
    return "./assets/star.svg";
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
  if (titleInput.value === '' || bodyInput.value === '') {
    saveIdeaBtn.disabled = true;
    saveIdeaBtn.classList.add('save-input:disabled')
  } else {
    saveIdeaBtn.disabled = false;
  }
};

function clearIdeaInput() {
  titleInput.value = '';
  bodyInput.value = '';
};