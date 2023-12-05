let numCategories = categories.length;
let questionValues = [100, 200, 300, 400, 500];


function renderQuestions() {
  for (var i = 0; i < numCategories; i++) {
    var questionCells = "<div class='questions-column'>" ;
    for (var v = 0; v < questionValues.length; v++) {
       questionCells +=
        "<div class='question-cell' data-category=" + i + ">" +   
        questionValues[v] +
        "</div>";
      console.log(questionValues[v]);
    }
    questionCells += "</div>";
    $("#questions").append(questionCells);
  }
}
