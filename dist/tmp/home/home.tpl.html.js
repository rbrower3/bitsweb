angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div ng-controller=\"CarouselDemoCtrl\" class=\"row-fluid\">" +
    "" +
    "<div class=\"span12\">" +
    "  <carousel interval=\"myInterval\">" +
    "    <slide ng-repeat=\"slide in slides\" active=\"slide.active\">" +
    "      <img ng-src=\"{{slide.image}}\" style=\"margin:auto;\" class=\"img-rounded\">" +
    "      <div class=\"carousel-caption\">" +
    "        <h4>{{slide.title}}</h4>" +
    "        <p>{{slide.text}}</p>" +
    "      </div>" +
    "    </slide>" +
    "  </carousel>" +
    "  </div>" +
    "  </div>" +
    "  " +
    "  <h3>Engineering.</h3>" +
    "  <p>" +
    "Founded by a small group of engineers in 1999, BITS has grown to nearly 500 highly skilled " +
    " engineers who are recognized as leaders in their respective fields. The commitment of our" +
    " employees to \"Engineering Results\" is the catalyst that has propelled BITS to becoming a" +
    " leader in software development, R&D, sensor development and signal processing." +
    " </p>" +
    "<p>" +
    "Our engineering teams are highly adept at solving complex problems with the application of" +
    " leading-edge technology solutions, empowering decision-makers to make better" +
    " mission-critical decisions." +
    "</P>" +
    "<p>" +
    "Our operational team excels at signal collection, processing and analysis. We have" +
    " operational personnel stationed around the world in support of our customers' missions." +
    " </p>" +
    "");
}]);
