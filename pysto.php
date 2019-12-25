<?php
session_start();
//Чтоб не пропустить нотисы и ошибки
error_reporting(E_ALL);
//Укажем кодировку страницы
header("Content-type: text/html; charset=utf-8");
$link  = mysqli_connect("localhost", "root", "", "notebook") or die(mysqli_error());
$query = mysqli_query($link, "SELECT * FROM `notebook`") or die(mysqli_error());
//mysqli_select_db($query, $link);

while ($row = mysqli_fetch_array($query, MYSQL_BOTH)) {
        echo "<hr><br> $row[id]";
        echo "<br> $row[username]";
        echo "<br> $row[password]";
        echo "<br> $row[email]";
}
//$row = mysqli_fetch_array($query, MYSQL_BOTH);
//echo '<pre>' . print_r($row, 1) . '</pre>';
mysqli_close($link);

?>