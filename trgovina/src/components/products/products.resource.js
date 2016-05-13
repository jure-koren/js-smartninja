/*angular.module("app").factory("Products", function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/products/:id');
});*/
angular.module("app").factory("Products", function($cachedResource) {
    return $cachedResource('Products', 'http://smartninja.betoo.si/api/eshop/products/:id', {id: "@id"});
});