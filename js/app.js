(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		// do some controlling here. Note controller is inside the app (app.controller)
		this.products = gems;
	});
	
	var gems = [
				{ name: 'Dodecahedron', price: 2.95, description: 'Some gems have hidden qualities', canPurchase: true, soldOut: false},
				{ name: 'Pentagonal Gem', price: 5.95, description: 'Five five five', canPurchase: false, soldOut: false}
			];
})();