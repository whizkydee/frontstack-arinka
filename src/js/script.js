'use strict';

(( global ) => {
  'use strict'

  const links = document.querySelectorAll('a[href="#0"]')
  
  // Disable link actions onclick
  Array.prototype.forEach.call(links, ( link ) => {
    link.addEventListener('click', ( event ) => {
      event.preventDefault()
    })
  })
  
  const input = document.querySelector('input')

  input.addEventListener('focus', () => {
    input.setAttribute('placeholder', '')
  })
  
  input.addEventListener('blur', () => {
    input.setAttribute('placeholder', 'e.g educational, outdoors, relaxed')
  })

})(window)
