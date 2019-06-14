(function(d){
    'use strict';

    /**
     * Get amp-sticky-ad component code
     *
     * @param {Number} width
     * @param {Number} height
     * @param {String} client
     * @param {String} slot
     * @returns {string}
     */
    function getAmpStickyAdCode(width, height, client, slot) {
        return '<amp-sticky-ad layout="nodisplay">' +
            '<amp-ad width="'+width+'" height="'+height+'" type="adsense" ' +
            'data-ad-client="'+client+'" data-ad-slot="'+slot+'"></amp-ad></amp-sticky-ad>';
    }


    /**
     * Load https://cdn.ampproject.org/v0.js
     *
     * @param {Callable} onload
     */
    function loadAmpScript(onload) {
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://cdn.ampproject.org/v0.js';
        s.onload = onload || function(){};
        d.head.appendChild(s);
    }


    /**
     * Load https://cdn.ampproject.org/v0/amp-sticky-ad-1.0.js
     *
     * @param {Callable} onload
     */
    function loadAmpStickyAdScript(onload) {
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://cdn.ampproject.org/v0/amp-sticky-ad-1.0.js';
        s.onload = onload || function(){};
        d.head.appendChild(s);
    }


    // Do amp-sticky-ad init

    var stickies = d.getElementsByClassName('sticky-adsense');

    if (stickies.length > 1) {
        console.error('More then 1 sticky-adsense !');
    }

    [].forEach.call(stickies, function(sticky){

        var width = sticky.getAttribute('data-width') || 320;
        var height = sticky.getAttribute('data-height') || 100;
        var client = sticky.getAttribute('data-ad-client');
        var slot = sticky.getAttribute('data-ad-slot');

        if (!client) {
            console.error('sticky-adsense: attribute data-ad-client is required');
            return;
        }

        if (!slot) {
            console.error('sticky-adsense: attribute data-ad-slot is required');
            return;
        }

        sticky.innerHTML = getAmpStickyAdCode(width, height, client, slot);


    });

    loadAmpScript(function(){
        loadAmpStickyAdScript();
    });

})(document);