const router = require('express').Router();
const axios = require('axios');

module.exports = (socket) => {
  router.post('/', (req, res)  => {
    axios
      .post(`${process.env.API_URL}/party`, req.body)
      .then(({ data }) => res.redirect(`/party/${data._id}`))
      .catch((err) => console.log(err))
    ;  
  });
  
  router.get('/:id', (req, res) => {
    socket.connect(req.params.id);
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
  
  router.post('/:id/items', (req, res) => {
    axios
      .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body) 
      .then((data) => {
        console.log(data);
        socket.sendItem(req.body);
        res.redirect(`/party/${req.params.id}`)
      })
      .catch((err) => console.log(err))
    ;
  });
  
  router.delete('/:id/items/:idItem', (req, res) => {
    axios
      .delete(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.idItem}`)
      .then((data) => {
        socket.deleteItem();
        res.redirect(`/party/${req.params.id}`);
      })
      .catch((err) => console.log(err))
    ;
  });

  return router;
}