var Litaman = Litaman || {};
var $ = jQuery;

Litaman.Beans = {
	bean: {},
	germination: function(nameBean, nurture) {
		if(this.bean[nameBean])
			this.bean[nameBean].push(nurture);
		else
			this.bean[nameBean] = [nurture];
		return this;
	},
};

Litaman.ManagerBeans = function() {
	this.init.apply(this, arguments);
};

Litaman.ManagerBeans.prototype = {
	init: function() {
		this.PATH_URL = 'js/';
		this.KEY_JSON_MAIN = 'escritores';	
		this.TYPE_FILE = 'JSON';
		this.nameToBean = 'jalo';

		this.jSON('dados.json', this, this.KEY_JSON_MAIN);
	},
	jSON: function(nameFile, that, keyMain) {
		$.ajax({
			url: that.PATH_URL + nameFile,
			dataType: that.typeFile,
			async: false
		})
		.done(function(data){   
             $.each(data[''+ keyMain +''], function(key, value) {
                that.germination(that.nameToBean, value);
             });
		});
	},
	html: function(qualHTML, elem) {
        switch(qualHTML) {
            case 'list-avatar':
                    for(var i in this.bean['jalo']) {    
                        $('.map-lista-escritores').append(
                            '<li id="'+ this.bean['jalo'][i]['id'] +'" class="map-lista-author" locked="true"> <img src="'+ this.bean['jalo'][i]['url imagem 1'] + '" /></li>'
                        );
                    }
                    $('.map-lista-escritores').find('li').draggable({ containment: '.map-container', scroll: false }); 
                break;
            case 'popup-informacoes': 
                    $('.full-shadow').addClass('is-active-shadow');
                    $('.map-popup--escritores').show();
                
                    $('.map-popup--escritores').find('h1').text(this.bean['jalo'][elem.attr('id')]['nome']);
                    $('.wrap img').attr('src',this.bean['jalo'][elem.attr('id')]['url imagem']);
                
                    $('.informacoes').html(
                        '<div class="group"> <strong>Nascimento</strong>' +
                        '<span>'+ this.bean['jalo'][elem.attr('id')]['nascimento'] +'</span> </div>' +
                        '<div class="group"> <strong>Nacionalidade</strong>' +
                        '<span>'+ this.bean['jalo'][elem.attr('id')]['nacionalidade'] +'</span> </div>' +
                        '<div class="group"> <strong>Ocupação</strong>' +
                        '<span>'+ this.bean['jalo'][elem.attr('id')]['ocupacao'] +'</span> </div>' +
                        '<div class="group"> <strong>Gênero</strong>' +
                        '<span>'+ this.bean['jalo'][elem.attr('id')]['genero'] +'</span> </div>' +
                        '<div class="group"> <strong>Obras</strong>' +
                        '<span>'+ this.bean['jalo'][elem.attr('id')]['obras relevantes'] +'</span> </div>'
                    );
                
                    $('.btn-fechar').click(function() {
                        $('.map-popup--escritores').hide();
                        $('.full-shadow').removeClass('is-active-shadow');
                    })
                break;
            default:
                console.log('Not!');
            break;
        }
		
	}
};

$.extend(Litaman.ManagerBeans.prototype, Litaman.Beans);

(function() {
	var stub = new Litaman.ManagerBeans();
	
    stub.html('list-avatar');
    $('.map-lista-author').click(function() {
        stub.html('popup-informacoes', $(this));
    });
})();



