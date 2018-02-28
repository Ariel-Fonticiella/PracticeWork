// when we use require(...), the result caches so you can call require again and it wouldn't tax you very much.
var bodyParser = require('body-parser');

module.exports = (app) => {

  app.get('/api/person/:id', function(req, res) {
    // get that data from database
    res.json({ firstname: 'Ariel', lastname: 'Fonticiella' });
  });

  app.post('/api/person', function(req, res){
      // save to the database
  });

  app.delete('/api/person/:id', function(req, res){
      // delete from the database
  });

};
