$(document).ready( function() {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {host: "hello"}, function (response){
      console.log(response)
      var serverUrl = 'http://localhost:12165/';
      var x = new XMLHttpRequest();
      x.open('POST', serverUrl , true);
      x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      x.send(response);
    });
  }); 
});
