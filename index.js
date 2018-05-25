


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
app.get('/contacto',(req, res) => {
    res.render('contacto', {
       titulo:'Contacto',
      // a=0+1
    });
});
app.get('/inicio',(req, res) => {
    res.render('inicio', {
       titulo:'Inicio',
      // b=0+1
    });
});
app.get('/proyectos',(req, res) => {
    res.render('proyectos', {
       titulo:'Proyectos',
      // c=0+1
    });
});
