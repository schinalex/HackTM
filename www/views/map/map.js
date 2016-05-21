/**
 * Created by NM on 5/21/2016.
 */

console.log("map controller loading");

appControllers

  .controller('MapController', function($scope, StationsService) { // uiGmapGoogleMapApi
    console.log("map controller loaded");

    $scope.map = { control: {}, center: { latitude: 45.745139, longitude: 21.241582 }, zoom: 13 };
    $scope.myPosition = {latitude: 45.7456645, longitude: 21.2411096};

    // StationsService.getAll().then(function(data){
    //   return;
    //   console.log("got all stations");
    //   for(var i = 0; i < 6; i++){
    //     var crtObj = {
    //       latitude: data.data.stations[i].lat+"",
    //       longitude: data.data.stations[i].lng+"",
    //       title: data.data.stations[i].friendly_name,
    //
    //       id: i
    //     };
    //     $scope.randomMarkers.push(crtObj);
    //     console.log(crtObj);
    //   }
    //   console.log(data);
    // }).catch(function(data){
    //   console.log("err");
    //   console.log(data);
    // });
    StationsService.getNearest($scope.myPosition.latitude, $scope.myPosition.longitude, 10).then(function(data) {
      data.data.stations.forEach(function(station){
        // console.log(station);
        var buildingMarker = {coords: {latitude: station.lat, longitude: station.lng}};
        $scope.markers.push(buildingMarker);
      });
      console.log($scope.markers);
      console.log("got nearest stations");
      console.log(data);
    }).catch(function(data){
      console.log("err getting nearest stations");
      console.log(data);
    });

    $scope.markers = [];

    // instantiate google map objects for directions
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    var geocoder = new google.maps.Geocoder();

    // directions object -- with defaults

    $scope.directions = {
      destination: "Strada Arieș 1, Timișoara",
      origin: "Strada 1 Decembrie 1918 96, Timișoara",
      showList: false
    };



    // get directions using google maps api

    $scope.getDirections = function () {
      var request = {
        origin: $scope.directions.origin,
        destination: $scope.directions.destination,
        travelMode: google.maps.DirectionsTravelMode.TRANSIT
      };

      directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap($scope.map.control.getGMap());
          directionsDisplay.setPanel(document.getElementById('directionsList'));
          $scope.directions.showList = true;
        } else {
          console.log('Google route unsuccesfull!');
        }
      });
    };
    setTimeout(function () {
      $scope.getDirections();
    }, 0);


  });

//TODO: show marker label by default, not after click
