<?php
session_start();
 //ini_set("display_errors", 1);
 //zerror_reporting(E_ALL);
header("Content-type: text/html; charset=utf-8");
 $users    = $_REQUEST["users"];
 $days     = $_REQUEST["days"];
 $textarea = $_REQUEST["textarea"];

$link = mysqli_connect("localhost", "root", "", "notebook")or die("Ошибка " . mysqli_error($link));
// если запрос POST
if(isset($_POST['users']) && isset($_POST['days']) && isset($_POST['textarea']) ){
    $query ="UPDATE `daily_planner` SET name='$users', days='$days', textarea='$textarea' WHERE id = ".$_REQUEST["id"];
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

}
// если запрос GET
if(iisset($_REQUEST['id']))
{
    // создание строки запроса
    $query ="SELECT * FROM `daily_planner` WHERE id =".$_REQUEST["id"];
    // выполняем запрос
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    //если в запросе более нуля строк
    if($result && mysqli_num_rows($result)>0)
    {
        $row = mysqli_fetch_row($result); // получаем первую строку
        $users = $row[1];
        $textarea = $row[2];
        $days = $row[3];

    }
}


// закрываем подключение

header("Location: notes.html");
mysqli_close($link);

?>
