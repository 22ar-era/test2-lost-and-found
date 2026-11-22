# Lost & Found FILKOM

Website prototipe layanan **Lost & Found** (Barang Hilang dan Temuan) untuk lingkungan Fakultas Ilmu Komputer, Universitas Brawijaya (FILKOM UB). 

Proyek ini dibangun menggunakan arsitektur multi-halaman (**Multi-Page Application**) dengan **HTML5, CSS3, Bootstrap 5.3**, serta **JavaScript (Vanilla DOM)** yang sederhana dan mudah dipahami untuk pembelajaran dasar pengembangan web.

---

## 📌 Alur & Fitur Halaman

Sistem ini memfasilitasi dua peran utama: **Mahasiswa** dan **Satpam / Petugas**.

### 1. Halaman Publik & Autentikasi
- **Landing Page (`index.html`)**: Halaman pengenalan layanan, ringkasan barang temuan terbaru, panduan 3 langkah alur klaim barang, dan akses masuk.
- **Pilih Peran (`pilih-peran.html`)**: Pemilihan peran login antara Mahasiswa atau Satpam.
- **Login Mahasiswa (`login-mahasiswa.html`)**: Halaman masuk khusus mahasiswa (NIM & Kata Sandi).
- **Login Satpam (`login-satpam.html`)**: Halaman masuk khusus petugas satpam (ID Petugas & Kata Sandi).

### 2. Portal Mahasiswa
- **Dashboard Mahasiswa (`dashboard-mahasiswa.html`)**: Ringkasan daftar barang temuan terbaru, notifikasi sistem mengenai kecocokan laporan kehilangan, serta akses cepat ke menu pelaporan.
- **Lapor Kehilangan (`lapor-kehilangan.html`)**: Formulir bagi mahasiswa yang kehilangan barang (nama barang, kategori, perkiraan lokasi & waktu hilang, deskripsi detail, serta kontak).
- **Lapor Temuan (`lapor-temuan.html`)**: Formulir pelaporan barang yang ditemukan beserta unggah foto barang dan informasi penitipan di resepsionis/satpam.
- **Cari Barang Temuan (`daftar-barang.html`)**: Katalog barang-barang temuan yang dilengkapi filter interaktif berdasarkan **Kategori** dan **Lokasi**.
- **Detail Barang (`detail-barang.html`)**: Rincian informasi spesifik barang temuan, lokasi penyimpanan fisik, serta tombol menuju formulir klaim.
- **Ajukan Klaim (`ajukan-klaim.html`)**: Formulir pembuktian kepemilikan dengan menjawab pertanyaan verifikasi ciri khusus barang.
- **Status Klaim (`status-klaim.html`)**: Memantau perkembangan klaim yang diajukan (*Menunggu Verifikasi*, *Disetujui*, atau *Ditolak*) serta fitur membatalkan klaim.

### 3. Portal Satpam / Petugas
- **Verifikasi Laporan Temuan (`verifikasi-laporan.html`)**: Memeriksa antrean laporan temuan yang masuk dari mahasiswa, mencocokkan barang fisik dengan data formulir, melakukan verifikasi penyimpanan ke resepsionis gedung, atau menolak laporan disertai alasan.
- **Kelola Klaim (`kelola-klaim.html`)**: Memeriksa jawaban pertanyaan verifikasi pengklaim, menyetujui/menolak pengajuan klaim, dan memproses serah terima fisik barang.
- **Riwayat Laporan & Penyerahan (`riwayat.html`)**: Rekapitulasi arsip laporan temuan yang telah selesai diserahkan ke pemiliknya maupun laporan yang ditolak.
- **Detail Riwayat (`detail-riwayat.html`)**: Halaman rincian lengkap dari salah satu barang pada arsip riwayat.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik multi-halaman terpisah untuk setiap fitur.
- **CSS3 (Custom Styling)**:
  - Palet warna khas kampus UB & FILKOM (Biru langit, oranye FILKOM, dan biru utama).
  - Tipografi Google Fonts (**Anton** untuk *branding logo* dan **Inter** untuk keterbacaan antarmuka).
  - Tampilan responsif dengan *breakpoint* `navbar-expand-xl` (otomatis beralih ke *hamburger menu* saat layar disempitkan di bawah 1200px / mode *split-screen*).
- **Bootstrap 5.3.3 & Bootstrap Icons**: *Grid system*, modal dialog (*pop-up*), dan komponen navigasi.
- **JavaScript (Vanilla DOM - `js/script.js`)**: Logika interaktivitas dasar yang bersih dan mudah dipelajari:
  - Simulasi submit form dan navigasi antar halaman.
  - Filter interaktif barang temuan (kategori & lokasi).
  - Pemilihan baris antrean laporan dan pembaruan panel detail secara dinamis.
  - Interaktivitas modal (pembatalan klaim dan penolakan laporan).

---

## 📁 Struktur Folder

```text
test2-lost-and-found/
├── index.html                  # Landing page publik
├── pilih-peran.html            # Pemilihan peran login
├── login-mahasiswa.html        # Form login mahasiswa
├── login-satpam.html           # Form login satpam
│
├── dashboard-mahasiswa.html    # Dashboard utama mahasiswa
├── lapor-kehilangan.html       # Form pelaporan barang hilang
├── lapor-temuan.html           # Form pelaporan barang temuan
├── daftar-barang.html          # Pencarian & filter barang temuan
├── detail-barang.html          # Informasi rincian barang temuan
├── ajukan-klaim.html           # Form pembuktian & pengajuan klaim
├── status-klaim.html           # Status & pembatalan klaim mahasiswa
│
├── verifikasi-laporan.html     # Verifikasi laporan temuan (Satpam)
├── kelola-klaim.html           # Persetujuan klaim & serah terima (Satpam)
├── riwayat.html                # Arsip riwayat laporan selesai (Satpam)
├── detail-riwayat.html         # Detail arsip barang pada riwayat (Satpam)
│
├── css/
│   └── style.css               # Seluruh styling custom & aturan responsif
├── js/
│   └── script.js               # Logika JavaScript dasar dan interaksi DOM
├── assets/                     # Gambar foto sampel barang temuan
│   ├── botol-minum.png
│   ├── charger-hp.png
│   ├── helm.png
│   ├── hp-samsung.png
│   ├── kotak-pensil.png
│   ├── kunci-motor.png
│   ├── laptop.png
│   └── payung.png
└── README.md                   # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

Tidak memerlukan instalasi server atau dependensi tambahan (*build tools*):

1. **Buka Langsung di Browser**:
   - Cukup klik dua kali (atau klik kanan > *Open with Browser*) pada file `index.html`.
2. **Menggunakan VS Code Live Server**:
   - Buka folder proyek di Visual Studio Code.
   - Klik kanan pada `index.html` dan pilih **Open with Live Server**.
