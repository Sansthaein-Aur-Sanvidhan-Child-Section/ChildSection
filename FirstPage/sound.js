//  First Page bale page me sound 
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const sound = document.getElementById('hover-sound');
    sound.currentTime = 0; // Rewind to start
    sound.play();
  });
});
// First Page page sound end