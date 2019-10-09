/* eslint-disable camelcase, no-var */
adroll_adv_id = 'OOZSVNSFUFBRDDX7L54VTW';
adroll_pix_id = 'PK76D35BLNH2TPMBWX5RFC';
(function () {
  var _onload = function () {
    if (document.readyState && !/loaded|complete/.test(document.readyState)) {
      setTimeout(_onload, 10);
      return;
    }
    if (!window.__adroll_loaded) {
      __adroll_loaded = true;
      setTimeout(_onload, 50);
      return;
    }
    var script = document.createElement('script');
    var host = (('https:' == document.location.protocol) ? 'https://s.adroll.com' : 'http://a.adroll.com');
    script.setAttribute('async', 'true');
    script.type = 'text/javascript';
    script.async = true;
    script.src = host + '/j/roundtrip.js';
    ((document.getElementsByTagName('head') || [ null ])[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(script);
  };
  if (window.addEventListener) {
    window.addEventListener('load', _onload, false);
  } else {
    window.attachEvent('onload', _onload);
  }
}());
