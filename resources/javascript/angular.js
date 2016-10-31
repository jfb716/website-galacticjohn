var myApp = angular.module("myApp", []);

myApp.directive("adSense", function(){
   return {
       restrict: 'E',
       templateUrl: 'resources/passback_tags/adsenseasync.html'
   } 
});


myApp.directive("anTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'resources/editor_tags/anTag.html'
   } 
});

myApp.directive("adxAsync", function(){
   return {
       restrict: 'E',
       templateUrl: 'resources/passback_tags/adxasync.html'
   } 
});

myApp.directive("rubicon", function(){
   return {
       restrict: 'E',
       templateUrl: 'resources/passback_tags/rubicon.html'
   } 
});

myApp.directive("anAd", function(){
   return {
       restrict: 'E',
       templateUrl: 'resources/editor_tags/anAd.html' 
   } 
});

myApp.controller('myCtrl', function($scope) {
    $scope.placementid = "PLACEMENT_ID";
    $scope.ctacolor = "rgb(108, 135, 216)";
    $scope.fontfamily = "Arial, Helvetica, sans-serif";
    $scope.subFontWeight = "800";
    $scope.titFontWeight = "700";
    $scope.ctaFontWeight = "700";
    $scope.subFontSize = "13px";
    $scope.titFontSize = "13px";
    $scope.ctaFontSize = "13px";
    }); 

myApp.directive("defaultNativeTag", function(){
   return {
       restrict: 'E',
       template: '<iframe class="default" style="margin:0; border:0; padding:0" height="250" width="300" src="resources/gallery_tags/default.html"></iframe>'
   } 
});


myApp.directive("cookingPandaTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="resources/gallery_tags/cookingpanda.html"></iframe>'
   } 
});


myApp.directive("diggTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="resources/gallery_tags/digg.html"></iframe>'
   } 
});


myApp.directive("independentJournalTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="120" width="300" src="resources/gallery_tags/independentjournal.html"></iframe>'
   } 
});


myApp.directive("legacyTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="120" width="300" src="resources/gallery_tags/legacy.html"></iframe>'
   } 
});


myApp.directive("newInstantArticlesTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0" height="250" width="300" src="resources/gallery_tags/newinstantarticles.html"></iframe>'
   } 
});


myApp.directive("littleThingsTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="resources/gallery_tags/littlethings.html"></iframe>'
   } 
});


myApp.directive("oldInstantArticlesTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="resources/gallery_tags/oldinstantarticles.html"></iframe>'
   } 
});


myApp.directive("bannerTag", function(){
    return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="266" width="300" src="resources/gallery_tags/banner.html"></iframe>'
   } 
});

myApp.directive("chiveTrueTag", function(){
    return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="140" width="300" src="resources/gallery_tags/chive_true.html"></iframe>'
   } 
});


myApp.directive("chiveBlockTag", function(){
    return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="resources/gallery_tags/chive_block.html"></iframe>'
   } 
});
