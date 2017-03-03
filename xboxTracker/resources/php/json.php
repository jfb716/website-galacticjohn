<?php
$conn = mysqli_connect("localhost", "galacticJohn", "bull1607", "galacticJohn") or die ("Error".mysqli_error($conn));

header('content-type: application/json');

$sql = "select * from xboxTracker";
$result = mysqli_query($conn, $sql) or die ("Error".mysqli_error($conn));
$myArray = array();
while ($row = mysqli_fetch_assoc($result)) {
  $myArray[] = $row;
}

mysqli_close($conn);

$json = json_encode($myArray);

echo $json;

?>
