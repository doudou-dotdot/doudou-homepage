'use strict';
(() => {
  const observatory = document.querySelector('.observatory');
  const label = document.querySelector('#mode-label');
  const modes = { explore: '探索未知的可能', connect: '连接零散的灵感', create: '让想法成为作品' };
  const buttons = [...document.querySelectorAll('.mode-controls button')];
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.mode;
      if (!Object.hasOwn(modes, mode)) return;
      observatory.dataset.mode = mode;
      label.textContent = modes[mode];
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    });
  });
  const motion = document.querySelector('.motion-toggle');
  motion.addEventListener('click', () => {
    const paused = observatory.classList.toggle('paused');
    motion.setAttribute('aria-pressed', String(paused));
    motion.setAttribute('aria-label', paused ? '继续轨道动画' : '暂停轨道动画');
    motion.textContent = paused ? '▷' : 'Ⅱ';
  });
})();
