window.addEventListener('load', function()
{
/*	$(function(){
    $.getJSON('/api/notas/15', function(data) {
        console.log(data);
    });
});*/
   jQuery.ajax({
         type: "DELETE",
         url: "http://localhost/api/notas",
         contentType: "application/json; charset=utf-8",
         data: '{"pk": 15}',
         dataType: "json",
         success: function (data, status, jqXHR) {
             // do something
         },
     
         error: function (jqXHR, status) {
             // error handler
         }
     });
}
, false)