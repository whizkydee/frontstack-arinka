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
  
  const input = document.querySelector('input')

  input.addEventListener('focus', () => {
    input.setAttribute('placeholder', '')
  })
  
  input.addEventListener('blur', () => {
    input.setAttribute('placeholder', 'e.g educational, outdoors, relaxed')
  })

  if (window.innerWidth < 460) {
    document.querySelector('.cta-btn').innerText = 'Account';
  } else {
    document.querySelector('.cta-btn').innerText = 'Login / Signup';
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 460) {
      document.querySelector('.cta-btn').innerText = 'Account';
    } else {
      document.querySelector('.cta-btn').innerText = 'Login / Signup';
    }
  })
})(window)
