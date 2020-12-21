// codigo de js javascript codigo fuente logico

// javascript
console.log("Cod. Javascript");

//preloar 
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById("loader_bg").style.display = "none";
    document.getElementById("mybody").style.display = "block";
}  

// jquery
$(document).ready(function(){
    console.log("Cod. Jquery");
    // menu
    $('#btnMenu').click(function(){
        $('.list-menu-info').toggleClass('show');
    });
    // music audio
	// funcion de audio
	var obj = document.createElement("audio");
	obj.src = "audio/audio.mp3";
	obj.volume = 1;
	obj.autoPlay = true;
	obj.preLoad = true;       
	// funcion de musica en la pagina web
	$('#playNowBtn').click(function(e){
		var $playNowButton = $(this);																/* button variable */
		var $playlist = $playNowButton.parent().parent();						/* play list section class */
		var $disk			= $playlist.children().children('.album-img-disk');			/* disk image */
		
		if ($disk.hasClass('rotating')) {
			$disk.removeClass('rotating');
			$playNowButton.children('span').removeClass('fa-pause').addClass('fa-play');
			obj.pause();
		} else {
			$disk.addClass('rotating');
			$playNowButton.children('span').removeClass('fa-play').addClass('fa-pause');
			obj.play();
		}
		e.preventDefault();
	});
	// carusel
	$("#portfolioOwl").owlCarousel({
			autoPlay: 60000,
			slideSpeed: 1200,
		paginationSpeed : 500,
		stopOnHover: true,
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTabletSmall : [767,2]
	}); 
});

