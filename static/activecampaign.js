/* eslint-disable */
if (!window.fetch) {
  activeCampaignTracking();
} else {
  fetch('https://api.qccareerschool.com/ip').then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('unable to categorize ip');
  }).then(function (data) {
    if (data.secure) {
      console.log('Not loading ActiveCampaign tracking');
    } else {
      activeCampaignTracking();
    }
  }).catch(function (err) {
    console.log(err);
    activeCampaignTracking();
  });
}

function activeCampaignTracking() {
  // Set to false if opt-in required
  var trackByDefault = true;
  function acEnableTracking() {
    var expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
    document.cookie = "ac_enable_tracking=1; expires=" + expiration + "; path=/";
    acTrackVisit();
  }
  function acTrackVisit() {
    var trackcmp_email = '';
    var trackcmp = document.createElement("script");
    trackcmp.async = true;
    trackcmp.type = 'text/javascript';
    trackcmp.src = '//trackcmp.net/visit?actid=25481980&e=' + encodeURIComponent(trackcmp_email) + '&r=' + encodeURIComponent(document.referrer) + '&u=' + encodeURIComponent(window.location.href);
    var trackcmp_s = document.getElementsByTagName("script");
    if (trackcmp_s.length) {
      trackcmp_s[0].parentNode.appendChild(trackcmp);
    } else {
      var trackcmp_h = document.getElementsByTagName("head");
      trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
    }
  }
  if (trackByDefault || /(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie)) {
    acEnableTracking();
  }
}
