window.addEventListener('load', function()
{
    $.ajax({
    	url: '/api/notas/15/',
    	type: 'POST',
    	data: {
    		"pk": 15,
    		"titulo": "David2",
    		"descripcion": "Profesor2"
    	},
    })
    .done(function() {
    	console.log("success");
    })
    .fail(function(e) {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    
}
, false);