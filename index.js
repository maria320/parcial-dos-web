

const express = require('express'),
      consolidate = require('consolidate'),
      hbs = require('handlebars');

      var app = express();

      app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('listo!');
});
app.get('/index',(req, res) => {
    res.render('index', {
        texto: 'hola',
        x: 'División',
        y:7
    });
});
