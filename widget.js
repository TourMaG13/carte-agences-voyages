(function() {
  var container = document.getElementById('carte-agences-voyages');
  if (!container) {
    console.error('Carte agences : élément #carte-agences-voyages introuvable.');
    return;
  }

  var BASE_URL = 'https://morgan13012.github.io/carte-agences-voyages/';

  // Style du conteneur
  container.style.width = '100%';
  container.style.maxWidth = '1200px';
  container.style.margin = '20px auto';
  container.style.borderRadius = '12px';
  container.style.overflow = 'hidden';
  container.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';

  // Iframe
  var iframe = document.createElement('iframe');
  iframe.src = BASE_URL + 'index.html';
  iframe.style.width = '100%';
  iframe.style.height = '80vh';
  iframe.style.border = 'none';
  iframe.style.display = 'block';
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('title', 'Carte des agences de voyages immatriculées en France');

  container.appendChild(iframe);
})();
