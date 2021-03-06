/**
 * Created by NM on 5/21/2016.
 */

appControllers

  .controller('RouteController', function($scope, $rootScope, RoutesService) {
    console.log("route controller loaded");

    $scope.selectedTT = "bus";
    $scope.routes = [];

    $scope.init = function () {
      $rootScope.$on("toggleTT", $scope.toggleTT);
      RoutesService.getAll().then(function (data) {
        console.log(data);
        $scope.routes = data.data.lines;
        $scope.initRoutes();
        $scope.refreshVisibleRoutes();
      }).catch(function (data) {
        console.log("err");
        console.log(data);
      });
    };
    $rootScope.toggleTT = function (tt) {
      console.log("toggleTT in routectrl: " + tt);
      $scope.selectedTT = tt;
      $scope.refreshVisibleRoutes();
      document.getElementsByClassName("scroll")[0].setAttribute("style", "");
    };
    $scope.init();

    $scope.refreshVisibleRoutes = function() {
      $scope.routes.forEach(function (route) {
        route.visible = ((route.line_type == 'bus' || route.line_type == 'trolley') && $scope.selectedTT == 'bus')
        || (route.line_type == 'tram' && $scope.selectedTT == 'tram');
      });
      var c = 0;
      for(var i = 0; i < $scope.routes.length; i++) {
        if($scope.routes[i].visible) {
          c++;
        }
      }
      console.log(c + " / " + $scope.routes.length);
      console.log($scope.routes);
    };

    $scope.initRoutes = function () {
      $scope.routes.forEach(function (route) {
        if(route.line_type == 'bus' || route.line_type == 'trolley') {
          route.iconClass = 'ion-android-bus';
        }
        else if(route.line_type == 'tram') {
          route.iconClass = 'ion-android-train';
        }
        else {
          console.log("wtf bă?");
        }
      });
    };

    var parseTT = function(tt) {
      if(tt == 'bus') {
        return 'trolley,bus';
      }
      else return tt;
    };
  });

