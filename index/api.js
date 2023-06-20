window.onload = function(){
    var map;
    function initialize (){
        
        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollWhell:false,
            zoom:12,
            MapTypeID:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map"),mapProp)
    }

    initialize();
   
    }