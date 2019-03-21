document.addEventListener("DOMContentLoaded", function(){
  var items = document.querySelectorAll('.works .item img'),
      item,
      overlay = document.querySelector('.overlay');
	for (var i = 0; i < items.length; i++) {
	   item = items[i];
	   item.addEventListener('click', function() {
      overlay.querySelector('img').setAttribute('src', this.getAttribute('src'));
      overlay.style.display = 'block';
		});
  }
  
  window.addEventListener('click', function(e) {    
    if (e.target == overlay) {
      overlay.querySelector('img').setAttribute('src', '');
      overlay.style.display = 'none';
    }
  });
});