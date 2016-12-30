'use strict';

var App = angular.module('app', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ngRoute', 'ngTouch']);


App.config(function AppConfig($routeProvider, $locationProvider) {

	$routeProvider.when("/", {
		templateUrl : "views/login.html"
	});	
});

App.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post['X-CSRFToken'] = $('input[name=_csrf]').val();
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

App.run(function($rootScope, $location, $templateCache) {
	   $rootScope.$on('$locationChangeStart', function() {
	   	  $(".modal").modal("hide");
	   	  $('.modal-backdrop').css('display','none');
	      $templateCache.removeAll();
	   });
	   // FOR SENDING CHANGED URL PATH TO GOOGLE ANALYTICS
	   $rootScope.$on('$routeChangeSuccess', function(){
	       ga('send', 'pageview', $location.path());
	   });
	});
