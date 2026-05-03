// ===== SIDEBAR =====
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const categoryBtn = document.getElementById('categoryBtn');

function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

categoryBtn.addEventListener('click', () => {
    sidebar.classList.contains('active') ? closeSidebar() : openSidebar();
});

sidebarOverlay.addEventListener('click', closeSidebar);

// ===== DROPDOWN MENUS =====
const dropdowns = [
    { triggerId: 'st1', menuClass: '.list-home ul', arrowId: 'st1' },
    { triggerId: 'st2', menuClass: '.list-home2 ul', arrowId: 'st2' },
    { triggerId: 'st3', menuClass: '.list-home3 ul', arrowId: 'st3' },
    { triggerId: 'st4', menuClass: '.list-home4 ul', arrowId: 'st4' },
    { triggerId: 'st5', menuClass: '.list-home5 ul', arrowId: 'st5' },
    { triggerId: 'st6', menuClass: '.list-home6 ul', arrowId: 'st6' },
];

const allMenus = dropdowns.map(d => document.querySelector(d.menuClass));

function closeAllDropdowns(except = null) {
    dropdowns.forEach((d, i) => {
        if (allMenus[i] !== except) {
            allMenus[i].style.display = 'none';
            document.getElementById(d.arrowId).style.transform = 'translateY(-50%) rotate(0deg)';
        }
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

document.addEventListener('click', (e) => {
    const insideNav = e.target.closest('.list-icon');
    if (!insideNav) closeAllDropdowns();
});

// ===== CATEGORY IMAGE HOVER LABELS =====
// Labels are now CSS-only overlays (.cat-overlay) — no JS needed

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll(
    '.npro, .chair1, .crad1, .crad2, .crad3, .category0, .testimonial-card'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== COUNTDOWN TIMER =====
// Set end date to 2 days from now
const countdownEndDate = new Date();
countdownEndDate.setDate(countdownEndDate.getDate() + 2);

function updateCountdowns() {
    const now = new Date();
    const diff = countdownEndDate - now;

    if (diff <= 0) {
        document.querySelectorAll('.countdown-timer').forEach(el => {
            el.textContent = '00:00:00';
        });
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formatted =
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    document.querySelectorAll('.countdown-timer').forEach(el => {
        el.textContent = formatted;
    });
}

updateCountdowns();
setInterval(updateCountdowns, 1000);

// ===== CART BADGE =====
const cartCountEl = document.getElementById('cartCount');
let cartCount = parseInt(cartCountEl.textContent, 10) || 0;

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        cartCount++;
        cartCountEl.textContent = cartCount;

        // Animate the badge
        cartCountEl.style.transform = 'scale(1.5)';
        setTimeout(() => { cartCountEl.style.transform = 'scale(1)'; }, 250);

        // Brief button feedback
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
        btn.style.background = '#22c55e';
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
        }, 1200);
    });
});

// ===== WISHLIST TOGGLE =====
const wishlistCountEl = document.getElementById('wishlistCount');
let wishlistCount = parseInt(wishlistCountEl.textContent, 10) || 0;

document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = btn.classList.toggle('active');

        // Swap icon between regular and solid heart
        const icon = btn.querySelector('i');
        if (isActive) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            wishlistCount++;
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            wishlistCount = Math.max(0, wishlistCount - 1);
        }

        wishlistCountEl.textContent = wishlistCount;

        // Animate the badge
        wishlistCountEl.style.transform = 'scale(1.5)';
        setTimeout(() => { wishlistCountEl.style.transform = 'scale(1)'; }, 250);
    });
});
