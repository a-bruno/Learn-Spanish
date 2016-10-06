var Litamana = Litamana || {},
	_COLLECTION = [];

Litamana.GetDataJSONS = {

	requestJSON: function(argUrlJSON, argTitlePonteiro) {
		// $.getJSON(argUrlJSON, function(data) {
		// 	$.each( data[argTitlePonteiro], function(key, value) {
		// 		console.log(key);
		// 	});	
		// });
		var request = jQuery.ajax({
			url: argUrlJSON,
			async: false
		});

		request.done(function(data) {
			console.log(data[argTitlePonteiro]);
		});
	},

};

Litamana.ViewsUser = function() {
	this.init.apply(this, arguments);
}

Litamana.ViewsUser.prototype = {
	init: function() {
		this.requestJSON('js/concepts.json', 'escritores');
	}
}

jQuery.extend(Litamana.ViewsUser.prototype, Litamana.GetDataJSONS);

var viewsuser = new Litamana.ViewsUser();
