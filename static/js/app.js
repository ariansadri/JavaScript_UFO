// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

var tbody = d3.select("tbody");

data.forEach(function(ufoInfo) {
    console.log(ufoInfo);
});

data.forEach(function(ufoInfo) {
    console.log(ufoInfo);
    var row = tbody.append("tr");
});

data.forEach(function(ufoInfo) {
    console.log(ufoInfo);
    var row = tbody.append("tr");
 
    Object.entries(ufoInfo).forEach(function([key, value]) {
     console.log(key, value);
    });
});
 
data.forEach(function(ufoInfo) {
    console.log(ufoInfo);
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO object
      var cell = row.append("td");
      cell.text(value);
    });
});

// Filtering the data 
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(data => tableData.datetime === inputValue);

  console.log(filteredData);
});




