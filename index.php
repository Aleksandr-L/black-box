<?php
session_start();
$connection = mysqli_connect("localhost", "root", "", "my_calculotor");
//print_r($_POST);
$_SESSION["result"][] = $result;
echo "<pre>";
print_r($_SESSION['result']);
echo "</pre>";
if($_POST["submit123"]){
                            $a = $_REQUEST["first"];
                            $b = $_REQUEST["second"];
                            $p = $_REQUEST["operation"];
                            $result;
                    if ($p=="+")
                            $result = $a + $b;
                    else if($p=="-")
                            $result = $a - $b;
                    else if($p=="*")
                            $result = $a * $b;
                    else if($p=="/")
                         {
                    if($b==0)
                            echo "You can not divide by zero";
                    else $result = $a / $b;
                         }
                         $_SESSION["result"][] = $result;
                         }
                    if ($result){
                         $connection = mysqli_connect("localhost", "root", "", "my_calculotor");
                         mysqli_query($connection, "INSERT INTO my_calculotor (operand1, operation, operand2, result) VALUES ('$a', '$p', '$b', '$result' )");
                         };

                         mysqli_query($connection, $result); //подключение к БД и передача результата на записьв таблицу

                        //запрос на вывод 5 последних записей
                        $five_query = mysqli_query($connection, "SELECT * FROM `my_calculotor` ORDER BY id DESC LIMIT 5");

                   foreach ($five_query as $row){
                        print_r ($row);
                        };
                        //$DELETE =  mysqli_query($connection, DELETE FROM my_calculotor WHERE id = '10');
?>
<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
         <body>

        <form action="" method="post">
            <input type="textbox" name="first" required>

            <select name="operation" required>

            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            </select>
            <input type="textbox" name="second" required>
            <input type="submit" name="submit123">
            <input value = "<?php echo $result;?>">
        </form>

        </body>

</html>