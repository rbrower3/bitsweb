// Route responsible for main page
module.exports = function(app) {

  // Get all layers
  app.get('/', function (req, res){
    console.log("BITS main page requested");

    res.render('index');
  });
}
