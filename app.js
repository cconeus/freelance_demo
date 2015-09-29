var homeView = angular.module('homeView', ['ui.router']);

homeView.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/home.html",
      },
      'footer': {
        templateUrl: "partials/footer.html",
      },
    }
  });
});
