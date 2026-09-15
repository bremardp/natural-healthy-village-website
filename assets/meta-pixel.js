/**
 * Meta Pixel for Natural Healthy Village.
 * 1. Create a Pixel in Meta Events Manager (linked to the Facebook Page).
 * 2. Paste the Pixel ID below.
 * 3. Redeploy the site. Tracking stays off while the ID is empty.
 */
(function () {
  var PIXEL_ID = "";
  if (!PIXEL_ID) return;

  if (window.fbq) {
    window.fbq("track", "PageView");
    return;
  }

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
})();
