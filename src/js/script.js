'use strict'

!function (global) {
  const links = Array.from(document.querySelectorAll('a[href="#0"]'))
  
  Array.prototype.forEach.call(links, link => {
    link.addEventListener('click', e => {
      e.preventDefault()
    })
  })
  
}(window)
