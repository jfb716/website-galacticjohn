<?php
$conn = new mysqli("localhost","jfblack","bull1607","john_master");
if($conn->connect_error){die("error");}

$sql = $conn->prepare("INSERT INTO xbox (`date`, `home`, `away`, 'winner', 'win_goals', 'lose_goals', 'game') VALUES (?,?,?,?,?,?,?)");
$sql->bind_param("ssssiis",$_POST['date'],$_POST['home'], $_POST['away'], $_POST['winner'], $_POST['win_goals'], $_POST['lose_goals'], $_POST['game']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'error '. mysqli_error($conn);
}

$sql->close();
?>
