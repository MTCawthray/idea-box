class Idea {
  constructor(ideaDetails) {
    this.title = ideaDetails.title;
    this.body = ideaDetails.body;
    this.star = false;
    this.id = new Date().valueOf();
  }

  saveToStorage() {
    var stringifiedNewIdea = JSON.stringify(this);
    var stringifiedId = JSON.stringify(this.id);
    localStorage.setItem(stringifiedId, stringifiedNewIdea);
  }

  deleteFromStorage() {

  }

  updateIdea() {

  }

}



// module.exports = Idea;
