chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Request intercepted: " + info.url);
    return {cancel: true};
  },
  // filters
  {
    urls: [
      "*://*.facebook.com/ajax/mercury/change_read_status.php"
    ]
  },
  // extraInfoSpec
  ["blocking"]);
