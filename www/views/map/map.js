/**
 * Created by NM on 5/21/2016.
 */

console.log("map controller loading");

appControllers

  .controller('MapController', function($scope, uiGmapGoogleMapApi) {
    console.log("map controller loaded");

    $scope.map = { center: { latitude: 45.745139, longitude: 21.241582 }, zoom: 16 };

    $scope.randomMarkers = [];

    uiGmapGoogleMapApi.then(function(maps){
      console.log("loaded maps");
      var markers = [
        {
          latitude: "45.745139",
          longitude: "21.241582",
          title: "first",
          id: 1
        },
        {
          latitude: "45.747164",
          longitude: "21.246754",
          title: "second",
          id: 2
        }
      ];
      for(let marker of markers){
        $scope.randomMarkers.push(marker);
      }
    });
  });
