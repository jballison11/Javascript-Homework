// from data.js
var tableData = data;

// YOUR CODE HERE!
var t_body = d3.select("tbody");
function createTable(tableData){
    t_body.html("")
for (var i = 0; i < tableData.length; i ++) {
    // console.log(tableData[i])
    var object1 = tableData[i]
    var tr = t_body.append("tr")
    for (var key in object1) {
        console.log(object1[key])
        var td = tr.append("td")
        td.text(object1[key])
      }
}
}
createTable(tableData)