
function attachClickHandlers() {
  $(".question-cell").each((index, questionElement) => {
    // categoryIndex is used to look up the jeopardy question for this element.
    let categoryIndex = $(questionElement).attr("data-category");
    let moneyValue = $(questionElement).text().replace("$", "");
    $(questionElement).click(() => {
      questionOnClick(categoryIndex, moneyValue);
    });
  });
}


function questionOnClick(categoryIndex, moneyValue) {
  let question = getQuestion(categoryIndex, moneyValue);
  $("#question-modal-title").html(
    categories[categoryIndex] + " - $" + moneyValue
  );
  $("#question-modal-text").html(question.question_text);
  $("#question-modal-show-answer")
    .click(() => {
      answerOnClick(categoryIndex, moneyValue);
      console.log("I just got clicked, I wish I could do more though!");
    })
    .show();

  $("#question-modal-close").click(() => {
    hideQuestionPopup();
    console.log("I just got clicked, I wish I could do more though!");
  });
  $("#question-modal").modal("show");
}

// This helper function uses the categoryIndex and moneyValue to return the question.
function getQuestion(categoryIndex, moneyValue) {
  return questions_by_category[categoryIndex][moneyValue];
}

// Hides the question popup.
function hideQuestionPopup() {
  $("#question-modal").modal("hide");
}

// This function is the click handler for the "show answer" button.
function answerOnClick(categoryIndex, moneyValue) {
  let question = getQuestion(categoryIndex, moneyValue);
  $("#question-modal-show-answer").hide();
  $("#question-modal-text").html(question.answer_text);
}
