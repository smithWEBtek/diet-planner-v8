$(function(){
  $("#new_celeb").on("submit", function(e){
		url = this.action
  	data = {
  		'authenticity_token':	$("input[name='authenticity_token']").val(),
  		'celeb': {'name': $("#celeb_name").val()}
  	}
  	e.stopImmediatePropagation();
  	$.ajax({
  		type: 'POST',
  		url: url,
  		data: data,
  		success: function(response){
  		$("#new_celeb").text('')
  		$("#asdf").append(response)
  		 }
  	});
  	e.preventDefault();
  });
}); 


// function reloadCelebs(){
// 	$.ajax({
// 		method: "GET",
// 		url: "/celebs"
//     }).done(function(response){
//     	// console.log(response);
//     	$("#celeb_list").append(response);
// 	});
// }
