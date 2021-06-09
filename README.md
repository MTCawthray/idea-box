# IdeaBox

IdeaBox is a web app where you can jot down and save your ideas! Simply fill out the form, click save, and watch as your idea is converted to a card on the bottom of the page. You can add as many as cards as you'd like, delete the ones you no longer need, and star items to add them to your favorites.

- [App Link](https://mtcawthray.github.io/idea-box/)
- [Repo Link](https://github.com/MTCawthray/idea-box)


## Installation

IdeaBox requires no installation; all features can be accessed via the web app, and local storage is used to keep track of the ideas the user has saved.

## Usage

*IdeaBox is divided into three main sections: the sidebar, the input form, and the idea display.*

**Sidebar:**
- The sidebar is located on the left side of the page. Below the logo are two options, "Filter Starred Ideas" and "Show Starred Ideas".
- *Show Starred Ideas:* This button will display only the idea cards the user has favorited.

**Input Form:**
- The input form is where the user will add a title and body to create a card.
- Once the title and body have been added, clicking 'Save' will create a new idea card using the provided information.
- **Search ideas:** by typing in this box, the idea card display will update to only show cards containing the search terms.
  - **Note:** this feature is not optional in the current version of this application.

**Idea Display:**
- This section contains all of the idea cards the user has generated.
  - If no cards have been generated, the page will instead display a default card containing instructions for the user to get started. The default card will also be displayed if the user deletes all of their idea cards.
- Each card contains three buttons: a star button, a close button, and a comment button.
- *Star:* this option will add the selected card to the user's favorites.
- *Close (X):* this option will delete the selected card from both the display section and the user's local storage.
- *Comment (+):* this option allows the user to add a comment to the card.
  - **Note:** this option is not functional in the current version of this application.

**Demonstration:**

![DEMO](https://user-images.githubusercontent.com/81891209/121286254-cf1a6900-c89c-11eb-8106-9ba1d5162f0f.gif)


## Project Status

This project is partially complete, though some functionality remains to be added. Users can still perform the app's essential functions such as creating and deleting idea cards, as well as filtering favorited cards.

## Contributors

This app was developed by:
- [Mark Cawthray](https://github.com/MTCawthray)
- [Raquel Hill](https://github.com/Raquelhill)
- [Joshua Horner](https://github.com/jphorner)

Project spec provided by the [Turing School of Software and Design.](https://turing.edu/)
