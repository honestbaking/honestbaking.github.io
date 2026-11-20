// Pricing maths shared by the web calculators. Same formulas as the Cake Pricing Calculator
// spreadsheet (Cake Calculator tab, section 5), so a web estimate and the spreadsheet agree.
(function (root) {
  "use strict";

  // Excel CEILING(x, step); step 0 or blank = no rounding (as the spreadsheet does).
  function roundUp(x, step) {
    if (!(step > 0)) return x;
    var q = Math.round((x / step) * 1e9) / 1e9; // ignore floating-point dust like 3.0000000004
    return Math.ceil(q) * step;
  }

  // inputs: ingredients, packaging, delivery ($); hours; rate, overhead ($/hour);
  // markup, feePct (fractions, e.g. 0.3 and 0.029); feeFixed ($); roundTo ($); servings; ownPrice ($, optional)
  function cakePrice(i) {
    var n = function (v) { v = Number(v); return isFinite(v) ? v : 0; };
    var hours = n(i.hours);
    var time = hours * n(i.rate);
    var overhead = hours * n(i.overhead);
    var cost = n(i.ingredients) + n(i.packaging) + n(i.delivery) + time + overhead;
    var markup = cost * n(i.markup);
    var beforeFees = cost + markup;
    var exact = beforeFees > 0 ? (beforeFees + n(i.feeFixed)) / (1 - n(i.feePct)) : 0;
    var suggested = roundUp(exact, n(i.roundTo));
    var price = n(i.ownPrice) > 0 ? n(i.ownPrice) : suggested;
    var fees = price > 0 ? price * n(i.feePct) + n(i.feeFixed) : 0;
    var profit = price - fees - cost;
    return {
      cost: cost, time: time, overhead: overhead, markup: markup, exact: exact,
      suggested: suggested, price: price, fees: fees, profit: profit,
      perServing: n(i.servings) > 0 ? price / n(i.servings) : null,
      perHour: hours > 0 ? (profit + time) / hours : null
    };
  }

  function money(x) {
    if (x === null || x === undefined || !isFinite(x)) return "-";
    var s = Math.abs(x).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (x < 0 ? "-$" : "$") + s;
  }

  var api = { roundUp: roundUp, cakePrice: cakePrice, money: money };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.HB = api;
})(this);
