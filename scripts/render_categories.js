let categories = [
  "Robots",
  "Nicknames",
  "Famous first words",
  "Going 'dark'",
  "Fictional companies",
  "Painfully obvious"
];


function renderCategories() {
  for (var i = 0; i < categories.length; i++) {
    console.log(categories[i]);
    var categoriesCell =
      "<div class='category'><div class='category-cell'>" +
      categories[i].toUpperCase() +
      "</div></div>";
    $("#categories").append(categoriesCell);
  }
}