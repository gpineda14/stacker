function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillRect(0, 0, 600, 900);
    ctx.font = '48px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('Press the space bar to begin', 25, 450);
  }
}
