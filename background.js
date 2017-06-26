chrome.runtime.onInstalled.addListener(function() {
   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
         conditions: [
            new chrome.declarativeContent.PageStateMatcher({
               css: ["a[href$='docker-compose.yml']", "a[href$='docker-compose.yaml']"],
               pageUrl: {
                  hostEquals: 'github.com'
               }
            })
         ],
         actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
   });
});
chrome.pageAction.onClicked.addListener(function(tab){
  var url = "http://exampleup.com:31111?repo=" + encodeURIComponent(tab.url);
  chrome.tabs.create({url: url});
});
