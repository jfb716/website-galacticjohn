<!DOCTYPE html>
<html lang="en-US" ng-app="myApp" ng-controller="myCtrl">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="John F. Black">
        <meta name="description" content="Test Site for John F. Black">
        <meta name="keywords" content="John, John Black, John F Black, John F. Black, John Francis Black, Test Site, Test, Synacor, Facebook, NBC, NBCUniversal, LocalEdge, Buffalo, New York, New York City, NYC, Grand Island, University at Buffalo, UB, Technical Support, Ad Operations, AdOps, AdTech">
        <title>GalacticJohn - Native Editor</title>

        <!-- Site Styles -->
        <link rel="stylesheet" href="/resources/css/style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">


        <!-- JavaScript API's -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

        <!-- My JavaScript -->
        <script src="resources/editor.js"></script>


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
                          <li class="nav-item">
                            <a class="nav-link" href="http://galacticjohn.com/xboxTracker">Xbox Tracker</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="http://galacticjohn.com/nativeGallery">Native Gallery</a>
                          </li>
                          <li class="nav-item active">
                            <a class="nav-link" href="http://galacticjohn.com/nativeEditor">Native Editor</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="http://galacticjohn.com/passbackTool">AMP mWeb</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
          </header>
                <div class="container">
                  <div class="row">
                    <div class="col-8">
                      <div class="jumbotron">
                        <div class="alert alert-info text-center" role="alert">
                          <strong>Editable Audience Network Native Tag</strong>
                        </div>
                        <textarea rows="30" cols="80" contenteditable="true" class="anTag1">
                          <?php
                            $textDisplay = file_get_contents("resources/antag.txt");
                            echo htmlspecialchars($textDisplay);
                          ?>
                        </textarea>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="jumbotron anTag2">
                        <?php
                          echo file_get_contents("resources/antag.txt");
                        ?>

                      </div>
                    </div>


                  </div>
                </div>
    </body>
</html>
