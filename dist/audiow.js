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

if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext')){
  window.webkitAudioContext = AudioContext;
}

// window.onLoad = init;
var context = new webkitAudioContext;


// eventual params = buffer, pan, x, y, z, sendGain, mainGain, playbackRate, noteTime
// hardcoded for now

var temp = "http://www.freesound.org/people/SeryLis/sounds/181425/download/181425__serylis__guitar-chord.wav"
//buffer is basically the sound
var playNote = function(buffer){
  var pan = "";
  var x;
  var y;
  var z;
  var sendGain;
  var mainGain;
  var playbackRate;
  var noteTime = 0;

  var sound = context.createBufferSource();
  console.log(buffer, sound);
  sound.buffer = buffer; 
  sound.playbackRate.value = null // edit soon

  var finalNode;
  //handle panning
  var dryGainNode = context.createGain();
  // var drayGainNode.gain.value = mainGain;

  finalNode = sound;
  finalNode.connect(dryGainNode); 

  sound.start(noteTime);
};
var Sound = function(source){
  getSound(source, this);
};

Sound.prototype.play = function(){
  playNote(this.sound);
};