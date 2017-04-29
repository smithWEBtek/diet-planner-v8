$(function(){
  $("#quick_quote_form").on("click", function(e){
  console.log("js is working")
  	
  //   $.get(this.href).success(function(response){
  //     $("div#ajax-contacts").html(response);
  //   }).error(function(){
  //     alert("we broke!!!");
  //   });
    e.preventDefault();
  });
}); 