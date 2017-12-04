!function (global) {
  'use strict'
  var indicator = document.createElement('div')
  var width = window.innerWidth
  var height = window.innerHeight
  var text = width + ' x ' + height
  
  document.documentElement.appendChild(indicator)
  indicator.id = '__scrrenSizeIndicator'
  indicator.style.zIndex = '99999999999'
  indicator.innerText = text
  indicator.style.position = 'fixed'
  indicator.style.background = 'rgba(0, 0, 0, .95)'
  indicator.style.borderRadius = '5px'
  indicator.style.color = '#f9f9f9'
  indicator.style.padding = '5px 10px'
  indicator.style.fontSize = '16px'
  indicator.style.bottom = '10px'
  indicator.style.right = '10px'
  
  window.addEventListener('resize', function() {
    var newwidth = window.innerWidth;
    var newheight = window.innerHeight;
    var newText = newwidth + ' x ' + newheight;
    indicator.innerText = newText
  })
}(window)
