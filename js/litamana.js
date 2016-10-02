(function() {

  var Litamana = Litamana || {}; 

  Litamana.Author = function(argName, argBirth, argNationaty, argOccupation, argGenre, argConstruction, argUrlImg, argUrlImg1) {
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
      var aux = [];

      $.getJSON( argUrl, function(data) {
        
        $.each( data['escritores'], function(key, value) {
          aux.push(new Litamana.Author(key, value['nacimento'], value['nacionalidade'], value['ocupacao'], value['genero'], value['obras relevantes'], value['url imagem'], value['url imagem 1']));
        });

        self.renderAvatarAuthor(aux);
      
      }); 
    }; 

    self.renderAvatarAuthor = function(COLLECTION)  {
      for(var i in COLLECTION) 
        jQuery(self.elemContainer).find('.map-lista-escritores').append('<li class="map-lista-author"> <img src="'+ COLLECTION[i].url_img_1 +'" alt="Image of author '+ COLLECTION[i].name +'" /></li>');        
        self.authorDraggables(jQuery('.map-lista-author'));
    };

    self.authorDraggables = function(argElem) {
      argElem.draggable({ containment: ".map-container", scroll: false }); 
    }

    self.init();

  };

  new Litamana.Main();



})();