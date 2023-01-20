
let bg = document.querySelector('.background__zero-container,.header__logo');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});

$("#background__zero-container").mousemove(function(e) {
  parallaxIt(e, ".background__zero-container", -500);
  parallaxIt(e, "img", -350);
});

function parallaxIt(e, target, movement) {
  var $this = $("#header__logo-container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 4) / $this.width() * movement,
    y: (relY - $this.height() / 4) / $this.height() * movement
  });
}

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart; 
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window. pageXOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll();
}

$(document) .ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menubar') .toggleClass('active');  
    });
});

var glideMulti1 = new Glide('.multi1', {
  type: 'carousel',
  autoplay: 3500,
  perView: 3
});



