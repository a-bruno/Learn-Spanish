$(function() {
    
    var lmeVetBool = new Array();
    for(var i = 0; i < 9; i ++) { lmeVetBool[i] = false; }  
    
    $('.lmeArgentina, .lmePeru, .lmeChile, .lmeUruguay, .lmeEsc-5, .lmeEsc-6, .lmeEsc-7, .lmeEsc-8, .lmeEsc-9').hide();
    
    var Escritores = {
        'Rodrigo_Rey' : {
            'None' : 'Rodrigo Rey Rosa', 'Nacimiento' : '4 de noviembre de 19958 Ciudad de Guatemala Guatemala',
            'Nacionalidade' : 'Guatemalteca', 'Ocupación' : 'Escritor',
            'Genero' : 'Novela, cuento', 'Obras_relevantes' : 'El material humano Los sordos',
            'urlImagem' : 'img/escritores/f-quadradas-d-RodrigoR.png'
        },
        
        'Gillermo_Cabrera' : {
            'None' : 'Gillermo Cabrera', 'Nacimiento' : '22 de abril de 1929 Gibara, Cuba',
            'Nacionalidade' : 'Cubano', 'Ocupación' : 'Lingüista, guionista, traductor, ensayista y escritor',
            'Genero' : 'Novela, cuento, ensayo', 'Obras_relevantes' : 'Tres tristes tigres (novela) La Habana para un Infante Difunto (novela)',
            'urlImagem' : 'img/escritores/f-quadradas-d-GillermoC.png'
        },
        
        'Jorge_Llosa' : {
            'None' : 'Jorge Mario Pedro Vargas Llosa', 'Nacimiento' : '28 de marzo de 1936  Bandera del Perú Arequipa, Perú',
            'Nacionalidade' : 'Peruana', 'Ocupación' : 'Escritor y político',
            'Genero' : 'Realismo social, literatura hispanoamericana', 'Obras_relevantes' : 'La ciudad y los perros Lituma en los Andes',
            'urlImagem' : 'img/escritores/f-quadradas-d-VLosa.png'
        },
        
        'Rivera_Litelier' : {
            'None' : 'Hernán Rivera Letelier', 'Nacimiento' : '11 de julio de 1950 Talca,Chile',
            'Nacionalidade' : 'Chilena', 'Ocupación' : 'Escritor',
            'Genero' : 'Novela, poesía y cuento', 'Obras_relevantes' : 'La reina Isabel cantaba rancheras. Himno del ángel parado en una pata.',
            'urlImagem' : 'img/escritores/f-quadradas-d-RiveraL.png'
        },
        
        'Jorge_Luis' : {
            'None' : 'Jorge Luis Borges', 'Nacimiento' : '24 de agosto de 1899 Buenos Aires, Argentina',
            'Nacionalidade' : 'Argentina', 'Ocupación' : 'Escritor, poeta, ensayista, traductor, crítico literario, bibliotecario',
            'Genero' : 'Cuento, ensayo, poesía', 'Obras_relevantes' : 'El Aleph (cuento) Cuentos Breves Y Extraordinarios (cuento, junto con Bioy Casares)',
            'urlImagem' : 'img/escritores/f-quadradas-d-JorgeL.png'
        },
        
        'Gabriel_Garcia' : {
            'None' : 'Gabriel Garcia Marquez', 'Nacimiento' : '6 de marzo de 1927 Aracataca, Colombia',
            'Nacionalidade' : 'Colombiana', 'Ocupación' : 'Escritor, periodista, editor, guionista',
            'Genero' : 'Novela, cuento, crónica, reportaje', 'Obras_relevantes' : 'El coronel no tiene quien le escriba Crónica de una muerte anunciada',
            'urlImagem' : 'img/escritores/f-quadradas-d-GabrielG.png'
        },
        
        'Carlos_Fuentes' : {
            'None' : 'Carlos Fuentes Macías', 'Nacimiento' : '11 de noviembre de 1928 ,Panamá, Panamá',
            'Nacionalidade' : 'Mexicana', 'Ocupación' : 'Novelista, ensayista, sociólogo y diplomático',
            'Genero' : 'Novela, Cuento, Ensayo', 'Obras_relevantes' : 'La muerte de Artemio Cruz Gringo viejo',
            'urlImagem' : 'img/escritores/f-quadradas-d-CarlosF.png'
        },
        
        'Pablo_Neruda' : {
            'None' : 'Ricardo Eliécer Neftalí Reyes Basoalto', 'Nacimiento' : '12 de julio de 1904,Parral, Chile',
            'Nacionalidade' : 'Chilena', 'Ocupación' : 'Poeta,Escritor,Diplomático,Político',
            'Genero' : 'Poesía', 'Obras_relevantes' : 'Veinte poemas de amor y una canción desesperada Canto General',
            'urlImagem' : 'img/escritores/f-quadradas-d-PabloN.png'
        },
        
        'Eduardo_Galeano' : {
            'None' : 'Eduardo Germán María Hughes Galeano', 'Nacimiento' : '3 de septiembre de 1940, Montevideo, Uruguay',
            'Nacionalidade' : 'Uruguaya', 'Ocupación' : 'Escritor, periodista',
            'Genero' : '?', 'Obras_relevantes' : 'Las venas abiertas de América Latina Memoria del fuego ',
            'urlImagem' : 'img/escritores/f-quadradas-d-EduardoG.png'
        },
                
    };
        
    // Tornar todos os elementos arrastaveis na tela. Limitando a área de atuação. 
    teste1 = $('.lmeEscritor').draggable({ containment: ".lme-container-j2", scroll: false });
    
        
    // Lógica para os elementos DROP. Que receberam os elementos arrastados.
    // México
    $('.lmeEsc-1').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag8')) {
                $('.lmeDrag8').draggable({ containment: this });
                $('.lmeMexico').attr('src','img/paises/Mexico_Green.png');
                
                lmeVetBool[0] = true;
            }
        }
    });
    
    // Cuba
    $('.lmeEsc-2').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag4')) {
                $('.lmeDrag4').draggable({ containment: this });
                $('.lmeCuba').attr('src','img/paises/Cuba_Green.png');
                
                lmeVetBool[1] = true;
            }
        }
    });
    
    // Guatemala
    $('.lmeEsc-3').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag1')) {
                $('.lmeDrag1').draggable({ containment: this });
                $('.lmeGuatemala').attr('src','img/paises/Guatemala_Green2.png');
                
                lmeVetBool[2] = true;
            }
        }
    });
    
    // Colombia
    $('.lmeEsc-4').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag3')) {
                $('.lmeDrag3').draggable({ containment: this });
                $('.lmeColombia').attr('src','img/paises/Colombia_Green.png');
                
                lmeVetBool[3] = true;
            }
        }
    });
    
    // Peru 
    $('.lmeEsc-5').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag9')) {
                $('.lmeDrag9').draggable({ containment: this });
                $('.lmePeru').attr('src','img/paises/Peru_Green.png');
                
                lmeVetBool[4] = true;
            }
        }
    });
    
    // Chile
    $('.lmeEsc-6').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag7')) {
                $('.lmeDrag7').draggable({ containment: this });
                $('.lmeChile').attr('src','img/paises/Chile_Orange.png');
                
                lmeVetBool[5] = true;
                ChileVerde();
            }
        }
    });
    
    // Chile
    $('.lmeEsc-7').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag6')) {
                $('.lmeDrag6').draggable({ containment: this });
                $('.lmeChile').attr('src','img/paises/Chile_Orange.png');
                
                lmeVetBool[6] = true;
                ChileVerde();
            }
        }
    });
    
    function ChileVerde() {
        if(lmeVetBool[5] == true && lmeVetBool[6] == true) {
            $('.lmeChile').attr('src','img/paises/Chile_Green.png');    
        }
    }
    
    // Argentina
    $('.lmeEsc-8').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag5')) {
                $('.lmeDrag5').draggable({ containment: this });
                $('.lmeArgentina').attr('src','img/paises/Argentina_Green.png');
                
                lmeVetBool[7] = true;
            }
        }
    });
    
    // Uruguay
    $('.lmeEsc-9').droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass('lmeDrag2')) {
                $('.lmeDrag2').draggable({ containment: this });
                $('.lmeUruguay').attr('src','img/paises/Uruguay_Green.png');
                
                lmeVetBool[8] = true;
            }
        }
    });
    
    /* Funcões de click (Imagem de cada escritor) */
    $('.lmeDrag1').click(function() { if(lmeVetBool[2] == true) { lmePreencheInformacoes(Escritores.Rodrigo_Rey); } });
    
     $('.lmeDrag2').click(function() { if(lmeVetBool[8] == true) { lmePreencheInformacoes(Escritores.Eduardo_Galeano); } });
    
    $('.lmeDrag3').click(function() { if(lmeVetBool[3] == true) { lmePreencheInformacoes(Escritores.Gabriel_Garcia); } });
        
    $('.lmeDrag4').click(function() { if(lmeVetBool[1] == true) { lmePreencheInformacoes(Escritores.Gillermo_Cabrera); } });
    
    $('.lmeDrag5').click(function() { if(lmeVetBool[7] == true) { lmePreencheInformacoes(Escritores.Jorge_Luis); } });
    
    $('.lmeDrag6').click(function() { if(lmeVetBool[6] == true) { lmePreencheInformacoes(Escritores.Pablo_Neruda); } });
    
    $('.lmeDrag7').click(function() { if(lmeVetBool[5] == true) { lmePreencheInformacoes(Escritores.Rivera_Litelier); } });
    
    $('.lmeDrag8').click(function() { if(lmeVetBool[0] == true) { lmePreencheInformacoes(Escritores.Carlos_Fuentes); } });
    
    $('.lmeDrag9').click(function() { if(lmeVetBool[4] == true) { lmePreencheInformacoes(Escritores.Jorge_Llosa); } } );
    
    /* Função para preencher Popup de informações dos escritores. */
    function lmePreencheInformacoes(objEscritor) {
        $('.lmePopup-informacoesEsc h3').text(objEscritor.None);
        $('.lmeInfQuadro-nacimiento p').text(objEscritor.Nacimiento);
        $('.lmeInfQuadro-nacionalidade p').text(objEscritor.Nacionalidade);
        $('.lmeInfQuadro-ocupacion p').text(objEscritor.Ocupación);
        $('.lmeInfQuadro-genero p').text(objEscritor.Genero);
        $('.lmeInfQuadro-obras p').text(objEscritor.Obras_relevantes);
        
        $('.lmeIMGPerfil').attr('src', objEscritor.urlImagem);
        
        $('.lmePopup-informacoesEsc').show();
    }

    // Evento do botão CAMBIAR REGIÓN
    var regionAtual = 1;
    
    $('.lme-btncambiarRegion').click(function() {
        if(regionAtual == 1) {
            if(lmeVetBool[0] == true && lmeVetBool[1] == true && lmeVetBool[2] == true && lmeVetBool[3] == true) {
                setTimeout(function() {
                    $('.lmeArgentina, .lmePeru, .lmeChile, .lmeUruguay').show();
                    $('.lmeEsc-5, .lmeEsc-6, .lmeEsc-7, .lmeEsc-8, .lmeEsc-9').show();   
                    $('.lmeDrag2, .lmeDrag5, .lmeDrag6, .lmeDrag7, .lmeDrag9').show();
                }, 1000);
                
                $('.lmeMexico, .lmeGuatemala, .lmeCuba, .lmeColombia, .lmeEsc-1, .lmeEsc-2, .lmeEsc-3, .lmeEsc-4, .lmeDrag1, .lmeDrag3, .lmeDrag4, .lmeDrag8').hide();
                
                $('.lmeTitleRegion').css('background-image','url(img/lmeRegion_2.png)');
                $('.lme-container-j2').addClass('lme-container-j2-2');
                
                regionAtual = 2;  
            } 
        
        } else  if(regionAtual == 2) {
            if(lmeVetBool[4] == true && lmeVetBool[5] == true && lmeVetBool[6] == true && lmeVetBool[7] == true && lmeVetBool[8] == true) {
                    setTimeout(function(){
                        $('.lmeMexico, .lmeGuatemala, .lmeCuba, .lmeColombia').show();
                        $('.lmeEsc-1, .lmeEsc-2, .lmeEsc-3, .lmeEsc-4').show();
                        $('.lmeDrag1, .lmeDrag3, .lmeDrag4, .lmeDrag8').show(); 
                        
                    }, 1000);
                    
                    $('.lmeArgentina, .lmePeru, .lmeChile, .lmeUruguay').hide();
                    $('.lmeEsc-5, .lmeEsc-6, .lmeEsc-7, .lmeEsc-8, .lmeEsc-9').hide();   
                    $('.lmeDrag2, .lmeDrag5, .lmeDrag6, .lmeDrag7, .lmeDrag9').hide();
                
                    $('.lme-container-j2').removeClass('lme-container-j2-2');
                    $('.lmeTitleRegion').css('background-image','url(img/lmeRegion_1.png)');

                    regionAtual = 1;   
            }
        }
    });
    
    // Botão de instruções.
    $('.lmeBTN-instrucoes').click(function() { $('.lmePopup-instrucoes').show(); });
    
    // Botãon X do popup instruções.
    $('.lmePopup-instrucoes span').click(function() { $('.lmePopup-instrucoes').hide(); });
    
    $('.lmePopup-informacoesEsc span').click(function() { $('.lmePopup-informacoesEsc').hide(); });
    
});