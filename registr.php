<?php
ini_set("display_errors", 1);

error_reporting(E_ALL);
session_start();
  //$_SESSION () ;*/

$login = filter_var (trim($_POST["login"]), FILTER_SANITIZE_STRING);

$password = filter_var (trim($_POST["password"]), FILTER_SANITIZE_STRING);// отфильтровываем не нужные символы И пробелы

$email = $_POST["email"];
if(mb_strlen($login) < 5 || mb_strlen($login) > 15){
          echo "fuck you many characters in login";
               exit();
}
  else if (strlen($password) < 2 || strlen($password) > 30){
          echo "fuck you many characters in password";
  exit();
}
  else if (mb_strlen($email) < 2 || mb_strlen($email) > 128){
      echo "fuck you many characters in mail";
  exit();
}
$connection = mysqli_connect("localhost", "root", "", "notebook");

mysqli_query ($connection, "INSERT INTO `notebook` (`username`, `password`, `email` ) VALUES ('$login', '$password', '$email')");
// mysqli_query($connection, $registr);//подключение к БД и передача результата в запись таблицу
//$mysql = close();
//header("Location: login.php");
