(function() {

  var Litamana = Litamana || {},
      COLLECTION = []; 
      
  Litamana.Author = function(argName, argId, argBirth, argNationaty, argOccupation, argGenre, argConstruction, argUrlImg, argUrlImg1) {
    this.id = argId;
    this.name = argName;
    this.birth = argBirth;
    this.nationality = argNationaty;
    this.occupation = argOccupation;
    this.genre = argGenre;
    this.construction = argConstruction;
    this.url_img = argUrlImg;
    this.url_img_1 = argUrlImg1;
  };

  Litamana.Main = function() {
    var self = this;

    self.init = function(argCollection) {
      self.elemContainer = '.map-container';
      CollectionRender('js/concepts.json');
    };

    var CollectionRender = function(argUrl) {

      $.getJSON( argUrl, function(data) {
        
        $.each( data['escritores'], function(key, value) {
          COLLECTION.push(new Litamana.Author(key, value['id'], value['nacimento'], value['nacionalidade'], value['ocupacao'], value['genero'], value['obras relevantes'], value['url imagem'], value['url imagem 1']));
        });

        self.renderAvatarAuthor();
      }); 
    }; 

    self.renderAvatarAuthor = function() {
      for(var i in COLLECTION) 
        jQuery(self.elemContainer).find('.map-lista-escritores').append('<li id="'+ COLLECTION[i].id +'" class="map-lista-author"> <img src="'+ COLLECTION[i].url_img_1 +'" alt="Image of author '+ COLLECTION[i].name +'" /></li>');        
        self.authorDraggables(jQuery('.map-lista-author'));
        self.observerClickAuthor(jQuery('.map-lista-author'));
    };

    self.authorDraggables = function(argElem) {
      argElem.draggable({ containment: '.map-container', scroll: false }); 
    }

    self.observerClickAuthor = function(argElem) {
        argElem.click(function() {
          self.renderInformationAuthors(jQuery(this).attr('id'));
        });
    }

    self.renderInformationAuthors = function(argIdAuthor) {
        jQuery('.map-popup--instrucoes').html(
          '<span class="btn-fechar">x</span>'+
          '<h1>'+COLLECTION[argIdAuthor].name+'</h1>'+
          '<img src="'+COLLECTION[argIdAuthor].url_img+'" alt="" />'
        ).show();
    }

    self.init();

  };

  new Litamana.Main();

})();