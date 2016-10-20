var Litamana = Litamana || {},
	COLLECTION = [];

var createWriters = function(id, nome, nas, nac, ocup, gen, obr, img1, img2) {
	return {
		id: id,
		nome: nome,
		nascimento: nas,
		nacionalidade: nac,
		ocupacao: ocup,
		genero: gen,
		obras: obr,
		img1: img1,
		img2: img2,
	}
}

Litamana.Data = {

	getDataBinds: function(strUrl, strKeyParent) {

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
					return COLLECTION.push(value['id'], key, value['nascimento'], value['nacionalidade'], value['ocupacao'], value['genero'], value['obras relevantes'], value['url imagem'], value['url imagem 1']);
				});	
			});
		}

	},

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
		this.getDataBinds(this.BASE_URL, this.POINTER_PARENT);

		console.log(COLLECTION);

		COLLECTION.forEach(function(elem) {
			console.log(elem);
		});

		jQuery('.map-lista-author').draggable({ containment: '.map-container', scroll: false });
	},
	observeClickAuthor: function(argElem) {
		this.getDataBinds(this.BASE_URL, this.POINTER_PARENT, argElem.attr('id'));
	}
}

jQuery.extend(Litamana.Actions.prototype, Litamana.Data);

jQuery(document).ready(function() {
	var actions = new Litamana.Actions();
	var authors = jQuery('.map-lista-escritores');


});








