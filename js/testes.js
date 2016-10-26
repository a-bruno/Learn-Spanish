var Litaman = Litaman || {};

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

		this.jSON('dados.json', this);
	},
	jSON: function(nameFile, that) {
		$.ajax({
			url: that.PATH_URL + nameFile,
			dataType: that.typeFile,
			async: false
		})
		.done(function(data){
			 $.each(data, function(key, value) {
				that.germination(that.nameToBean, data[key]);
			 });
		});
	},
	html: function() {
		
	}
};

$.extend(Litaman.ManagerBeans.prototype, Litaman.Beans);

(function() {
	var stub = new Litaman.ManagerBeans();
	var mountHtmlWriters = function() {
		console.log(this.bean);
	};

	mountHtmlWriters();
})();



