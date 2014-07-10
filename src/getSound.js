var getSound = function(source, sound){
  var request = new XMLHttpRequest();

  request.open("GET", source, true);
  request.responseType = "arraybuffer";

  request.onload = function() {
    var incomingData = request.response;
    sound.sound = incomingData;
  };

  request.send();
};
