/**
 * Created by NM on 5/21/2016.
 */

console.log("map controller loading");

appControllers

  .controller('MapController', function($scope) {
    console.log("map controller loaded");
    $scope.settings = {
      enableFriends: true
    };
  });
