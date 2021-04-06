$( document ).ready(function() {
    console.log( "ready!" );
   $('#btShowP').click(function(){
       $('p').toggle();
   });
   $('#btAdd').click(function(){
       $('#content').append('<p>'+$('#texte').val()+'</p>');
   });

   $('#btAjax').click(function(){
       $.post('reponse.html',function(data){
           $('#content').append(data);
       });
   });
});