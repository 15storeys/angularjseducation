(function(){
	var app = angular.module('store', []);

	app.controller("StoreController", function(){
		// do some controlling here. Note controller is inside the app (app.controller)
		this.products = gems;
	});
	
	app.controller("PanelController", function(){
		this.tab=1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	
	app.controller("ReviewController", function(){
		this.review = {};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};		
	});
	
	
	var gems = [
				{ 
					name: 'Dodecahedron', 
					price: 2.95, 
					description: 'Some gems have hidden qualities', 
					canPurchase: true, 
					soldOut: false, 
					images: [{full: 'http://media-cache-ec0.pinimg.com/736x/9f/8e/cb/9f8ecb76e56906a385d0104198931759.jpg', thumbnail: 'http://media-cache-ec0.pinimg.com/736x/9f/8e/cb/9f8ecb76e56906a385d0104198931759.jpg'}],
					reviews: [
						{
							stars: 5,
							body: "I love this product!",
							author: "joe@doe.com"
						}
					]
				},
				{ 
					name: 'Pentagonal Gem', 
					price: 5.95, 
					description: 'Five five five', 
					canPurchase: false, 
					soldOut: false, 
					images: [{full: 'http://gemsbydeni.com/store/images/190077845295.jpg', thumbnail: 'http://gemsbydeni.com/store/images/190027902819.jpg'}],
					reviews: [
						{
							stars: 1,
							body: "This product sucks",
							author: "tim@hater.com"
						}
					]
				}
			];
})();