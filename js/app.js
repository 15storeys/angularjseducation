(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		// do some controlling here. Note controller is inside the app (app.controller)
		this.products = gems;
	});
	
	var gems = [
				{ name: 'Dodecahedron', price: 2.95, description: 'Some gems have hidden qualities', canPurchase: true, soldOut: false, images: [{full: 'http://media-cache-ec0.pinimg.com/736x/9f/8e/cb/9f8ecb76e56906a385d0104198931759.jpg', thumbnail: 'http://media-cache-ec0.pinimg.com/736x/9f/8e/cb/9f8ecb76e56906a385d0104198931759.jpg'}]},
				{ name: 'Pentagonal Gem', price: 5.95, description: 'Five five five', canPurchase: false, soldOut: false, images: [{full: 'http://gemsbydeni.com/store/images/190077845295.jpg', thumbnail: 'http://gemsbydeni.com/store/images/190027902819.jpg'}]}
			];
})();