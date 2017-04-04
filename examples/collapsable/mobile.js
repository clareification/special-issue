$(document).ready(function(){
		$("#test").hide();
		 $(".article").hide();
		$(".leaf").click(function(){
			$(this).children(".article").toggle();
		});
});
