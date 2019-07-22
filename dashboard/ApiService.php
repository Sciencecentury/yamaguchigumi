<?php

/**
 * ルーティング情報用クラス。
 * 自身を配列で保持している点に注意。
 * Class Route
 */
class ApiService
{
    /**
     * DB接続
     * @return PDO
     */
    private function connect()
    {
        // 文字化け対策
        $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET CHARACTER SET 'utf8'");

        // データベースの接続
        try {

            $con = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASSWORD, $options);

            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo $e->getMessage();
            exit;
        }

        return $con;
    }

   
    //ここ。カラム名はDBにあわせて要調整。
    public function getSchooldata()
    {
        $con = $this->connect();

        $sql    = "SELECT Name,X,Y FROM schooldata";
        $params = array();

        $stmt = $con->prepare($sql);
        $stmt->execute($params);

        $ret = array();

        while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $line = array();

            $line[] = $result['Name'];
            $line[] = $result['X'];
            $line[] = $result['Y'];

            $ret[] = $line;
        }
        return $ret;
    }
    public function getShop()
    {
        $con = $this->connect();

        $sql    = "SELECT 店舗名,fX,fY FROM shop";
        $params = array();

        $stmt = $con->prepare($sql);
        $stmt->execute($params);

        $ret = array();

        while($result = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $line = array();

            $line[] = $result['店舗名'];
            $line[] = $result['fX'];
            $line[] = $result['fY'];

            $ret[] = $line;
        }
        return $ret;
    }

}
