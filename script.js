(function () {
  var rectangle = document.getElementById('rectangle');
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) rectangle.classList.add('rectangle-after');
      else rectangle.classList.remove('rectangle-after');
  });
})();