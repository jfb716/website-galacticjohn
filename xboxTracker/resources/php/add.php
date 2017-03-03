<?php
$conn = new mysqli("localhost","galacticJohn","bull1607","galacticJohn");
if($conn->connect_error){die("error");}

$sql = $conn->prepare("INSERT INTO xboxTracker (dates, home, away, winner, wingoals, losegoals, game) VALUES (?,?,?,?,?,?,?)");
$sql->bind_param("ssssiis", $_POST['dates'], $_POST['home'], $_POST['away'], $_POST['winner'], $_POST['wingoals'], $_POST['losegoals'], $_POST['game']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'error '. mysqli_error($conn);
}

$sql->close();
?>
