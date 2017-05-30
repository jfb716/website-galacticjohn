<?php
    $conn = mysqli_connect('localhost', 'galacticJohn', 'bull1607', 'galacticJohn');
    $sql = "SELECT * FROM xboxTracker";
    $result = mysqli_query($conn, $sql);
    $myArray = array();
    while ($row = mysqli_fetch_assoc($result)) {
    $myArray[] = $row;
    }

    mysqli_close($conn);

    $json = json_encode($myArray);

    $arr = json_decode($json, true);

    $JohnW = 0;
    $AmitW = 0;
    $DavidW = 0;
    $OlegW = 0;
    $TotalG = 0;
    $AmitH = 0;
    $JohnH = 0;
    $OlegH = 0;
    $DavidH = 0;

    foreach ($arr as $key => $jsons) {
      foreach ($jsons as $key => $value) {
        if ($key == 'winner' && $value == 'John') {
          $JohnW++;
        }
        elseif ($key == 'winner' && $value == 'Oleg') {
          $OlegW++;
        }
        elseif ($key == 'winner' && $value == 'David') {
          $DavidW++;
        }
        elseif ($key == 'winner' && $value == 'Amit') {
          $AmitW++;
        }
        elseif ($key == 'id') {
          $TotalG++;
        }
        elseif ($key == 'home' && $value == 'Amit') {
          $AmitH++;
        }
        elseif ($key == 'home' && $value == 'Oleg') {
          $OlegH++;
        }
        elseif ($key == 'home' && $value == 'John') {
          $JohnH++;
        }
        elseif ($key == 'home' && $value == 'David') {
          $DavidH++;
        }
      }
    }

    $JohnP = round(($JohnW / $TotalG) * 100);
    $AmitP = round(($AmitW / $TotalG) * 100);
    $DavidP = round(($DavidW / $TotalG) * 100);
    $OlegP = round(($OlegW / $TotalG) * 100);

    $JohnHP = round(($JohnH / $TotalG) * 100);
    $AmitHP = round(($AmitH / $TotalG) * 100);
    $DavidHP = round(($DavidH / $TotalG) * 100);
    $OlegHP = round(($OlegH / $TotalG) * 100);

?>

