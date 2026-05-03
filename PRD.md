# 📄 PRODUCT REQUIREMENT DOCUMENT (PRD)

# **Produk: Garasirumahan**

### Website Showroom Mobil Bekas + Admin Dashboard

### Development Strategy: **Local PostgreSQL First → Production Later**

---

# 1. 🎯 PRODUCT OVERVIEW

**Garasirumahan** adalah platform digital showroom mobil bekas yang berfungsi sebagai:

### Public Website

Website katalog profesional untuk menampilkan unit mobil dan meningkatkan leads penjualan.

### Admin Dashboard

Sistem internal untuk mengelola stok mobil, gambar, status unit, dan informasi showroom.

---

# 2. 🎯 DEVELOPMENT STRATEGY

## Phase 1 — Local Development

Semua development dilakukan secara lokal menggunakan:

* Frontend lokal
* Backend lokal
* Database PostgreSQL lokal

## Phase 2 — Production Launch

Saat aplikasi siap launch:

* Database dipindahkan ke cloud PostgreSQL
* Frontend deploy live
* Backend deploy live

---

# 3. 🎯 BUSINESS GOALS

### Primary Goals

* Katalog mobil modern & profesional
* Mudah dikelola admin
* Lead masuk via WhatsApp
* Sistem stok lebih rapi

### Success Metrics

* Jumlah klik WhatsApp
* Jumlah unit dilihat
* Bounce rate
* Inquiry bulanan

---

# 4. 👤 USER ROLES

## Visitor

* Browse katalog
* Detail mobil
* Hubungi showroom

## Admin

* Login
* CRUD mobil
* Upload gambar
* Update status SOLD
* Kelola informasi showroom

---

# 5. 🧩 CORE FEATURES

---

# A. PUBLIC WEBSITE

---

## 1. Landing Page

### Sections:

* Hero section
* Headline terpercaya
* CTA lihat mobil
* Featured cars
* Keunggulan showroom
* CTA WhatsApp

---

## 2. Navbar

### Menu:

* Beranda
* Katalog
* Tentang
* Kontak

### Behavior:

* Sticky navbar
* Responsive mobile menu

---

## 3. Katalog Mobil

### Features:

* Grid mobil
* Search
* Filter:

  * Brand
  * Harga
  * Tahun
  * Transmisi

### Card:

* Foto
* Nama mobil
* Harga
* Tahun
* Label SOLD
* Tombol detail

---

## 4. Detail Mobil

### Content:

* Gallery slider
* Nama mobil
* Harga
* Tahun
* KM
* Transmisi
* Fuel
* Deskripsi
* CTA WhatsApp

---

## 5. WhatsApp CTA

Pesan otomatis:

```text id="8j1rsv"
Halo, saya tertarik dengan unit [Nama Mobil]
```

---

## 6. Tentang Kami

* Profil showroom
* Pengalaman
* Keunggulan

---

## 7. Kontak

* WhatsApp
* Alamat
* Jam operasional
* Maps embed

---

## 8. Footer

* Navigasi
* Kontak
* Copyright

---

# B. ADMIN DASHBOARD

---

## 1. Authentication

* Login admin
* Logout
* Session protected

---

## 2. Dashboard Overview

Cards:

* Total mobil
* Available
* Sold

---

## 3. CRUD Mobil

### Input:

* Nama mobil
* Brand
* Harga
* Tahun
* Kilometer
* Transmisi
* Fuel
* Warna
* Deskripsi
* Featured

---

## 4. Upload Gambar

* Multi image
* Preview
* Delete

---

## 5. Status Unit

* Available
* Sold

---

## 6. Settings

* Nama showroom
* Nomor WA
* Alamat
* Jam buka

---

# 6. USER FLOW

---

## Visitor Flow

```text id="h1x2vf"
Landing Page → Katalog → Detail Mobil → WhatsApp
```

---

## Admin Flow

```text id="mv1qpk"
Login → Dashboard → Tambah/Edit Mobil → Publish
```

---

# 7. UI / UX REQUIREMENTS

---

## Style

* Modern
* Premium
* Clean
* Fokus visual mobil
* Bright automotive branding
* Trust-first design

## Color Palette Final — Bright Modern Automotive

```text id="clr1"
Primary      #355872
Secondary    #7AAACE
Background   #FFFFFF
Soft BG      #F8FAFC
Text Dark    #1E293B
Border       #E2E8F0
Accent       #4DA8DA
Success      #22C55E
Danger       #EF4444
```

## Usage Guidelines

### Primary `#355872`

* Navbar text
* Main buttons
* Heading emphasis
* Price highlight

### Secondary `#7AAACE`

* Secondary buttons
* Section backgrounds
* Hover states

### Background `#FFFFFF`

* Main layout background
* Cards
* Forms

### Soft BG `#F8FAFC`

