'use strict'

!function (global) {
  const links = Array.from( document.querySelectorAll('a[href="#0"]') )
  
  Array.prototype.forEach.call(links, link => {
    link.addEventListener('click', e => {
      e.preventDefault()
    })
  })
  
  const input = document.querySelector('input')

  input.addEventListener('focus', e => {
    e.target.setAttribute('placeholder', '')
  })
  
  input.addEventListener('blur', e => {
    e.target.setAttribute(
      'placeholder',
      'e.g educational, outdoors, relaxed'
    )
  })

}(window)
