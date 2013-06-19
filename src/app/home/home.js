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
angular.module( 'ngBoilerplate.home', [
  'titleService'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $routeProvider ) {
  $routeProvider.when( '/home', {
    controller: 'CarouselDemoCtrl',
    templateUrl: 'home/home.tpl.html'
  });
})


/**
 * And of course we define a controller for our route.
 */
.controller( 'CarouselDemoCtrl', function CarouselDemoController( $scope, titleService ) {
  titleService.setTitle( 'Engineering' );
  $scope.myInterval = 5000;
  $scope.slides = [
    {
        image: 'assets/images/billboards/3.jpg',
        title: 'Sets The Cinema Back 900 Years! ',
        text: 'Well, how\'d you become king, then? Found them? In Mercia?! The coconut\'s tropical!'
     },
     {
        image: 'assets/images/billboards/5.jpg',
        title: 'Sets The Cinema Back 900 Years! ',
        text: 'Well, how\'d you become king, then? Found them? In Mercia?! The coconut\'s tropical!'
     },
     {
        image: 'assets/images/billboards/8.jpg',
        title: 'Dennis the peasant',
        text: 'We found them. The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water.'
     },
     {
         image:'assets/images/billboards/10.jpg',
         title:'Blue. No, yel...',
         text:'Ni! Ni! Ni! Ni! Well, she turned me into a newt. I dunno. Must be a king.'
     }
  ];

  /*
  $scope.addSlide = function() {
    $scope.slides.push({
      image: 'http://placekitten.com/'+(200+25*Math.floor(Math.random()*4))+'/200',
      text: ['More','Extra','Lots of','Surplus'][Math.floor(Math.random()*4)] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][Math.floor(Math.random()*4)]
    });
  };
  $scope.removeSlide = function() {
	$scope.slides.pop();
	};
	*/
})
/*
.controller( 'ModalDemoCtrl', function ModalDemoCtrl ($scope) {

  $scope.open = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'I was closed at: ' + new Date();
    $scope.shouldBeOpen = false;
  };

  $scope.items = ['item1', 'item2'];

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

}
)*/
;

