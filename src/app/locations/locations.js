/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.locations', [
  'titleService',
  'leaflet-directive'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $routeProvider ) {
  $routeProvider.when( '/locations', {
    controller: 'LocationsCtrl',
    templateUrl: 'locations/locations.tpl.html'
  });
})


/**
 * And of course we define a controller for our route.
 */
.controller( 'LocationsCtrl', function LocationController( $scope, titleService ) {
  titleService.setTitle( 'Locations' );

  $scope.centerUS = {
                    lat: 39.828,
                    lng: -98.579,
                    zoom:4
  };

  $scope.sterling = {
                     lat: 38.982,
                     lng: -77.436,
                     state:'Virginia',
                     address:'45200 Business Ct',
                     cityState:'Sterling, VA 20166',
                     phone:'703-123-4567'
                     };
                     
  $scope.aurora = {
                     lat: 39.665,
                     lng: -104.860,
                     state:'Colorado',
                     address:'2821 S. Parker Rd',
                     cityState:'Aurora, CO 80014',
                     phone:'423-4423'
                     };
  $scope.sarasota = {
                      lat: 27.382,
                      lng : -82.435,
                      state:'Florida',
                     address:'6851 Professional Pkwy',
                     cityState:'Sarasota, FL 34240',
                     phone:'423-4423'
            };
  $scope.santaclara = {
                      lat: 37.406,
                      lng: -121.981,
                      state:'California',
                     address:'3003 Bunker Hill Lane, Suite 130',
                     cityState:'Santa Clara, CA',
                     phone:'423-4423'
               };
               
  $scope.mapDefaults = {
                    tileLayer: "http://{s}.tile.cloudmade.com/6e92a753ff374024a02d0ef0d18c56bc/1/256/{z}/{x}/{y}.png"
                    };

  $scope.locations = [
      $scope.sterling,
      $scope.aurora,
      $scope.sarasota,
      $scope.santaclara
      ];
                
});

