// Route responsible for main page
module.exports = function(app) {

  // Get all layers
  app.get('/', function (req, res){
    console.log("BITS main page requested");
    res.render('index');
  });

  app.get('/locations', function (req, res){
    console.log("Locations page requested");
    res.render('locations');
  });

  app.get('/login', function (req, res){
    console.log("Login page requested");
    res.render('login');
  });
}
