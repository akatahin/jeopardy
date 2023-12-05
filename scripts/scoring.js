
function renderScoringButtons() {
  $("#score").show();

  $("#correct-button").click(function () {
    $("#current-score").html(addToScore());
  });

  $("#incorrect-button").click(function () {
    
    $("#current-score").html(subtractFromScore());
  });

  $("#question-modal-show-answer").click(function () {
    $("#question-modal-actions").hide();
    $("#scoring-actions").show();
  });
}


function subtractFromScore() {
  let newScorer = getCurrentScore(); 
  newScorer = newScorer - currentQuestionValue;
  return newScorer;
 
};

function addToScore() {
  let newScorer = getCurrentScore(); 
  newScorer = newScorer + currentQuestionValue;
  return newScorer;
};
