/**
 * Lead-conversion tracking for Natural Healthy Village.
 * GA4 enhanced measurement does not capture tel: or mailto: clicks, and those
 * are the site's actual conversions. Fires a GA4 event for each.
 */
(function () {
  function send(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (href.indexOf("tel:") === 0) {
      send("contact_phone_click", { method: "phone", phone_number: href.slice(4), link_text: (a.innerText || "").trim().slice(0, 60) });
    } else if (href.indexOf("mailto:") === 0) {
      send("contact_email_click", { method: "email", link_text: (a.innerText || "").trim().slice(0, 60) });
    }
  }, true);
})();
