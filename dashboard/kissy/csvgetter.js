//CSVから２次元配列に変換
function csvArray(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawPieChart(data,year,myChart) {
  //chart.jsのdataset用の配列を用意
  var tmpLabels = [],
      tmpData1 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
  };


  //chart.jsで描画
  var ctx = document.getElementById(myChart).getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
    labels: tmpLabels,render: 'label',
      	datasets: [{ 
 					label: year, 
 					data: tmpData1,
 			      	backgroundColor: [
                 "rgb(255,255,255)",
                 "#e0ffff",
                 "#afeeee",
                 "#add8e6",
                 "#87cefa",
                 "#00bfff",
                 "#6495ed",
                 "#1e90ff",
                 "#0000ff",
                 "#00008b",
                 "#191970",
                 "#0d0d4e",
   				  	 	"rgb(255,255,255)"
     				],
					borderColor:[
 			      		"rgb(255,255,255)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
     					"rgb(135 206 235)",
   				  	 	"rgb(255,255,255)"						
          ],
          lineAtIndex: 0,	
 		}]
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

function execute(filePath,nen,chart) {
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  req.open("GET", filePath, true);
  req.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data = csvArray(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawPieChart(data,nen,chart);
  }
  req.send(null);
}
execute("com2016.csv",2016,"Chart2016");
execute("com2017.csv",2017,"Chart2017");
execute("com2018.csv",2018,"Chart2018");