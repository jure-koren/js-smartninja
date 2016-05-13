/*angular.module("app").factory(
                            "Categories",
                            function($resource) {
                                return $resource("http://smartninja.betoo.si/api/eshop/categories/:id");
                            }
);*/
angular.module("app").factory("Categories", function($cachedResource) {
    return $cachedResource('Categories', 'http://smartninja.betoo.si/api/eshop/categories/:id', {id: "@id"});
});