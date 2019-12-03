<?php
session_start();
$link  = mysqli_connect("localhost", "root", "", "notebook") or die(mysqli_error());
$query = mysqli_query($link, "SELECT * FROM `daily_planner`") or die(mysqli_error());
    //mysqli_select_db($query, $link);

while ($row = mysqli_fetch_array($query, MYSQL_BOTH)) {
          echo "<hr><br> $row[id]";
          echo "<br> $row[users]";
    }
    //$row = mysqli_fetch_array($query, MYSQL_BOTH);
    //echo '<pre>' . print_r($row, 1) . '</pre>';
mysqli_close($link);
?>