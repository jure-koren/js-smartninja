angular.module(‘app’).factory(
                            Categories,
                            function($resource) {
                                return $resource('http://smartninja.betoo.si/api/eshop/categories/:id');
                            }
);