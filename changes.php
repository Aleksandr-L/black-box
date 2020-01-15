<?php
session_start();
ini_set("display_errors", 1);
error_reporting(E_ALL);
/*header("Content-type: text/html; charset=utf-8");*/
$users = $_REQUEST["users"];
$days     = $_REQUEST["days"];
$textarea = $_REQUEST["textarea"];
$id       = $_REQUEST ["id"];
//print_r($users);

$link   = mysqli_connect("localhost", "root", "", "notebook") or die("Ошибка бля" .mysqli_error());// соединнение  устанавливаем одни раз
mysqli_query($link,"UPDATE `daily_planner` SET  users ='$users', days='$days', textarea ='$textarea' WHERE id = $id");
$query  = "SELECT id FROM `daily_planner` WHERE id =".$id;//точка как сложение строки и переменной

$result = mysqli_query($link, $query);
    if($result && mysqli_num_rows($result)>0)
    {
    $row = mysqli_fetch_row($result); // получаем первую строку
    }

echo json_encode($row);
// закрываем подключение
//header("Location: addButton.js");
mysqli_close($link);

?>