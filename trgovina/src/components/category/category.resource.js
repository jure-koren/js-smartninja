angular.module("app").factory(
                            "Category",
                            function($resource) {
                                return $resource("http://smartninja.betoo.si/api/eshop/categories/products/:id");
                            }
);