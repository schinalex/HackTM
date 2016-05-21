/**
 * Created by NM on 5/21/2016.
 */

console.log("map controller loading");

appControllers

  .controller('MapController', function($scope, uiGmapGoogleApi) {
    console.log("map controller loaded");
    $scope.settings = {
      enableFriends: true
    };

    uiGmapGoogleMapApi.then(function(maps){
      var initMap = function () {
        var stations = [
          {
            station: 'Sala Olimpia',
            coords: {lat: 45.745139, lng: 21.241582}
          },
          {
            station: 'Deliblata',
            coords: {lat: 45.747164, lng: 21.246754}
          }
        ]

        var myLatLng = {lat: 45.745139, lng: 21.241582}

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 16
        })

        for (let station of stations) {
          new google.maps.Marker({
            map: map,
            position: station.coords,
            title: station.station
          })
        }
      }
    })
  });
