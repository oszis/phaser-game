/* global objectFitPolyfill */

import 'objectFitPolyfill';

// import 'bootstrap';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/carousel';
import 'babel-polyfill';
// import $ from 'jquery/dist/jquery.min';

if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}

function requireAll(r) {
    r.keys()
        .forEach(r);
}

requireAll(require.context('../../components/', true, /\.svg$/));
requireAll(require.context('../icons/', true, /\.svg$/));
import './views';

window.addEventListener('resize', objectFitPolyfill);
