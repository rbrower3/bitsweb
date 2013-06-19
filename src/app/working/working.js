angular.module( 'ngBoilerplate.working', [
  'placeholders',
  'ui.bootstrap',
  'titleService'
])

.config(function config( $routeProvider ) {
  $routeProvider.when( '/working', {
    controller: 'WorkingCtrl',
    templateUrl: 'working/working.tpl.html'
  });
})

.controller( 'WorkingCtrl', function WorkingCtrl( $scope, titleService ) {
  titleService.setTitle( 'Opportunities' );
  
  $scope.isCollapsed = true;
  $scope.benefits = "Show Benefits Information";
  
  $scope.showBenefits = function() {
      $scope.isCollapsed = !$scope.isCollapsed;
      $scope.benefits = ($scope.isCollapsed ? "Show" : "Hide") +  " Benefits Information";
  };
  
});
