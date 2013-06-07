// Route responsible for main page
module.exports = function(app) {
  app.get('/contact', function (req, res){
    console.log("Contact page requested");

    res.render('contact');
  });
}