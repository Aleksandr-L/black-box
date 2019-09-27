<?php
$n1=$_REQUEST["val1"];
$n2=$_REQUEST["val2"];
$oper=$_REQUEST["name"];
echo "hi";
    if($oper=$_REQUEST["plus"] || $oper= "plus"){
        $result = $n1 + $n2;
        echo .$result;
    };
