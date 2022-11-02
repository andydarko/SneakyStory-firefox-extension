let toggle = false;

browser.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){

  if (toggle == false){
    toggle = true;
    browser.browserAction.setIcon({path: "icons/19_on.png"});
  }else{
    toggle = false;
    browser.browserAction.setIcon({path: "icons/19_off.png"});
  }

  blocker(toggle);
}

function blocker(){
  browser.webRequest.onBeforeRequest.addListener(function (e){
    return {cancel: toggle};
  }, {
    types: ["xmlhttprequest"],
    urls: ["https://www.instagram.com/api/v1/stories/reel/seen"],
  },["blocking"]);
}
