<?php
$conn = mysqli_connect("localhost", "jfblack", "bull1607", "john_master") or die ("Error".mysqli_error($conn));

header('content-type: application/json');

$sql = "select * from xbox";
$result = mysqli_query($conn, $sql) or die ("Error".mysqli_error($conn));
$myArray = array();
while ($row = mysqli_fetch_assoc($result)) {
  $myArray[] = $row;
}

mysqli_close($conn);

$json = json_encode($myArray);

echo $json;

?>
