<?php
session_start();
//Чтоб не пропустить нотисы и ошибки
error_reporting(E_ALL);
ini_set("display_errors",1);
//Укажем кодировку страницы
header("Content-type: text/html; charset=utf-8");
//mysqli_real_escape_string();
$link  = mysqli_connect("localhost", "root", "", "notebook") or die("ошибки подключения №1" . mysql_error());
mysqli_query($link,"DELETE FROM `daily_planner` WHERE id = ".$_REQUEST["id"]);
//print_r(mysqli_error_list($link)); выводит ошибки предыдущего запроса
//mysqli_select_db($query, $link);
//$query = "SELECT * FROM $userstable WHERE id = ".(int)$_GET['id'];
//if($query === FALSE) {
  //  die(mysql_error());
   // };
//while ($row = mysql_fetch_array ($result, MYSQL_ASSOC)) {
  //      $row["id"];
    //    $row["users"];
//};
//$row = mysqli_fetch_array($query, MYSQL_BOTH);
//echo '<pre>' . print_r($row, 1) . '</pre>';
mysqli_close($link);
header("Location: notes.html");

?>