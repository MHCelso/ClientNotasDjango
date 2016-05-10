( function()
{
	this.Nota = function( args )
	{
		this.__args__ = args;
		this.__args__.csrftoken = Cookies.get('csrftoken');
		for( var key in args )
			this[ key ] = args[key];
	};

	this.Nota.get = function( id, callBack )
	{
		var csrftoken = Cookies.get( 'csrftoken' );
		return $.ajax({
	        url: '/api/notas/' + id + '/',
	        type: 'GET',
	        data: csrftoken
        })
         .success( callBack );
	};

	this.Nota.getAll = function( callBack )
	{
		var csrftoken = Cookies.get( 'csrftoken' );
		return $.ajax({
	        url: '/api/notas/',
	        type: 'GET',
	        data: csrftoken
        })
          .success( callBack );
	};

	this.Nota.prototype.insert = function( callBack )
	{
		var Nota = this.__args__;
		$.ajax({
	        url: '/api/notas/',
	        type: 'POST',
	        data : Nota
        })
          .success( callBack );
	};

	this.Nota.delete = function( id, callBack )
	{
		var csrftoken = Cookies.get( 'csrftoken' );
		$.ajax({
	        url: '/api/notas/' + id + '/',
	        type: 'DELETE',
	        data: csrftoken
        })
          .success( callBack );
	};

	this.Nota.prototype.update = function( callBack )
	{
		var Nota = this.__args__;
		$.ajax({
	        url: '/api/notas/' + Nota.pk + '/',
	        type: 'PUT',
	        data: Nota
        })
          .success( callBack );
	};
})
  .apply( this );