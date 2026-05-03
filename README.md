# 🛋️ Furnish. — Premium Modern Furniture Website

A fully responsive, multi-page furniture e-commerce website built with pure **HTML**, **CSS**, and **vanilla JavaScript**. No frameworks, no build tools — just clean, well-structured front-end code.

---

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| 🏠 Home | `demo.html` | Hero, products, categories, deals, testimonials, news |
| 🔥 Featured | `featured.html` | Filtered featured products with badges |
| 🛒 Shop | `shop.html` | Full shop with sidebar filters, price range, color swatches |
| 📝 Blog | `blog.html` | Articles with author cards, tags, and categories |
| 👥 About | `about.html` | Our story, team, values, and stats |
| 📞 Contact | `contact.html` | Contact form, FAQ, and location details |

---

## ✨ Features

### 🎨 Design
- Warm, modern premium furniture aesthetic
- CSS custom properties (design tokens) for consistent theming
- Smooth hover animations on all interactive elements
- Scroll-reveal animations using `IntersectionObserver`
- Fully responsive — mobile, tablet, and desktop

### 🧭 Navigation
- Sticky navbar with logo, category button, and nav links
- Colored badges on nav links: `HOT`, `NEW`, `5`, `24/7`
- Dropdown menus with animated chevron arrows
- Slide-in sidebar with overlay backdrop
- Active page highlighting across all pages
- Cart & wishlist icon buttons with live badge counts

### 🏠 Home Page
- Animated promo banner (dismissible)
- Hero section with dual CTA buttons and stat counters
- "Why Us" feature band (shipping, returns, warranty, support)
- Trusted brands strip
- Product cards with badges (BESTSELLER, SALE, TOP RATED, NEW)
- Wishlist heart toggle per product
- "Add to Cart" slide-up overlay with success feedback
- Category grid with item count badges
- Featured deals with live countdown timers
- Testimonials with avatar initials
- Blog news cards with tag badges
- Newsletter signup
- Footer with social icons and copyright

### 🛒 Shop Page
- Sidebar filters: categories, price range slider, color swatches, star rating
- Product grid with sort dropdown
- Pagination

### 📝 Blog Page
- Filter tabs by category
- Blog cards with author avatar, read time, and tag badges

### 👥 About Page
- Story section with values grid
- Stats band (products, customers, experience, rating)
- Team cards with social links

### 📞 Contact Page
- Full contact form with validation feedback
- FAQ accordion-style cards
- Send button with success animation

---

## 📁 Project Structure

```
furnish/
├── demo.html          # Home page
├── featured.html      # Featured deals page
├── shop.html          # Shop with filters
├── blog.html          # Blog articles
├── about.html         # About us
├── contact.html       # Contact form
├── style.css          # All styles (shared across pages)
├── script.js          # Home page JS (cart, wishlist, countdown)
├── navbar.js          # Shared navbar/sidebar JS (all inner pages)
├── README.md          # This file
├── img/               # Product and section images
└── font/              # FontAwesome 6.1.1 (local)
    └── fontawesome-free-6.1.1-web/
```

---

## 🚀 Getting Started

No installation or build step needed.

1. Clone or download the repository
2. Open `demo.html` in any modern browser
3. Navigate between pages using the navbar

```bash
git clone https://github.com/your-username/furnish-website.git
cd furnish-website
# Open demo.html in your browser
```

> **Tip:** Use a local server (e.g. VS Code Live Server) for the best experience, especially for font loading.

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic page structure |
| CSS3 | Custom properties, Grid, Flexbox, animations |
| JavaScript (ES6+) | DOM manipulation, IntersectionObserver, timers |
| FontAwesome 6.1.1 | Icons (local, no CDN dependency) |

---

## 📸 Screenshots

> Open `demo.html` in your browser to see the full design.

---

## 🎨 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#f48359` | Buttons, badges, accents |
| `--primary-dark` | `#d9623a` | Hover states |
| `--dark` | `#1a1a2e` | Headings, footer |
| `--text` | `#333333` | Body text |
| `--text-light` | `#777777` | Subtitles, meta |
| `--bg` | `#f7f5f3` | Page background |

---

## 📦 Mock Data Used

All product names, prices, reviews, and content are **mock data** for demonstration purposes only.

**Products:** Nordic Lounge Chair · Velvet Accent Sofa · Marble Coffee Table · Rattan Bookshelf · Scandinavian Armchair · Oak Dining Table · Linen Bed Frame · Walnut TV Stand

**Blog Articles:** 10 Ways to Style a Minimalist Living Room · The Rise of Sustainable Furniture in 2024 · How to Choose the Perfect Sofa for Your Space · Biophilic Design · Smart Furniture for Small Spaces · Top Color Trends 2024

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Ahmed Mohamed**

Built with ❤️ using pure HTML, CSS & JavaScript.

> © 2024 Furnish. — All Rights Reserved.
