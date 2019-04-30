<?php

$user = 'root';
$pass = '';
$db = 'a.i';

$db = new mysqli('localhost', $user, $pass, $db) or die("Unable to connect");

echo"Great work!!!";

?>
