// Where each "get the spreadsheet" button points.
window.HB_LINKS = {
  shop: "https://honestbaking.etsy.com",
  cake: "https://www.etsy.com/listing/4621884387/cake-pricing-calculator-and-serving",
  cookie: "https://honestbaking.etsy.com",
  recipe: "https://honestbaking.etsy.com",
  orders: "https://honestbaking.etsy.com",
  bookkeeping: "https://honestbaking.etsy.com",
  bundle: "https://honestbaking.etsy.com"
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[data-link]").forEach(function (a) {
    var href = window.HB_LINKS[a.getAttribute("data-link")];
    if (href) a.href = href;
  });
});
