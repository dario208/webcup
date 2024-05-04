document.addEventListener('DOMContentLoaded', function() {
  // Votre code existant
  document.getElementById('cards').onmousemove = (e) => {
    for (const card of document.getElementsByClassName('card')) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty(
        `background`,
        ` radial-gradient(
      600px circle at var(${x}) var(${y}),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    )`
      );
    }
  };

  // Le code que je vous ai donné
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('#cards').forEach(card => {
    gsap.to(card, {
      scrollTrigger: {
        markers: true,
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      y: 50, // changez cette valeur pour ajuster l'effet de défilement
      ease: 'none',
    });
  });
});
