console.log('Filter script loaded ✅');

const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
