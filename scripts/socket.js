const party = window.location.pathname;
const socket = io(party);
const items = document.querySelector('.items');

socket.on('newItem', (item) => {
  console.log(item);
  const div = document.createElement('div');
  const p = document.createElement('p');
  const text = document.createTextNode(`${item.user} - ${item.name}`);
  p.appendChild(text);
  div.appendChild(p);
  items.appendChild(div);
  notify('Un item à été ajouté !');
});

socket.on('deleteItem', () => {
  window.location.reload();
  notify('Un item a été supprimé !');
});

function notify(msg) {
  if (!("Notification" in window)) return;

  else if (Notification.permission === "granted") {
    var notification = new Notification(msg);
  }

  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification(msg);
      }
    });
  }
}