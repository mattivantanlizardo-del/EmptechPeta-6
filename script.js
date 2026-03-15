
const stars = document.querySelectorAll('.floating')

stars.forEach(star => {
  let startX = 0, startY = 0;

  //one that looks for a mouse touch /tap
star.addEventListener('mousedown', dragStart);
star.addEventListener('touchstart', dragStart, { passive: false });

  function dragStart(e){
    const event = e.type.includes('touch') ? e.touches[0] : e;
    e.preventDefault();
    star.style.animationPlayState = 'paused';

    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('touchmove', dragMove, { passive: false });
    
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);
  }

  function dragMove(e) {

    const event = e.type.includes('touch') ? e.touches[0] : e;

    let newX = startX - e.clientX;
    let newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    star.style.top = (star.offsetTop - newY) + "px";
    star.style.left = (star.offsetLeft - newX) + "px";
  }

  function dragEnd() {

    star.style.animationPlayState ='running';

    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('touchmove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
    document.removeEventListener('touchend', dragEnd);
  }
});