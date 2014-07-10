if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext')){
  window.webkitAudioContext = AudioContext;
}

// window.onLoad = init;
var context = new webkitAudioContext;

