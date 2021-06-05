class Idea {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.star = false;
    this.id = new Date().valueOf();
  }

  saveToStorage() {
    var newIdea = new Idea(titleInput.value, bodyInput.value);
    var stringifiedNewIdea = JSON.stringify(newIdea);
    localStorage.setItem('idea', stringifiedNewIdea);
    console.log(localStorage)
//push saved instance to ideas array
  }

  deleteFromStorage() {

  }

  updateIdea() {

  }
}


// module.exports = Idea;
