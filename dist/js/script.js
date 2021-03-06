'use strict';

(function (global) {
  'use strict';

  var links = Array.from(document.querySelectorAll('a[href="#0"]'));

  // Disable link actions onclick
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });

  var menubtn = document.querySelector('.menu-trigger');
  var overlay = document.querySelector('.menu-overlay');
  var closebtn = document.querySelector('.close-btn');

  menubtn.addEventListener('click', function () {
    if (!overlay.classList.contains('open')) {
      overlay.classList.add('open');
    }
  });
  closebtn.addEventListener('click', function () {
    if (overlay.classList.contains('open')) {
      overlay.classList.remove('open');
    }
  });
})(window);
//# sourceMappingURL=script.js.map
