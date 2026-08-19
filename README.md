# 🌴 Kembara Travel & Tours - Official Website

Laman web rasmi **Kembara Travel & Tours**, dibina khas dengan teknologi moden **Astro + Tailwind CSS v4** yang dioptimumkan untuk kelajuan pantas (Zero JS by default), mesra SEO, dan sedia dihoskan di **Cloudflare Pages** bersama pengurusan kod di **GitHub**.

---

## 🌟 Ciri-ciri Utama Website

- ⚡ **Super Laju & Ringan**: Dibina menggunakan Astro Framework & Tailwind CSS v4.
- 📱 **100% Responsif & Mesra Mudah Alih**: Susun atur premium untuk skrin telefon, tablet dan komputer.
- 🎯 **Katalog Pakej Interaktif**:
  - Pakej Antarabangsa (Switzerland, Jepun, Vietnam, dll)
  - Pakej Umrah VIP (Musim Sejuk 1448H)
  - Pakej Domestik Malaysia (Kundasang Sabah, dll)
  - Pakej Pulau & Santai (Semporna Mabul Island, dll)
- 🔍 **Carian & Penapisan Langsung (Live Filter)**: Penapisan mengikut kategori & carian teks segera tanpa reload.
- 📅 **Modal Itinerari Lengkap**: Paparan jadual hari ke hari (Day 1 - Day 8), senarai apa yang termasuk (inclusions/exclusions) dan tarikh perlepasan.
- 💬 **Integrasi WhatsApp Segera**: Butang tempahan autofill mesej mengikut pakej terus ke admin.
- 🛡️ **Elemen Keyakinan (Trust Badges)**: No Lesen MOTAC (KPL/LN: 8921), MATTA, BUMITRA, jaminan 100% Halal & sistem ansuran.
- 📝 **Borang Sebut Harga & Custom Trip**: Pengiraan peserta & tempahan pantas.
- ☁️ **Cloudflare Ready**: Dilengkapi fail `wrangler.toml`, `_headers` (caching & security) dan `_redirects`.

---

## 🚀 Panduan Menjalankan Secara Lokal (Local Development)

1. Masuk ke folder projek:
   ```bash
   cd C:\Users\Zaim\.gemini\antigravity\scratch\kembara-travel-tours
   ```

2. Pasang dependencies (jika belum):
   ```bash
   npm install
   ```

3. Jalankan server pembangunan (Dev Server):
   ```bash
   npm run dev
   ```
   Buka pelayar web di `http://localhost:4321`.

4. Uji binaan pengeluaran (Production Build):
   ```bash
   npm run build
   npm run preview
   ```

---

## 🐙 Langkah 1: Sambung & Push ke GitHub

1. Buka [GitHub](https://github.com/new) dan cipta repository baru (contoh: `kembara-travel-tours` atau `travel-website`).
2. Di dalam folder projek di terminal anda:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Kembara Travel & Tours website"
   git branch -M main
   git remote add origin https://github.com/<USERNAME-ANDA>/<NAMA-REPO>.git
   git push -u origin main
   ```

---

## ⚡ Langkah 2: Deploy ke Cloudflare Pages

### Kaedah A: Sambungan Automatik Melalui Dashboard Cloudflare (Paling Mudah)
1. Log masuk ke akaun [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Pergi ke menu **Workers & Pages** > klik **Create application** > pilih tab **Pages** > **Connect to Git**.
3. Pilih repository GitHub anda (`kembara-travel-tours`).
4. Pada bahagian **Build settings**:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Klik **Save and Deploy**. Laman web anda akan live dalam masa kurang daripada 1 minit dengan domain percuma seperti `https://kembara-travel-tours.pages.dev`!

### Kaedah B: Deploy Melalui CLI (Wrangler)
```bash
npx wrangler pages deploy dist --project-name=kembara-travel-tours
```

---

## ⚙️ Struktur Fail Projek

```text
kembara-travel-tours/
├── .github/workflows/deploy.yml   # GitHub Actions Auto Deploy
├── public/
│   ├── _headers                   # Security & CDN cache headers
│   ├── _redirects                 # URL redirects
│   └── favicon.svg                # Website Favicon
├── src/
│   ├── components/                # UI Components
│   │   ├── Navbar.astro           # Header & Mobile Nav
│   │   ├── Hero.astro             # Hero Banner & Quick Search
│   │   ├── PackageCard.astro      # Card Pakej
│   │   ├── PackagesSection.astro  # Katalog & Live Filter
│   │   ├── DestinationsSection.astro # Grid Destinasi
│   │   ├── UmrahVIPBanner.astro   # Highlight Umrah VIP
│   │   ├── WhyChooseUs.astro      # Jaminan & Lesen MOTAC
│   │   ├── TestimonialsSection.astro # Ulasan Pelanggan
│   │   ├── BookingInquirySection.astro # Borang Pertanyaan
│   │   ├── FAQSection.astro       # Soalan Lazim Accordion
│   │   ├── CTASection.astro       # Promosi Diskaun
│   │   ├── ItineraryModal.astro   # Modal Itinerari Pakej
│   │   ├── FloatingWhatsApp.astro # Butang WhatsApp Terapung
│   │   └── Footer.astro           # Footer Lengkap
│   ├── data/                      # Data Model & Content
│   │   ├── company.ts             # Info Syarikat, No Lesen, No WhatsApp
│   │   ├── packages.ts            # Senarai Pakej & Itinerari Harian
│   │   ├── destinations.ts        # Senarai Destinasi
│   │   ├── testimonials.ts        # Senarai Ulasan
│   │   └── faqs.ts                # Senarai Soalan Lazim
│   ├── layouts/
│   │   └── Layout.astro           # HTML Layout & SEO Meta
│   ├── pages/
│   │   └── index.astro            # Laman Utama (Home Page)
│   └── styles/
│       └── global.css             # Tailwind CSS & Design Styles
├── astro.config.mjs               # Konfigurasi Astro + Vite
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript Config
└── wrangler.toml                  # Cloudflare Configuration
```

---

© 2026 Kembara Travel & Tours Sdn Bhd (KPL/LN: 8921).
