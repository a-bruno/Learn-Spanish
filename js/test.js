var Litamana = Litamana || {},
	COLLECTION_AUTHORS = [];

function factoryOfAuthor(id, name, birth, nat, occupation, genre, construction, img1, img2) {
	this.id = id;
	this.name = name;
	this.birth = birth;
	this.nat = nat;
	this.occupation = occupation;
	this.genre = genre;
	this.construction = construction;
	this.img1 = img1;
	this.img2 = img2;
}

Litamana.GetDataJSONS = {
	requestJSON: function(argUrlJSON, argObject, argElemWrapr) {
		if(!argUrlJSON) {
			console.log('Error: JSON_URL undefined!');
		} else {
			jQuery.ajax({
				method: 'POST',
				url: argUrlJSON,
				dataType: 'JSON',
				async: false,
				statusCode: {
					404: function() {
						console.log('file not found!');
					}
				}
			}).done(function(data){
				if(argObject) {
					jQuery.each(data[argObject], function(key, value){
						COLLECTION_AUTHORS.push(new factoryOfAuthor(value['id'], key, value['nacimento'], value['nacionalidade'], value['ocupacao'], value['genero'], value['obras relevantes'], value['url imagem'], value['url imagem 1']));
					});
				}
			});	
		}
	},
};

Litamana.Authors = function() {
	this.init.apply(this, arguments);
};

Litamana.Authors.prototype = {
	init: function() {
		this.JSON_URL = 'js/concepts.json';
		this.CONTAINER_MAIN = jQuery('.map-container');
		this.MAP_LIST = jQuery('.map-lista-escritores');
		this.avatarAuthors();
	},
	avatarAuthors: function() {
		this.requestJSON(this.JSON_URL, 'escritores');	
		for(var i in COLLECTION_AUTHORS)
			jQuery(this.MAP_LIST).append('<li id="'+ COLLECTION_AUTHORS[i].id +'" class="map-lista-author"> <img src="'+ COLLECTION_AUTHORS[i].img2 +'" alt="Image of author '+ COLLECTION_AUTHORS[i].name +'" /></li>');
	}
};

jQuery.extend(Litamana.Authors.prototype, Litamana.GetDataJSONS);

Litamana.Authors.DragDrop = function(){
	this.init.apply(this, arguments);
};

Litamana.Authors.DragDrop.prototype = {
	init: function() {
		this.AUTHOR_AVATAR = jQuery('.map-lista-author');
		this.drag();
		this.observeClick();
		this.observeClickExit();
	},
	drag: function() {
		this.AUTHOR_AVATAR.draggable({ containment: '.map-container', scroll: false });
	},
	observeClick: function() {
		jQuery(this.AUTHOR_AVATAR).click(function() {
			var HTML_POPUP =
			'<h1>'+COLLECTION_AUTHORS[jQuery(this).attr('id')].name+'</h1>'+
	        '<img src="'+COLLECTION_AUTHORS[jQuery(this).attr('id')].img1+'" alt="" />'+
	        '<div class"wrap-infos-left">'+
	        '<div class="box"><strong>Nascimento</strong><span> '+COLLECTION_AUTHORS[jQuery(this).attr('id')].birth+'</span></div>'+
	        '<div class="box"><strong>Nacionalidade</strong> <span> '+COLLECTION_AUTHORS[jQuery(this).attr('id')].nat+'</span></div>'+
	        '<div class="box"><strong>Ocupação</strong><span> '+COLLECTION_AUTHORS[jQuery(this).attr('id')].nat+'</span></div>'+
	        '<div class="box"><strong>Gênero</strong><span> '+COLLECTION_AUTHORS[jQuery(this).attr('id')].genre+'</span></div>'+
	        '<div class="box"><strong>Obras</strong><span> '+COLLECTION_AUTHORS[jQuery(this).attr('id')].construction+'</span></div>';

	        jQuery('.map-popup--escritores .wrap').html('');
			jQuery('.map-popup--escritores .wrap').append(HTML_POPUP);
			jQuery('.map-popup--escritores').show();
		});
	},
	observeClickExit: function() {
		jQuery('.btn-fechar').click(function() {
			console.log(this);
			jQuery(this).parent().hide();
		});
	}
};

var author = new Litamana.Authors();
var dragdrop = new Litamana.Authors.DragDrop();




