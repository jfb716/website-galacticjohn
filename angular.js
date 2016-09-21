var myApp = angular.module("myApp", []);

myApp.directive("adSense", function(){
   return {
       restrict: 'E',
       templateUrl: 'adsenseasync.html'
   } 
});