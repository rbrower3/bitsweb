angular.module( 'ngBoilerplate', [
  'app-templates',
  'component-templates',
  'ngBoilerplate.home',
  'ngBoilerplate.results',
  'ngBoilerplate.working',
  'ngBoilerplate.locations',
  'ui.route',
  'ui.bootstrap'
])

.config( function myAppConfig ( $routeProvider ) {
  $routeProvider.otherwise({ redirectTo: '/home' });
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | BITSystems Inc.' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

