function initMap() {
  var uluru = { lat: 40.6976701, lng: -74.2598729 };
  var map = new google.maps.Map(document.getElementById("conMap"), {
    zoom: 8,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
