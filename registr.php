<?php
ini_set("display_errors", 1);
 //Включить вывод уведомлений и предупреждений можно, добавив в начало нужного .php файла
error_reporting(E_ALL);
//Задает, какие ошибки PHP попадут в отчет
session_start();
//$_SESSION () ;*/
//создаем сессию
$login = filter_var (trim($_POST["login"]), FILTER_SANITIZE_STRING);
//$login = имеет в себе кнопу submit и отправляет поля
$password = filter_var (trim($_POST["password"]), FILTER_SANITIZE_STRING);// отфильтровываем не нужные символы И пробелы
//$password = запрос с паролем от пользователя
$email = $_POST["email"];
//$email отправляет email методом _POST
    //условия отправки данных
    if(mb_strlen($login) < 5 || mb_strlen($login) > 15){
    //mb_strlen - Получает длину строки вводимую пользователем в поле $login
      echo "fuck you many characters in login";
   // exit — Вывести сообщение и прекратить выполнение текущего скрипта при не собдюдении условий
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
    //соединить с бд в папке notebook (положить в переменную $connection)
    $connection = mysqli_connect("localhost", "root", "", "notebook");
    //добавить пользователя в бд
    mysqli_query ($connection, "INSERT INTO `notebook` (`username`, `password`, `email` ) VALUES ('$login', '$password', '$email')");
// mysqli_query($connection, $registr);//подключение к БД и передача результата в запись таблицу
//$mysql = close();
//header("Location: login.php");
