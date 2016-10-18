var Litamana = Litamana || {},
	_COLLECTION = [];

Litamana.Data = {

	getJSONES: function() {
		jQuery.ajax({
			url: arguments[0],
			async: false,
			dataType: 'JSON',
			method: 'POST',
			statusCode: {
				404: function(){
					alert('File not found!');
				}
			}
		})
		.done(function(data){
			
		});
	},
	getJSON: function(strUrl, strKeyParent, strKeyChild) {

		if(!strUrl) {
			return false;
		} else {
			jQuery.ajax({
				url: strUrl,
				async: false,
				dataType: 'JSON',
				method: 'POST',
				statusCode: {
					404: function(){
						alert('File not found!');
					}
				}
			})
			.done(function(data) {
				jQuery.each(data[strKeyParent], function(key, value){
					if(!strKeyChild) {
						jQuery('.map-lista-escritores')
							.append(
								'<li id="'+ value['id'] 
								+'" class="map-lista-author"> <img src="'+ value['url imagem 1'] 
								+'" alt="Image of author '+ key +'" /></li>'
							);
					} else if(strKeyChild == key) {
						
					}

				});
			});
		}

	},
	teste: function() {
		console.log(this.getJSONES('js/concepts.json'));
	}

};

Litamana.Actions = function() {
	this.init.apply(this, arguments);
}

Litamana.Actions.prototype = {
	init: function() {
		this.BASE_URL = 'js/concepts.json',
		this.POINTER_PARENT = 'escritores';

		this.getAllHtmlWriters();
	},
	getAllHtmlWriters: function() {
		this.getJSON(this.BASE_URL, this.POINTER_PARENT);
		jQuery('.map-lista-author').draggable({ containment: '.map-container', scroll: false });
	},
	observeClickAuthor: function(argObj) {
		this.teste();
	}
}

jQuery.extend(Litamana.Actions.prototype, Litamana.Data);

jQuery(document).ready(function() {
	var view = new Litamana.Actions();
	var author = jQuery('.map-lista-escritores');

	author.click(function() { 
		view.observeClickAuthor(jQuery(this));
	});	
});








