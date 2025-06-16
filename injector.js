// injector.js
const script = document.createElement('script');
script.src = chrome.runtime.getURL('netease_music_full_list.js');
script.onload = function() {
  // Optional: remove the script tag once it has been loaded
  // this.remove();
};
(document.head || document.documentElement).appendChild(script);
