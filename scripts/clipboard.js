if (navigator.clipboard) {
  document.querySelectorAll('[data-clipboard]').forEach((element) => {
    const button = document.createElement('button');
    button.innerHTML = 'Copier';
    element.parentNode.append(button);
    button.addEventListener('click', copyToClipboard.bind(this, element, button));
  })
}

function copyToClipboard(element, button) {
  navigator.clipboard
    .writeText(element.getAttribute('data-clipboard'))
    .then(() => {
      button.innerHTML = 'Copié !';
      setTimeout(() => (button.innerHTML = 'Copier'), 2000);
    })
  ;
}