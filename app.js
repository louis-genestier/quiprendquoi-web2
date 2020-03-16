const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const methodOverride = require('method-override');
require('dotenv').config();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', (req, res)  => {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch((err) => console.log(err))
  ;  
});

app.get('/party/:id', (req, res) => {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) => {
      res.render('party', { 
        party: data, 
        title: data.name, 
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}` 
    })})
    .catch((err) => console.log(err))
  ;
});

app.post('/party/:id/items', (req, res) => {
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body) 
    .then((data) => res.redirect(`/party/${req.params.id}`))
    .catch((err) => console.log(err))
  ;
});

app.delete('/party/:id/items/:idItem', (req, res) => {
  axios
    .delete(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.idItem}`)
    .then((data) => res.redirect(`/party/${req.params.id}`))
    .catch((err) => console.log(err))
  ;
});

app.listen(process.env.PORT);