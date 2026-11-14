/* GradMentor analytics events. Requires the gtag snippet in the page head. */
(function () {
  "use strict";
  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }
  var page = window.location.pathname;

  /* First-touch source: keep UTMs for the session and attach them to the contact form. */
  var store = null;
  try { store = window.sessionStorage; } catch (e) {}
  var qs = new URLSearchParams(window.location.search);
  var keys = ["utm_source", "utm_medium", "utm_campaign"];
  keys.forEach(function (k) {
    var v = qs.get(k);
    try { if (v && store && !store.getItem(k)) store.setItem(k, v); } catch (e) {}
  });
  try {
    if (store && !store.getItem("landing_page")) store.setItem("landing_page", page);
    if (store && !store.getItem("utm_source") && document.referrer && document.referrer.indexOf(location.hostname) === -1) {
      store.setItem("utm_source", new URL(document.referrer).hostname);
      store.setItem("utm_medium", "referral");
    }
  } catch (e) {}
  function stored(k) { try { return (store && store.getItem(k)) || ""; } catch (e) { return ""; } }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href");
    var card = a.closest("[data-offer]");
    if (card) {
      track("offer_click", {
        page: page,
        offer: card.getAttribute("data-offer"),
        value: Number(card.getAttribute("data-value")) || 0,
        currency: "USD",
        channel: /wa\.me/.test(href) ? "whatsapp" : "form"
      });
    }
    if (/^upi:/.test(href)) track("pay_link_click", { page: page, method: "upi" });
    if (/calendly\.com/.test(href)) track("book_call_click", { page: page, link_url: href });
    else if (/wa\.me|whatsapp/.test(href)) track("whatsapp_click", { page: page });
    else if (/^mailto:/.test(href)) track("email_click", { page: page });
    else if (/emilbinny\.com/.test(href)) track("emilbinny_click", { page: page });
    else if (/pay\.html/.test(href)) track("pay_intent", { page: page });
    else if (/resources\.html/.test(href)) track("toolkit_intent", { page: page });
    else if (/contact\.html/.test(href)) track("contact_intent", { page: page });
  });

  /* Contact form: preselect the service from ?service=, fill source fields, track submit. */
  var form = document.getElementById("contactForm");
  if (form) {
    var svc = qs.get("service");
    var sel = form.querySelector("#service");
    if (svc && sel) { sel.value = svc; if (sel.value !== svc) sel.value = ""; }
    keys.concat(["landing_page"]).forEach(function (k) {
      var f = form.querySelector('[name="' + k + '"]');
      if (f) f.value = stored(k);
    });
    form.addEventListener("submit", function () {
      track("contact_submit", { page: page, service: sel ? sel.value : "" });
      track("generate_lead", { page: page, lead_type: "contact_form", service: sel ? sel.value : "" });
    });
  }

  /* Calendly: a completed booking posts a message to the parent page. */
  window.addEventListener("message", function (e) {
    if (!e.origin || e.origin.indexOf("calendly.com") === -1) return;
    var ev = e.data && e.data.event;
    if (ev === "calendly.event_scheduled") {
      track("book_call_completed", { page: page });
      track("generate_lead", { page: page, lead_type: "booked_call" });
    } else if (ev === "calendly.date_and_time_selected") {
      track("book_call_time_selected", { page: page });
    }
  });

  /* MailerLite: fire once when the embedded form shows its success state. */
  var leadSent = false;
  function checkMl() {
    if (leadSent) return;
    var ok = document.querySelector(".ml-form-successBody, .ml-subscribe-form .row-success");
    if (ok && ok.offsetParent !== null) {
      leadSent = true;
      track("toolkit_signup", { page: page });
      track("generate_lead", { page: page, lead_type: "toolkit" });
    }
  }
  if (document.querySelector(".ml-embedded") && "MutationObserver" in window) {
    new MutationObserver(checkMl).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["style", "class"] });
  }
})();
