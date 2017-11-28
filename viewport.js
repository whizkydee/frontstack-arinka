(function(global) {
  'use strict'

  const indicator = document.createElement('div'),
  windowWidth = window.innerWidth,
  windowHeight = window.innerHeight,
  text = windowWidth + ' x ' + windowHeight;
  
  document.documentElement.appendChild(indicator);
  
  indicator.id = '__scrrenSizeIndicator';
  indicator.style.zIndex = '99999999999';
  indicator.innerText = text;
  indicator.style.position = 'fixed';
  indicator.style.background = 'rgba(0, 0, 0, .95)';
  indicator.style.borderRadius = '5px';
  indicator.style.color = '#f9f9f9';
  indicator.style.padding = '5px 10px';
  indicator.style.fontSize = '16px';
  indicator.style.bottom = '10px';
  indicator.style.right = '10px';
  
  window.addEventListener('resize', () => {
    const newWindowWidth = window.innerWidth,
    newWindowHeight = window.innerHeight,
    newText = newWindowWidth + ' x ' + newWindowHeight;
          
    indicator.innerText = newText;
  }, false);
  
})(window)
