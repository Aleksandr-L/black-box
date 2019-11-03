<?php
// пришел запрос от клиент с именем Вован пароль 111
// шаг 1
session_start();
//шаг 2 $Username = запрос от пользователя Вован
$Username = $_REQUEST["Username"]; // пришедшее имя пользователя
//шаг 3 $Password = запрос с паролем 111 от пользователя Вован
$Password = $_REQUEST["Password"];// пришедшее пароль пользователя
//шаг 4 $Login = имеет в себе кнопу submit и отправляет поля: имя пользователя(вован) и пароль(111)
$Login    = $_REQUEST["Login"]; //пришедшее значенте кнопки
// шаг 5 $Register содержит в себе кнопку submit и перенаправляет на страницу регистрации
$Register = $_REQUEST["Register"];//пришедшее значенте кнопки
// шаг 6 В $Username и $Password всталяем фильтры:
// filter_var — Фильтрует переменную с помощью определенного фильтра
//trim — Удаляет пробелы (или другие символы) из начала и конца строки
//FILTER_SANITIZE_STRING - Удаляет теги, при необходимости удаляет или кодирует специальные символы.
$Username = filter_var (trim($Username), FILTER_SANITIZE_STRING);// отфильтровываем не нужные символы И пробелы

$Password = filter_var (trim($Password), FILTER_SANITIZE_STRING);// отфильтровываем не нужные символы И пробелы

//если не пустые поля имя пользователя (вован), пароль(111) и логин то:
if (!empty ($_REQUEST["Username"]) && !empty($_REQUEST["Password"]) && !empty ($Login)) { //если не пустое поле имени пользователя и не пустое поле пароля
    //соединить с бд в папке notebook (положить в переменную $connection)
    $connection = mysqli_connect("localhost", "root", "", "notebook"); //подлючаемся к базе данных по пути то проверить в базе данных существование пользователя
    //проверить наличие пользователя вован с паролем 111 и положить в переменную $registr
    $registr = mysqli_query($connection, "SELECT * FROM `notebook` WHERE username = '$Username' AND  password = '$Password'");//сделали запрос в бд
    // mysqli_fetch_assoc — Извлекает результирующий ряд в виде ассоциативного массива и ложим в переменную
    $user = mysqli_fetch_assoc($registr);//эта функция извлекает из переменной регистр  $user
    //выводим массив в $user
    print_r($user);
}
//если не пустая кнопка Register,
if (!empty ($Register)){
//то переходим на страницу ежедневник
header("Location: ежедневник");}

//header("Location: login.php");


?>
<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css" type="text/css"/>
        <title>Document</title>
    </head>
         <body>

        <form action="" method="post">
            <div type="text" name="Super notebook" class = "header" required>Super notebook</div>

            <div><input type="text" name="Username"  placeholder = "Username" class = "pass" ></div>

            <div> <input type="text" name="Password"  placeholder = "Password" class = "pass" ></div>

            <div><button type="submit" class = "registration" name="Login" value = "1">Login</button></div>

            <div><button type="submit" class = "registration" name="Register" value = "1">Register</button></div>



        </form>

        </body>

</html>