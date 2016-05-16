
angular.module('app').controller('CheckoutController', function($scope, ngCart, locker) {

    // skupne variable
    var prefix = "myapp_";
    var polja = ["ime_priimek", "naziv", "ulica", "kraj", "drzava"];
    
    
    /*
     * naložimo iz lockerja, če imamo vrednosti od prej
     */
    $scope.loadData = function() {
        polja.forEach(function(polje) {
        var sPolje = eval("$scope." + polje);
        sPolje = locker.get(prefix + 'ime_priimek', '' );
        });
    }
    $scope.loadData();
    
    /*
     * naredimo checkout
     */
    $scope.doCheckout = function() {
        // tu še preverimo, če je vse ok
        
        // shranimo polja v locker
        polja.forEach(function(polje) {
            locker.put(prefix + polje, eval("$scope." + polje) );
        });
        
        // pošljemo naročilo na server - promise
        
        
    };
    
    /*
     * zbrišemo
     */
    $scope.clearData = function() {
        polja.forEach(function(polje) {
            var sPolje = eval("$scope." + polje);
            sPolje = '';
        });
        locker.empty();
    }
    
    
});
 
