angular.module("working/working.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("working/working.tpl.html",
    "<div class=\"row-fluid\">" +
    "" +
    "  <img ph-img=\"1200x500\" class=\"img-rounded\"/>" +
    "" +
    "<!--" +
    "<img src=\"assets/images/opportunities.jpg\">" +
    "-->" +
    "  <h3>  Working at BITS </h3>" +
    "  " +
    "  <p>" +
    "  At BIT Systems (BITS), a Six3 Systems (Six3) company, we work hard and play even harder. " +
    "   You'll be challenged everyday, but no one said that work couldn't be fun! Our corporate" +
    "   culture is employee-friendly and we offer challenging projects where the results really" +
    "   make a difference." +
    "   </p>" +
    "   " +
    "   <p>" +
    "   We foster an environment where employees are empowered to expand their personal," +
    "    professional and educational horizons while working in a diverse and collaborative" +
    "    environment. Our employees are encouraged to maintain a healthy balance between work" +
    "    and home life." +
    "   </p>" +
    "    " +
    "   <p>" +
    "   Historically, the company has sponsored local traditions for each of the regional" +
    "    office employees and their spouses. Some examples are" +
    "    <a href=\"http://www.keystoneresort.com\">skiing in the Rockies</a> for Colorado-based employees," +
    "    a baseball game at <a href=\"http://baltimore.orioles.mlb.com/bal/ballpark/index.jsp\">Camden Yards</a>," +
    "    VIP tickets to <a href=\"http://www.woltrap.org\">Wolf Trap</a>," +
    "    and a family picnic for Virginia-based employees." +
    "    </p>" +
    "    " +
    "    <p>" +
    "    BITS is headquartered in Northern Virginia with <a href=\"#/locations\">offices</a> in Florida , Colorado and" +
    "     California where we are always interested in establishing long-term relationships" +
    "     with new employees. BITS attracts, awards and retains talented employees so if you" +
    "     have a background in Aerospace or Electrical Engineering, Computer Science," +
    "     Math and/or Physics and would like to explore a future with BITS," +
    "     <a href=\"mailto:resumes@bit-sys.com\">please submit your resume.</a>" +
    "    </p>" +
    "     " +
    "    <div ng-controller=\"WorkingCtrl\">" +
    "        <a href=\"#/working\" ng-click=\"showBenefits()\">{{benefits}}</a>" +
    "        <div collapse=\"isCollapsed\">" +
    "           <h3>Benefits</h3>" +
    "           " +
    "           <p>" +
    "           BIT Systems (BITS) offers a comprehensive benefits package designed to meet the" +
    "            needs of our employees and their families.  In addition to competitive salaries," +
    "            we offer a generous retirement plan, 401(K), 100% company-paid health care and" +
    "            a flexible vacation/holiday/sick day policy." +
    "            </p>" +
    "            " +
    "            " +
    "            <h4>Retirement Benefits</h4>" +
    "            <b>Profit Sharing Plan (PSP)</b>" +
    "            <p>" +
    "            BIT Systems funds your PSP at 25% of your base salary.  The funds are deposited" +
    "             in a tax-deferred account at Charles Schwab and you decide on the investment" +
    "             mix best for you. The plan has no vesting period - the money is yours as soon" +
    "            as it is deposited.  The only employees not included in this plan are temporary" +
    "             employees such as interns, coops or summer-only help." +
    "             </p>" +
    "             " +
    "             <b>401k</b>" +
    "             <p>" +
    "             In addition to the PSP we have a 401k plan with Charles Schwab to which employees may contribute." +
    "             </p>" +
    "             " +
    "             <h4>Non-retirement Benefits</h4>" +
    "             <b>Individual Benefits Accounts (IBAs)</b>" +
    "             <p>BIT Systems funds your IBA at 25% of your base salary. You may use these accounts for:" +
    "             <ul>" +
    "                 <li>Medical insurance and any related expenses</li>" +
    "                 <li>Disability insurance</li>" +
    "                 <li>Annual leave/sick leave/holidays (we don't dictate your holidays!)</li>" +
    "                 <li>Education/training expenses</li>" +
    "                 <li>Funding your 401k." +
    "             </ul>" +
    "             " +
    "             <p>" +
    "             You choose how you want to spend the money in this account based on your" +
    "             family's specific needs. If at the end of the year you still have money in" +
    "             your IBA, you can take it out as taxable income, roll it into the next year," +
    "             or use it to fund your 401k." +
    "             </p>" +
    "             " +
    "             <p>For employees that have a salary of less than $90,000 per year, BIT Systems" +
    "              will pay up to $4,000 towards work-related education above and beyond what" +
    "              is available in your benefit account.  " +
    "              </p>" +
    "        </div>" +
    "    </div>" +
    "" +
    "    <p/>" +
    "" +
    "    <p>" +
    "       <a href=\"http://search6.smartsearchonline.com/six3systems/jobs/process_jobsearch.asp?group=2\" target=\"_new\">View current BITS opportunities</a>" +
    "    </p>" +
    "" +
    "    <p>" +
    "      <a href=\"assets/images/poker.jpg\" target=\"_new\">BITS at the World Series of Poker</a>" +
    "    </p>" +
    "</div>" +
    "" +
    "");
}]);
