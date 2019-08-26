// from data.js
var tableData = data;

// YOUR CODE HERE!
var formControl = d3.select("#filter-btn")
console.log(formControl)
formControl.on("click", function(){
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(dataPoint => dataPoint.datetime === inputValue)
  //console.log(filteredData)

  var t_body = d3.select("tbody");
function createTable(filteredData){
    t_body.html("")
for (var i = 0; i < filteredData.length; i ++) {
    // console.log(tableData[i])
    var object1 = filteredData[i]
    var tr = t_body.append("tr")
    for (var key in object1) {
        //console.log(object1[key])
        var td = tr.append("td")
        td.text(object1[key])
      }
}
} 

createTable(filteredData);
});

