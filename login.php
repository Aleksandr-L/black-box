<?php
session_start();
$Username = $_REQUEST["Username"];
$Password = $_REQUEST["Password"];
$Login = $_REQUEST["Login"];
$Register = $_REQUEST["Register"];
$users;

  $Username = filter_var (trim($_REQUEST["Username"]), FILTER_SANITIZE_STRING);

  $Password = filter_var (trim($_REQUEST["Password"]), FILTER_SANITIZE_STRING);// отфильтровываем не нужные символы И пробелы

  $Login = $_REQUEST["Login"];

   if (!empty ($_REQUEST["Login"]) && ($_REQUEST["Register"])) {

         login($username,$password);
     }
  $connection = mysqli_connect("localhost", "root", "", "notebook");

  mysqli_query($connection, "SELECT * FROM `notebook` (`username`, `password`) WHERE ('$Username', '$Password')");

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

            <div><input type="text" name="Username"  placeholder = "Username" class = "pass" required></div>

            <div> <input type="text" name="Password"  placeholder = "Password" class = "pass" required></div>

            <div><button type="submit" class = "registration" name="Login" required>Login</button></div>

            <div><button type="submit" class = "registration" name="Register" required>Register</button></div>



        </form>

        </body>

</html>