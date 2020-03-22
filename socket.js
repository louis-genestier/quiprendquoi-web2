module.exports = class Socket {
  constructor(http) {
    this.io = require('socket.io')(http);
    this.socket = require('socket.io-client')();
    this.nsp = null;
  }

  connect(id) {
    this.nsp = this.io.of(`/party/${id}`);
    this.nsp.on('connection', () => console.log('user connected'))
  }

  sendItem(item) {
    this.nsp.emit('newItem', item);
  }

  deleteItem() {
    this.nsp.emit('deleteItem');
  }
}
