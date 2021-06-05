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

    var stringifiedNewIdea = JSON.stringify(this);
    var stringifiedId = JSON.stringify(this.id);
    localStorage.setItem(stringifiedId, stringifiedNewIdea);
    console.log("local storage -->", localStorage)
//push saved instance to ideas array
  }

  deleteFromStorage() {

  }

  updateIdea() {

  }

  getIdeasFromLocalStorage() {
    // var retrieveIdeas = localStorage.getItem('idea');
    ideasList = [];
    if (localStorage) {
      for(var i =0; i < localStorage.length; i++){
        var retrieveIdea = localStorage.getItem(localStorage.key(i));
        var parsedIdea = JSON.parse(retrieveIdea);
        ideasList.push(parsedIdea);
}
//localStorage.length will be helpful here
//localStorage.key can help
//will have to get them, parse them, and know the key
//check out mdn doc on localStorage.key for more details

  }

}
}

// module.exports = Idea;
