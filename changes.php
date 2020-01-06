<?php
session_start();
//ini_set("display_errors", 1);
 //zerror_reporting(E_ALL);
header("Content-type: text/html; charset=utf-8");
 $users    = $_REQUEST["users"];
 $days     = $_REQUEST["days"];
 $textarea = $_REQUEST["textarea"];
 $id = $_REQUEST ["id"];

$link = mysqli_connect("localhost", "root", "", "notebook")or die("Ошибка мля ");
mysqli_query($link,"UPDATE `daily_planner` SET  id ='$users', days='$days', textarea ='$textarea' WHERE");

$link = mysqli_connect("localhost", "root", "", "notebook") or die("Ошибка бля" .mysqli_error());
$query ="SELECT * FROM `daily_planner` WHERE id =".$_REQUEST["id"];
$result = mysqli_query($link, $query);
    if($result && mysqli_num_rows($result)>0)
    {
        $row = mysqli_fetch_row($result); // получаем первую строку
        $users = $row[1];
        $textarea = $row[2];
        $days = $row[3];

    }
echo"hi";
//echo json_encode($result);
// закрываем подключение

//header("Location: update.php");
mysqli_close($link);

?>