<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="John F. Black">
        <meta name="description" content="Test Site for John F. Black">
        <meta name="keywords" content="John, John Black, John F Black, John F. Black, John Francis Black, Test Site, Test, Synacor, Facebook, NBC, NBCUniversal, LocalEdge, Buffalo, New York, New York City, NYC, Grand Island, University at Buffalo, UB, Technical Support, Ad Operations, AdOps, AdTech">
        <title>GalacticJohn - Xbox Tracker</title>

        <!-- Site Styles -->
        <link rel="stylesheet" href="/resources/css/style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">


        <!-- JavaScript API's -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

        <!-- My JavaScript -->
        <script src="resources/js/xbox.js"></script>
        <script src="resources/js/charts.js">

        </script>


    </head>
    <body>
            <header>
                  <div class="container">
                    <nav class="navbar navbar-inverse bg-inverse bg-faded navbar-toggleable-md">
                      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <a class="navbar-brand" href="/">
                        <img src="/resources/images/an.png" width="30" height="30" style="border-radius:15px" class="d-inline-block align-top" alt="">GalacticJohn</a>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                          <ul class="navbar-nav">
                            <li class="nav-item">
                              <a class="nav-link" href="http://galacticjohn.com/headerBidding">Header Bidding</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="http://galacticjohn.com/prebidScript">Prebid Script</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="http://galacticjohn.com/fullWidth">Full Width</a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="http://galacticjohn.com/xboxTracker">Xbox Tracker</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="http://galacticjohn.com/nativeGallery">Native Gallery</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="http://galacticjohn.com/nativeEditor">Native Editor</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="http://galacticjohn.com/ampMweb">AMP mWeb</a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
            </header>
                <div class="jumbotron container">
                  <div class="alert alert-success text-center h3" role="alert">
                    <div class="curChamp">
                    </div>
                  </div>
                  <div class="h1 text-center bg-inverse text-white rounded-top nhl-2012-standings">NHL 2012 Standings</div>
                  <table class="table table-striped table-hover table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Player</th>
                        <th>Home Count</th>
                        <th>Away Count</th>
                        <th>Games Played</th>
                        <th>Total Wins</th>
                        <th>Goals For</th>
                        <th>Goals Against</th>
                        <th>Goal +/-</th>
                        <th>Win Percent</th>
                      </tr>
                    <tbody class="standingsBody">

                    </tbody>
                    </thead>
                  </table>
                  <div class="charts" style="border: 1px solid #ccc">
                    <div id="winp_chart_div"></div>
                    <div id="homep_chart_div"></div>
                  </div>
                </div>




                <div class="jumbotron container">
                  <form method="post" action="resources/php/add.php" class="gameAdd">
                    <fieldset>
                      <legend class="h1 text-center bg-inverse text-white rounded-top">Game Input</legend>
                      <div class="form-group row">
                        <label for="dates" class="col-sm-2 col-form-label">Date:</label>
                        <div class="col-sm-10">
                          <input type="date" name="dates" id="dates" class="form-control" required>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="game" class="col-sm-2 col-form-label">Game: </label>
                        <div class="col-sm-10">
                          <select id="game" name="game" class="form-control" required>
                            <option value="NHL 2012">NHL 2012</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="home" class="col-sm-2 col-form-label">Home: </label>
                        <div class="col-sm-10">
                          <select class="form-control" id="home" name="home" required>
                              <option value="">-----</option>
                              <option value="John">John</option>
                              <option value="Oleg">Oleg</option>
                              <option value="Amit">Amit</option>
                              <option value="David">David</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="away" class="col-sm-2 col-form-label">Away: </label>
                        <div class="col-sm-10">
                          <select class="form-control" id="away" name="away" required>
                              <option value="">-----</option>
                              <option value="John">John</option>
                              <option value="Oleg">Oleg</option>
                              <option value="Amit">Amit</option>
                              <option value="David">David</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="winner" class="col-sm-2 col-form-label">Winner: </label>
                        <div class="col-sm-10">
                          <select class="form-control" id="winner" name="winner" required>
                              <option value="">-----</option>
                              <option value="John">John</option>
                              <option value="Oleg">Oleg</option>
                              <option value="Amit">Amit</option>
                              <option value="David">David</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="wingoals" class="col-sm-2 col-form-label">Winner Goals: </label>
                        <div class="col-sm-10">
                          <input type="number" min="0" max="15" class="form-control" id="wingoals" name="wingoals">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="losegoals" class="col-sm-2 col-form-label">Loser Goals: </label>
                        <div class="col-sm-10">
                          <input type="number" min="0" max="15" class="form-control" id="losegoals" name="losegoals">
                        </div>
                      </div>
                      <div class="text-center">
                        <input type="submit" value="Add" class="btn btn-success">
                        <input type="reset" class="btn btn-danger">
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div class="jumbotron container">
                  <div class="h1 text-center bg-inverse text-white rounded-top">Game List</div><br>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item"><a class="page-link pageOne" id="pageOne">1</a></li>
                      <li class="page-item"><a class="page-link pageTwo" id="pageTwo">2</a></li>
                      <li class="page-item"><a class="page-link pageThree" id="pageThree">3</a></li>
                      <li class="page-item"><a class="page-link pageFour" id="pageFour">4</a></li>
                      <li class="page-item"><a class="page-link pageFive" id="pageFive">5</a></li>
                      <li class="page-item disabled"><a class="page-link pageSix" id="pageSix">6</a></li>
                      <li class="page-item disabled"><a class="page-link pageSeven" id="pageSeven">7</a></li>
                      <li class="page-item disabled"><a class="page-link pageEight" id="pageEight">8</a></li>
                      <li class="page-item disabled"><a class="page-link pageNine" id="pageNine">9</a></li>
                    </ul>
                  </nav>
                  <table id="gameTable" class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Game</th>
                        <th>Home</th>
                        <th>Away</th>
                        <th>Winner</th>
                        <th>Win Goals</th>
                        <th>Lose Goals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>02-28-2017</td>
                        <td>NHL 2012</td>
                        <td>Amit</td>
                        <td>David</td>
                        <td>Amit</td>
                        <td>4</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
    </body>

    <script>
        google.charts.load('current', {'packages':['corechart', 'annotationchart']});
        google.charts.setOnLoadCallback(drawWinPChart);
        google.charts.setOnLoadCallback(drawHomePChart);

        var JP = <?php echo $JohnP ?>;
        var OP = <?php echo $OlegP ?>;
        var AP = <?php echo $AmitP ?>;
        var DP = <?php echo $DavidP ?>;

        var JHP = <?php echo $JohnHP ?>;
        var OHP = <?php echo $OlegHP ?>;
        var AHP = <?php echo $AmitHP ?>;
        var DHP = <?php echo $DavidHP ?>;

        function drawWinPChart() {

         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Player');
         data.addColumn('number', 'Win Percent');
         data.addRows([
           ['John', JP],
           ['Amit', AP],
           ['David', DP],
           ['Oleg', OP]
         ]);

         var options = {title:'Percentage of Total Wins',
                        width:400,
                        height:300};

         var chart = new google.visualization.PieChart(document.getElementById('winp_chart_div'));
         chart.draw(data, options);
        }

        function drawHomePChart() {

         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Player');
         data.addColumn('number', 'Home Percent');
         data.addRows([
           ['John', JHP],
           ['Amit', AHP],
           ['David', DHP],
           ['Oleg', OHP]
         ]);

         var options = {title:'Percentage of Total Home Games',
                        width:400,
                        height:300};

         var chart = new google.visualization.PieChart(document.getElementById('homep_chart_div'));
         chart.draw(data, options);
        }
        </script>
</html>
