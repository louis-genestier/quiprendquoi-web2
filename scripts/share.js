if (navigator.share) {
  document.querySelectorAll('[data-share-url]').forEach((element) => {
    button = document.createElement('button');
    button.innerHTML = 'Partager';
    element.parentNode.append(button);
    button.addEventListener('click', shareTheParty.bind(this, element));
  })
}

function shareTheParty(element) {
  navigator
  .share({
    title: element.getAttribute('data-share-title'),
    text: element.getAttribute('data-share-text'),
    url: element.getAttribute('data-share-url'),
  })
}