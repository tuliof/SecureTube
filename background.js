var SecureYoutube = {
    secure: function() {
        // Search for iframes
        for(var els = document.getElementsByTagName('iframe'), i = els.length; i--;) {
            var tubeSrc = els[i].src;
            var aux = '';
            console.log('Source: ' + tubeSrc);
        
            // Check if it has a link to youtube
            if (tubeSrc.indexOf('http://www.youtube.com') != -1) {
                aux = tubeSrc.substring(4, tubeSrc.length-1);
                console.log('Substring: ' + aux);
                tubeSrc = 'https' + aux;
                console.log('Tube src: ' + tubeSrc);
                els[i].src = tubeSrc;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    //chrome.tabs.executeScript(null, {allFrames: true, file: "secureTubeFile.js"});
    
    var insertedNodes = [];
    var observer = new WebKitMutationObserver(function(mutations) {
     mutations.forEach(function(mutation) {
       for (var i = 0; i < mutation.removedNodes.length; i++)
         insertedNodes.push(mutation.removedNodes[i]);
     })
    });
    observer.observe(document, { childList: true });
    console.log(insertedNodes);
});

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Browser Icon clicked');
    chrome.tabs.executeScript(null, {allFrames: true, file: "secureTubeFile.js"});
});