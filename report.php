<?php
session_start();
echo "<pre>";
print_r($_SESSION['result']);
echo "</pre>";
$connection = mysqli_connect("localhost", "root", "", "my_calculotor");
$result = mysqli_query($connection, "SELECT * FROM `my_calculotor`");
echo "<pre>";
print_r($result);
echo "</pre>";
foreach ($result as $row){
print_r ($row);
};
?>
