// var Idea = require('./Idea.js');
var filterStarIdeaBtn = document.querySelector('.filter-ideas-button');
var searchIconBtn = document.querySelector('.search-icon');
var saveIdeaBtn = document.querySelector('.save-input');
var showStarIdeaBtn = document.querySelector('.show-starred-ideas-button');
var bodyInput = document.querySelector('.body-input');
var searchIdeasInput = document.querySelector('.search-ideas-box');
var titleInput = document.querySelector('.title-input');
var ideas = [];

// filterStarIdeaBtn.addEventListener('', );
saveIdeaBtn.addEventListener('click', createIdea);
// showStarIdeaBtn.addEventListener('', );
// bodyInput.addEventListener('', );
// searchIdeasInput.addEventListener('', );
// titleInput.addEventListener('', );
function createIdea() {
  var idea = new Idea(titleInput.value, bodyInput.value);
  // saveToStorage();
  console.log(idea, ideas);
  ideas.push(idea);
}
