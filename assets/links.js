// Where each "get the spreadsheet" button points.
window.HB_LINKS = {
  shop: "https://honestbaking.etsy.com",
  cake: "https://honestbaking.etsy.com/listing/4621884387/cake-pricing-calculator-and-serving",
  cookie: "https://honestbaking.etsy.com/listing/4621896118/decorated-cookie-pricing-calculator",
  recipe: "https://honestbaking.etsy.com/listing/4621898824/recipe-cost-calculator-spreadsheet-with",
  orders: "https://honestbaking.etsy.com/listing/4621893547/bakery-order-tracker-spreadsheet-with",
  bookkeeping: "https://honestbaking.etsy.com/listing/4621903740/cottage-food-bookkeeping-spreadsheet",
  bundle: "https://honestbaking.etsy.com/listing/4621905584/home-bakery-business-spreadsheet-bundle"
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[data-link]").forEach(function (a) {
    var href = window.HB_LINKS[a.getAttribute("data-link")];
    if (href) a.href = href;
  });
});
