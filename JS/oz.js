	function initMap() {
		var pos = {lat: 51.0480971, lng: 31.8928313};
		
		var opt = {
			center: pos,
			zoom: 12,
		};
		var map = new google.maps.Map(document.getElementById("map"), opt);

		var marker = new google.maps.Marker({
			position: pos,
			map: map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			
		});

		var marker = new google.maps.Marker({
			position: {lat: 51.0594848,lng: 31.8920561},
			map: map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			});

				var marker = new google.maps.Marker({
			position: {lat: 51.0469103,lng: 31.88539},
			map: map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			});

				var marker = new google.maps.Marker({
			position: {lat: 51.0597509,lng: 31.8924478},
			map: map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			});

				var marker = new google.maps.Marker({
			position: {lat: 51.0593549,lng: 31.892094},
			map: map,
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			});
		
	}