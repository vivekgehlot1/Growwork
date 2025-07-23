<?php
$connection = mysqli_connect("localhost","root","","growworkdb");
if(!$connection)
die("could not connect ".mysqli_connect_error());
else
echo 'connection estabilished';
?>