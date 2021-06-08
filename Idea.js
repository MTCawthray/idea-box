class Idea {
  constructor(ideaDetails) {
    this.title = ideaDetails.title;
    this.body = ideaDetails.body;
    this.star = ideaDetails.star || false;
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
    debugger
    var idea;
    console.log('inside updateIdea', event)
    if (event.target.className === 'star active') {
      this.star = true;
      //update local saveToStorage
      idea = localStorage.getItem(this.id);
      var parsedIdea = JSON.parse(idea);
      console.log(parsedIdea.star);
      parsedIdea.star = true;
      var stringifiedIdea = JSON.stringify(parsedIdea);
      localStorage.setItem(this.id, stringifiedIdea);
// check if local storage is update, if not- why?
// reassess what arguments i'm passing in set item.
      console.log("inside updateIdea in class", this.star);
    } else if (event.target.className === 'star') {
      this.star = false;
    }
  }
};
