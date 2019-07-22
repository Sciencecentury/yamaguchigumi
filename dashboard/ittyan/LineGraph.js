function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 1; i < lines.length-1; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  var tmpLabels = [],
      tmpData1 = [],
      tmpData2 = [],
      tmpData3 = [];
  for (var row in data) {
    tmpLabels.push(data[row][1])
    tmpData1.push(data[row][3])
    tmpData2.push(data[row][4])
    tmpData3.push(data[row][5])
  };

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tmpLabels,
      datasets: [
        { label: "2016", data: tmpData1, backgroundColor: "#b3d7ff" },
        { label: "2017", data: tmpData2, backgroundColor: "#b3bbff" },
  { label: "2018", data: tmpData3, backgroundColor: "#cbb3ff" }
      ]
    },

    options: {
      yAxes: [{
        drawBorder: false,
        ticks: {
          min: 0,
          max: 30000,
          stepSize: 100
        }
      }],
      xAxes: [{ }]
    }
  });
}
function main() {
  var req = new XMLHttpRequest();
  var filePath = 'ken_v.csv';
  req.open("GET", filePath, true);
  req.onload = function() {
    data = csv2Array(req.responseText);
    drawBarChart(data);
  }
  req.send(null);
}

main();
