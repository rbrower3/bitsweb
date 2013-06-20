angular.module("results/results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("results/results.tpl.html",
    "<div class=\"row-fluid\">" +
    "    <img ph-img=\"1200x500\" class=\"img-rounded\"/>" +
    "</div>" +
    "" +
    "<h3>Results.</h3>" +
    "  " +
    "<p ph-txt=\"5s\"></p>" +
    "  " +
    "<p ph-txt=\"5s\"></p>" +
    "  " +
    "");
}]);
