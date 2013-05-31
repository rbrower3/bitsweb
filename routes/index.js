// Route responsible for main page
module.exports = function(app) {

  // Get all layers
  app.get('/', function (req, res){
    console.log("BITS main page requested");

    res.render('index');
  });

  app.get('/engineering', function (req, res){
    console.log("Engineering page requested");

    res.render('engineering');
  });
}
