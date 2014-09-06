(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		// do some controlling here. Note controller is inside the app (app.controller)
		this.product = gem;
	});
	
	var gem = { name: 'Dodecahedron', price: 2.95, description: 'Some gems have hidden qualities'};
	
})();