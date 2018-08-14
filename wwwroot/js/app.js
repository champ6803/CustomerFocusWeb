
var url_string = document.URL;
var url = new URL(url_string);
var access_token = url.searchParams.get("access_token");
if (access_token != null) {
    localStorage.token = access_token;
}
var app = angular.module("myapp", []);
app.controller("MainController", function ($scope, $http) {
    $scope.init = function () {
        //debugger;
        $http.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token;
    }
});
