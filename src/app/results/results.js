angular.module( 'ngBoilerplate.results', [
  'placeholders',
  'ui.bootstrap',
  'titleService'
])

.config(function config( $routeProvider ) {
  $routeProvider.when( '/results', {
    controller: 'ResultsCtrl',
    templateUrl: 'results/results.tpl.html'
  });
})

.controller( 'ResultsCtrl', function ResultsCtrl( $scope, titleService ) {
  titleService.setTitle( 'Results' );
  
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
