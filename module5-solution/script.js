(function () {

  var categories = [
    { short_name: "L", name: "Lunch" },
    { short_name: "D", name: "Dinner" },
    { short_name: "S", name: "Sushi" },
    { short_name: "A", name: "Appetizers" }
  ];

  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  function loadRandomMenuItems() {
    var category = chooseRandomCategory(categories);
    console.log("Loading menu for category:", category.name);
  }

  window.loadRandom = loadRandomMenuItems;

})();
