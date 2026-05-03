// ===== SHARED NAVBAR / SIDEBAR LOGIC =====
// Included on every page

// Sidebar
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const categoryBtn = document.getElementById('categoryBtn');

function openSidebar() { sidebar.classList.add('active'); sidebarOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeSidebar() { sidebar.classList.remove('active'); sidebarOverlay.classList.remove('active'); document.body.style.overflow = ''; }

categoryBtn.addEventListener('click', () => sidebar.classList.contains('active') ? closeSidebar() : openSidebar());
sidebarOverlay.addEventListener('click', closeSidebar);

// Dropdowns
const dropdowns = [
  { triggerId: 'st1', menuClass: '.list-home ul', arrowId: 'st1' },
  { triggerId: 'st2', menuClass: '.list-home2 ul', arrowId: 'st2' },
  { triggerId: 'st3', menuClass: '.list-home3 ul', arrowId: 'st3' },
  { triggerId: 'st4', menuClass: '.list-home4 ul', arrowId: 'st4' },
  { triggerId: 'st5', menuClass: '.list-home5 ul', arrowId: 'st5' },
  { triggerId: 'st6', menuClass: '.list-home6 ul', arrowId: 'st6' },
];
const allMenus = dropdowns.map(d => document.querySelector(d.menuClass));

function closeAllDropdowns() {
  dropdowns.forEach((d, i) => {
    allMenus[i].style.display = 'none';
    document.getElementById(d.arrowId).style.transform = 'translateY(-50%) rotate(0deg)';
  });
}

dropdowns.forEach((d, i) => {
  const trigger = document.getElementById(d.triggerId);
  const menu = allMenus[i];
  const arrow = document.getElementById(d.arrowId);
  const label = document.getElementById(d.triggerId.replace('st', ''));

  function toggle() {
    const isOpen = menu.style.display === 'block';
    closeAllDropdowns();
    if (!isOpen) {
      menu.style.display = 'block';
      arrow.style.transform = 'translateY(-50%) rotate(180deg)';
    }
  }
  trigger.addEventListener('click', toggle);
  if (label) label.addEventListener('click', toggle);
});

document.addEventListener('click', e => { if (!e.target.closest('.list-icon')) closeAllDropdowns(); });

// Back to top
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => backToTopBtn.classList.toggle('visible', window.scrollY > 300));
  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => obs.observe(el));
}

// Active nav link highlight
(function () {
  const page = location.pathname.split('/').pop() || 'demo.html';
  document.querySelectorAll('.nav-link-item').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('nav-active');
  });
})();
