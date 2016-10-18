var Litamana = Litamana || {},
	_COLLECTION = [];

Litamana.EntityMaminipulation = {

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
						alert(true);
					}

				});
			});
		}

	},

};

Litamana.Views = function() {
	this.init.apply(this, arguments);
}

Litamana.Views.prototype = {
	init: function() {
		this.BASE_URL = 'js/concepts.json',
		this.POINTER_PARENT = 'escritores';
	},

	getAllHtmlWriters: function() {
		this.getJSON(this.BASE_URL, this.POINTER_PARENT);
		jQuery('.map-lista-author').draggable({ containment: '.map-container', scroll: false });
	},
}

jQuery.extend(Litamana.Views.prototype, Litamana.EntityMaminipulation);

jQuery(document).ready(function() {
	new Litamana.Views().getAllHtmlWriters();

	
});
