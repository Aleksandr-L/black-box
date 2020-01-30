<?php
session_start();
 //ini_set("display_errors", 1);
 //zerror_reporting(E_ALL);

 $users    = $_REQUEST["users"];
 $days     = $_REQUEST["days"];
 $textarea = $_REQUEST["textarea"];
 $registr  = $_REQUEST["registr"];

   if (!empty ($users) && !empty ($days) && !empty ($textarea) && !empty ($registr)){
        echo "hi";
   }
      $connection = mysqli_connect("localhost", "root", "", "notebook");
       mysqli_query ($connection, "SELECT * FROM`daily_planner`(`users`, `days`, `textarea`) VALUES ('$users', '$days', '$textarea')");
       // mysqli_query ($connection, $registr);
       //$mysql = close();
       //$user = mysqli_fetch_assoc($registr);
       // print_r($user);
       //вопрос почему в скобках не отправляет в бд хотя в браузере есть запрос
mysqli_close($connection);
?>
?>