//CSVから２次元配列に変換
function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  //chart.jsのdataset用の配列を用意
  var tmpLabels = [],
      tmpData1 = [],
      tmpData2 = [],
      tmpData3 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
    tmpData2.push(data[row][2])
    tmpData3.push(data[row][3])
  };

  //chart.jsで描画
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: tmpLabels,
      datasets: [
        { label: "2016", data: tmpData1, backgroundColor: "#b3d7ff" },
        { label: "2017", data: tmpData2, backgroundColor: "#b3bbff" },
        { label: "2018", data: tmpData3, backgroundColor: "#cbbbff" }
      ]
    },

    options: {
      title: {
        display: true,
        text: '年別 売上数'
      },
      scales:{
        yAxes: [{
        // drawBorder: false,
          ticks: {
            suggestedMax: 1400000,
            suggestedMin: 200000,
           stepSize: 200000
         }
       }],
      }
    }
  });
}

function main() {
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  var filePath = 'SalesPerStore.csv';
  req.open("GET", filePath, true);
  req.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart(data);
  }
  req.send(null);
}

main();