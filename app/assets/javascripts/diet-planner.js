$(function(){
  $("#new_celeb").on("submit", function(e){
		url = this.action
  	data = {
  		'authenticity_token':	$("input[name='authenticity_token']").val(),
  		'celeb': {'name': $("#celeb_name").val()}
  	}
  	$.ajax({
  		type: "POST",
  		url: url,
  		data: data,
  		success: function(response){
  			debugger;
  			
  			$("#new_celeb").html(response)
  		}
  	});
  	e.preventDefault(); 		
  });
}); 