
  const tabs = document.querySelectorAll('.desserts__tab');
  const lists = document.querySelectorAll('.desserts__list');
  const title = document.getElementById('dessertsPanelTitle');

  const titles = {
    waffles: 'Waffle &amp; Cookie Dough',
    cheesecakes: 'Cheesecakes',
    cakes: 'Luxury Cakes',
    desi: 'Desi Traditional',
    cookies: 'Mayfair Cookies'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      lists.forEach(l => l.classList.remove('is-active'));
      document.querySelector(`.desserts__list[data-list="${key}"]`).classList.add('is-active');

      title.innerHTML = titles[key];
    });
  });
