
var ajaxButton = document.getElementById('ajaxButton');
var ajaxDiv = document.getElementById('ajaxDiv');




$('#ajaxButton').click( function() {
	$.get("content.html", function(data) {
		$("#ajaxDiv").html(data);
		$('#ajaxButton').hide();
	}).fail(function() {
		alert("There was an error, but don't worry its not your fault!");
	});
});