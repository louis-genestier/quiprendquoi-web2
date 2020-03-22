module.exports = (http) => {
  const io = require('express')(http);
  return newItem = (id) => {
    const nsp = io.of(`/party/${id}`);
    nsp.on('connection', (e) => console.log('new connection'));
    nsp.emit('newItem');
  }
}