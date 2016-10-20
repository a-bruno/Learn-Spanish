var getJSON = function(url, a) {
	if(!url) {
		return false;
	} else {
		jQuery.ajax({
			url: url,
			async: false,
			dataType: 'JSON',
			method: 'POST'
		}).done(function(data) {
			return a.push(new Array(data['escritores']));
		});
	}
}

var tes = new Array();

console.log(getJSON('js/concepts.json', tes));

// array.forEach(function(elem) {
// 	console.log();
// });

