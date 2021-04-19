$(document).ready(function(){
	$.getJSON("js/team.json", function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						$("#crew").append(
							"Name: " + value.name + "<br>" + 
							"Title: " + value.title + "<br>" + 
							"Department: " + value.department + "<br>" + 
							"Bio: " + value.bio + "<br><br>"
						);
					});
				}); 
	});

});