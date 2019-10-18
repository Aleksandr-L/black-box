<?php
session_start();
$_SESSION["result"] = $result;
$result = $_POST["result"];
echo $result;
print_r($_POST);
?>