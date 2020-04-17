$('.sl').slick({
autoplay: true,
autoplaySpeed: 2000,
speed: 500,
centerMode: true,
centerPadding: '25px',
arrows: false,
pauseOnFocus: false,
dots: true
});


	function initMap() {
		var pos = {lat: 51.0465985, lng: 31.880841};
		var opt = {
			center: pos,
			zoom: 18,
		};
		var map = new google.maps.Map(document.getElementById("map"), opt);

		var marker = new google.maps.Marker({
			position: pos,
			map: map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			
		});
		
	}