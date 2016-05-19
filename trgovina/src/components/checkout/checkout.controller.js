
angular.module('app').controller('CheckoutController', function($scope, ngCart, locker) {

    // skupne variable
    var prefix = "myapp_";
    
    $scope.user = {ime_priimek:"", nayziv:"", ulica: "", kraj: "", drzava: ""};
    
    ngCart.setTaxRate(0.0);
    ngCart.setShipping(2.99);
    
    /*
     * naložimo iz lockerja, če imamo vrednosti od prej
     */
    $scope.loadData = function() {
        $scope.user = locker.get(prefix + "user");
    }
    $scope.loadData();
    
    /*
     * naredimo checkout
     */
    $scope.doCheckout = function() {
        // shranimo z lockerjem
        locker.put(prefix + "user", $scope.user );
        
        // pripravimo podatke za poslati na server
        var data = $scope.user;
        // dodamo products
        // rabimo še products (id, quantity)
        var products = {};
        ngCart.getItems.forEach(function(ngCartItem) {
            var item = {id: ngCartItem.getId, quantity: ngCartItem.getQuantity };
            products.push(item);
        });
        // spravimo v data
        data.products = products;
        
        // pošljemo naročilo na server - promise
        var res = $http.post('http://smartninja.betoo.si/api/eshop/orders', data);
                        res.success(function(data, status, headers, config) {
                                $scope.message = data;
                                alert("Poslano OK!");
                        });
                        res.error(function(data, status, headers, config) {
                                alert( "failure message: " + JSON.stringify({data: data}));
                        });        
        
        alert("Test OK");
    };
    
    /*
     * zbrišemo
     */
    $scope.clearData = function() {
        locker.empty();
    }
    
    
});
 
