'use strict'

var app = angular.module('buddaApp', ['ui.bootstrap']);

// this handles the data
app.controller('movieNameCtrl', function ($scope) {
  var movie_info, replaced_name, new_noun;
  console.log("calling from controller");
  $scope.getMovie = function () {
    var rand;
    rand = Math.floor((Math.random() * movie_list.length));
    console.log(movie_list);
    console.log(rand);
    movie_info = movie_list[rand];
    console.log(replaced_name);
    console.log(movie_info);

    if ($scope.noun != "") {
      new_noun = $scope.noun.charAt(0).toUpperCase() + $scope.noun.slice(1);
      $scope.replaced_name = movie_info[1].replace("<n>", new_noun);
    } else {
      $scope.replaced_name = movie_info[1];
    }

    $scope.link = movie_info[0];
    $scope.year = " (" + movie_info[2] +")";

  };
});