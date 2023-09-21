# Homework 1 -- Fake Stack Overflow with HTML/CSS/JavaScript

**Remember to list your contribution in the sections shown below before the due date.**

## Team Member 1 contribution

## Team Member 2 contribution


## TODO - September 18

- Make it so the "Questions" button clears the "Ask Question Form" and returns to the main home screen
- Add a class `Tag` with the `name` and `id` fields, plus a static counter field to increment the id 
- Add a function to the `model` called `getTagIds(tagNames)`. The function accepts an array of tag names (strings) and returns an array of tag ids for the given tags. If there is a tag in `tagNames` that doesn't exist in the model, the function should create and add a new `Tag` object to the model with the name.
// add methods to query, insert, and update the model here. E.g.,
  // getAllQstns() {
  //   return this.data.questions;
  // }


  // getTagIds = (tagNames) => {
    
  // }



  /**
   * Extracts all tags from the search text that comes in from the search bar. There
   * is a part about this in the PDF for the HW.
   * 
   * @param {string} searchText the string from the search bar
   */
  // getTagsFromSearchText = (searchText) => {

  // }

  /**
   * Gets all of the questions with given tag id.
   * @param {string} tagId 
   * @return {Array<Question>} an array of question objects
   */
  // getQuestionsByTagId = (tagId) => {

  // }

  /**
   * Gets all of the questions where the text or title of the question contains
   * the given phrase. This is related to searching, sorry I didn't have time to
   * describe it better.
   * 
   * @param {string} phrase
   */
  // getQuestionsByTextOrTitle = (phrase) => {

  // }

  /** SORTING / FILTERING */

  /**
   * Get all of the questions that have not been answered
   */
  // getAllUnansweredQuestions = () => {

  // }

  // getNewestQuestions = () => {

  // }