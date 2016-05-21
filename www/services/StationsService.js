/**
 * Created by NM on 5/21/2016.
 */

app.service("StationsService", function ($http) {
  this.getAll = function() {
    console.log("getting all stations");
    return $http.get(backendUrl + "api/get_stations");
  };

});
