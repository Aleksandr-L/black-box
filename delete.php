<?php
session_start();
//Чтоб не пропустить нотисы и ошибки
error_reporting(E_ALL);
//Укажем кодировку страницы
header("Content-type: text/html; charset=utf-8");
//mysqli_real_escape_string();
$link  = mysqli_connect("localhost", "root", "", "notebook") or die("ошибки подключения №1");
$query = mysqli_query($link,"DELETE * FROM `daily_planner` WHERE id = '58'") or die("ошибки подключения №2");

//mysqli_select_db($query, $link);
//$query = "SELECT * FROM $userstable WHERE id = ".(int)$_GET['id'];
//if($query === FALSE) {
  //  die(mysql_error());
   // };
while ($row = mysqli_fetch_row($query,$link)) {
       echo $row["id"];
       echo $row["users"];
};
//$row = mysqli_fetch_array($query, MYSQL_BOTH);
//echo '<pre>' . print_r($row, 1) . '</pre>';
mysqli_close($link);

?>