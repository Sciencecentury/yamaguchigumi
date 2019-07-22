//CSVファイルを読み込む関数getCSV()の定義
function getCSV(csv,ulId){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get",csv, true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	convertCSVtoArray(req.responseText,ulId); // 渡されるのは読み込んだCSVデータ
    }
}
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str,ulId){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
 //表示
 for(var cnt=1;cnt<tmp.length-1;++cnt){
 	 var w = result[cnt][0]+":"+result[cnt][1];
 	 $(ulId).append('<li>'+w+'</li>');
 }
 
 

}
 
getCSV("salesByPrefecture2016.csv",'#print2016'); //最初に実行される
getCSV("salesByPrefecture2017.csv",'#print2017'); //最初に実行される	
getCSV("salesByPrefecture2018.csv",'#print2018'); //最初に実行される
