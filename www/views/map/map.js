/**
 * Created by NM on 5/21/2016.
 */

console.log("map controller loading");

appControllers

  .controller('MapController', function($scope, uiGmapGoogleMapApi, StationsService) {
    console.log("map controller loaded");

    $scope.map = { center: { latitude: 45.745139, longitude: 21.241582 }, zoom: 13 };

    $scope.randomMarkers = [];

    var newstyle = {
      'background-color':'red',
      'background-size': '36.5px 61px',
      'background-position': 'top left',
      'background-repeat': 'no-repeat'
    };

    StationsService.getAll().then(function(data){
      console.log("got all stations");
      for(var i = 0; i < 6; i++){
        var crtObj = {
          latitude: data.data.stations[i].lat+"",
          longitude: data.data.stations[i].lng+"",
          title: data.data.stations[i].friendly_name,

          id: i
        };
        $scope.randomMarkers.push(crtObj);
        console.log(crtObj);
      }
      console.log(data);
    }).catch(function(data){
      console.log("err");
      console.log(data);
    });

    uiGmapGoogleMapApi.then(function(maps){
      console.log(maps);
      console.log("loaded maps");

    });

    $scope.markerClick = function () {
      console.log("marker click");
    };


    //asta nu face nimic interesant(nici cu return true nici cu false)
    $scope.show1 = function () {
        //console.log("shown123");
        //console.log(this);
        return false;
    };

    //nu functionește
    $scope.closeClick = function () {
        console.log("closeClick");
        $scope.windowOptions.visible = false;
    };
    $scope.windowOptions = {
      visible: false
    };

    $scope.mapClick = function(e) {
      console.log("map clicked");
      console.log(e);
      console.l
    };
  });

//TODO: show marker label by default, not after click
