'use strict';

(( global ) => {
  'use strict'

  const links = Array.from( document.querySelectorAll('a[href="#0"]') )
  
  // Disable link actions onclick
  links.forEach(( link ) => {
    link.addEventListener('click', ( event ) => {
      event.preventDefault()
    })
  })

  const menubtn = document.querySelector('.menu-trigger')
  const overlay = document.querySelector('.menu-overlay')
  const closebtn = document.querySelector('.close-btn')

  menubtn.addEventListener('click', () => {
    if ( !overlay.classList.contains('open') ) {
      overlay.classList.add('open')
    }
  })
  closebtn.addEventListener('click', () => {
    if ( overlay.classList.contains('open') ) {
      overlay.classList.remove('open')
    }
  })
  
})(window)
