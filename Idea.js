class Idea {
  constructor(ideaDetails) {
    this.title = ideaDetails.title;
    this.body = ideaDetails.body;
    this.star = false;
    this.id = ideaDetails.id || new Date().valueOf();
  }
  saveToStorage() {
    var stringifiedNewIdea = JSON.stringify(this);
    var stringifiedId = JSON.stringify(this.id);
    localStorage.setItem(stringifiedId, stringifiedNewIdea);
  }
  deleteFromStorage(event) {
    if (event.target.className === 'close-card') {
      localStorage.removeItem(event.target.id);
      renderIdea();
    }
  }
  updateIdea(event) {
    var idea;
    if (event.target.className === 'star active') {
      this.star = true;
      idea = localStorage.getItem(this.id);
      var parsedIdea = JSON.parse(idea);
      parsedIdea.star = true;
      var stringifiedIdea = JSON.stringify(parsedIdea);
      localStorage.setItem(this.id, stringifiedIdea);
      console.log("inside updateIdea in class", this.star);
    } else if (event.target.className === 'star') {
      this.star = false;
      idea = localStorage.getItem(this.id);
      var parsedIdea = JSON.parse(idea);
      parsedIdea.star = false;
      var stringifiedIdea = JSON.stringify(parsedIdea);
      localStorage.setItem(this.id, stringifiedIdea);
    }
  }
};
