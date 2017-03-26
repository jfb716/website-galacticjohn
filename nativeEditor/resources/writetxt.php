<?php
$newData = htmlspecialchars_decode($_POST['d']);
$openFile = fopen("antag.txt", "w");
fwrite($openFile, $newData);
fclose($openFile);

$tagToDisplay = file_get_contents("antag.txt");
echo $tagToDisplay;
?>
