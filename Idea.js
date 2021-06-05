class Idea {
  constructor(ideaDetails) {
    this.title = ideaDetails.title;
    this.body = ideaDetails.body;
    this.star = false;
    this.id = new Date().valueOf();
  }

  saveToStorage() {
    //pull from ideas array for value below
    //create a for loop to itterate through ideas array
    //at each index, we should stringify and set to local saveToStorage
    // var newIdea = new Idea(titleInput.value, bodyInput.value);
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