* Alternate sections
* Dashboard content background

### Text Dark `#1E293B`

* Headings
* Body text

### Border `#E2E8F0`

* Input borders
* Card borders
* Divider lines

### Accent `#4DA8DA`

* CTA highlight
* Interactive states
* Link hover

### Success `#22C55E`

* Available status

### Danger `#EF4444`

* SOLD badge
* Delete actions

## Animation

* Scroll reveal
* Hover cards
* Smooth transition

## UX

* Mobile first
* Fast loading
* CTA jelas

---

# 8. FINAL TECH STACK (LOCAL FIRST)

---

# Frontend

## Next.js 15 Stable

## React 19

## Tailwind CSS 4

## Framer Motion 11

---

# Backend

## Laravel 12 LTS

## PHP 8.3

## Laravel Sanctum

---

# Database (Development)

## PostgreSQL 16 Local

Installed on local machine.

---

# Database (Production Later)

## Supabase PostgreSQL

atau VPS PostgreSQL.

---

# File Storage

## Development

Laravel local storage:

```text id="n4w7yo"
storage/app/public
```

## Production

Supabase Storage / CDN

---

# Deployment

## Frontend

Vercel

## Backend

Railway / VPS / Render

---

# 9. DATABASE DESIGN

---

## cars

```sql id="cq9y1x"
id
slug
name
brand
price
year
mileage
transmission
fuel
color
description
status
featured
created_at
updated_at
```

---

## car_images

```sql id="n2j6ke"
id
car_id
image_url
sort_order
created_at
```

---

## users

```sql id="3r5aot"
id
name
email
password
role
created_at
```

---

## settings

```sql id="a1c8fw"
id
showroom_name
phone
address
open_hours
meta_title
meta_description
```

---

# 10. REST API STRUCTURE

---

## Auth

```http id="v7m4sn"
POST /api/login
POST /api/logout
GET /api/me
```

---

## Cars

```http id="6z0dwp"
GET /api/cars
GET /api/cars/{slug}
POST /api/admin/cars
PUT /api/admin/cars/{id}
DELETE /api/admin/cars/{id}
```

---

## Images

```http id="h4x0tb"
POST /api/admin/upload
DELETE /api/admin/image/{id}
```

---

## Settings

```http id="j7q2sl"
GET /api/settings
PUT /api/admin/settings
```

---

# 11. LOCAL DEVELOPMENT ENVIRONMENT

---

## Backend Run

```bash id="h6x7qa"
php artisan serve
```

Runs:

```text id="f8w1nr"
http://127.0.0.1:8000
```

---

## Frontend Run

```bash id="e5p2mc"
npm run dev
```

Runs:

```text id="u9n4vx"
http://localhost:3000
```

---

## PostgreSQL Local

Runs on:

```text id="s0v8kc"
localhost:5432
```

---

# 12. SECURITY

* Sanctum auth
* CSRF protection
* Input validation
* Upload validation
* Protected admin routes

---

# 13. MVP SCOPE

---

## Public

* Landing page
* Navbar
* Catalog
* Detail mobil
* WhatsApp CTA
* Footer

## Admin

* Login
* CRUD mobil
* Upload gambar
* Status sold

---

# 14. OUT OF SCOPE (PHASE 1)

* Payment
* Kredit simulation
* Booking online
* Blog
* Multi branch

---

# 15. DEVELOPMENT ROADMAP

---

## Week 1

* Setup Next.js
* Setup Laravel
* Setup PostgreSQL local

## Week 2

* Migration database
* CRUD mobil backend

## Week 3

* Frontend katalog
* Detail mobil

## Week 4

* Admin dashboard
* Login auth

## Week 5

* Polish UI
* Testing

## Week 6

* Deploy + migrate DB cloud

---

# 16. MIGRATION PLAN TO CLOUD

Saat siap production:

## Step 1

Export migration Laravel

## Step 2

Create cloud PostgreSQL

## Step 3

Update `.env`

## Step 4

```bash id="y2m8sw"
php artisan migrate --seed
```

---

# 17. WHY THIS IS BEST FOR YOU

## Hemat biaya

Tidak perlu cloud database sekarang.

## Cepat development

Local jauh lebih cepat.

## Aman

Bisa eksperimen bebas.

## Ready Scale

Nanti tinggal migrate.

---

# 18. RECOMMENDED PROJECT STRUCTURE

```text id="n0v4jd"
/frontend   -> Next.js
/backend    -> Laravel
/database   -> PostgreSQL Local
```

---

# 🔥 FINAL RECOMMENDATION

Untuk tahap sekarang:

```text id="q3s7ta"
Next.js + Laravel + PostgreSQL Local
```

Saat sudah siap:

```text id="r8w2cm"
Deploy + migrate to Supabase / VPS PostgreSQL
```

---
