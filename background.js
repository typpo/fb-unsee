chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.info('Read status request blocked');
    return {cancel: true};
  },
  {
    urls: ["*://*.facebook.com/ajax/mercury/change_read_status.php*",]
  },
  ["blocking"]);
