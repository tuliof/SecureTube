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

SecureYoutube.secure();