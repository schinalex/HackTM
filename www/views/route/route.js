/**
 * Created by NM on 5/21/2016.
 */

appControllers

  .controller('RouteController', function($scope) {
    console.log("route controller loaded");
    $scope.settings = {
      enableFriends: true
    };
  });

