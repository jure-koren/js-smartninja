angular.module(‘app’).factory(‘Products’, function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/products/:id');
});