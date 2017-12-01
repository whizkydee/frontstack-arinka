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

  var input = document.querySelector('input');

  input.addEventListener('focus', function () {
    input.setAttribute('placeholder', '');
  });

  input.addEventListener('blur', function () {
    input.setAttribute('placeholder', 'e.g educational, outdoors, relaxed');
  });
})(window);
//# sourceMappingURL=script.js.map
