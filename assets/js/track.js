/* GradMentor analytics events. Requires the gtag snippet in the page head. */
(function () {
  "use strict";
  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }
  var page = window.location.pathname;
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href");
    if (/calendly\.com/.test(href)) track("book_call_click", { page: page, link_url: href });
    else if (/wa\.me|whatsapp/.test(href)) track("whatsapp_click", { page: page });
    else if (/^mailto:/.test(href)) track("email_click", { page: page });
    else if (/emilbinny\.com/.test(href)) track("emilbinny_click", { page: page });
    else if (/pages\/contact\.html|^contact\.html/.test(href)) track("contact_intent", { page: page });
  });
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function () {
      track("contact_submit", { page: page });
    });
  }
})();
