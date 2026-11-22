/* =========================================================
   Lost & Found FILKOM - JavaScript Sederhana (Pemula)
   ========================================================= */

// 1. Form Login Mahasiswa
const formLoginMahasiswa = document.getElementById('formLoginMahasiswa');
if (formLoginMahasiswa) {
  formLoginMahasiswa.addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'dashboard-mahasiswa.html';
  });
}

// 2. Form Login Satpam
const formLoginSatpam = document.getElementById('formLoginSatpam');
if (formLoginSatpam) {
  formLoginSatpam.addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'verifikasi-laporan.html';
  });
}

// 3. Form Pencarian di Landing Page (diarahkan ke Pilih Peran)
const formCariLanding = document.getElementById('formCariLanding');
if (formCariLanding) {
  formCariLanding.addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'pilih-peran.html';
  });
}

// 4. Form Lapor Kehilangan
const formLaporKehilangan = document.getElementById('formLaporKehilangan');
if (formLaporKehilangan) {
  formLaporKehilangan.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Laporan kehilangan berhasil dikirim!');
    window.location.href = 'dashboard-mahasiswa.html';
  });
}

// 5. Form Lapor Temuan
const formLaporTemuan = document.getElementById('formLaporTemuan');
if (formLaporTemuan) {
  formLaporTemuan.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Laporan temuan berhasil dikirim! Menunggu verifikasi Satpam.');
    window.location.href = 'dashboard-mahasiswa.html';
  });
}

// 6. Tampilkan nama file saat pilih foto
const inputFoto = document.getElementById('inputFoto');
const labelFoto = document.getElementById('labelFoto');
if (inputFoto && labelFoto) {
  inputFoto.addEventListener('change', function () {
    if (inputFoto.files.length > 0) {
      labelFoto.textContent = 'File dipilih: ' + inputFoto.files[0].name;
    }
  });
}

// 7. Filter Daftar Barang Temuan (Kategori & Lokasi)
const btnTerapkanFilter = document.getElementById('btnTerapkanFilter');
const btnResetFilter = document.getElementById('btnResetFilter');
if (btnTerapkanFilter && btnResetFilter) {
  const pilihKategori = document.getElementById('filterKategori');
  const pilihLokasi = document.getElementById('filterLokasi');
  const daftarKartu = document.querySelectorAll('.item-barang');

  btnTerapkanFilter.addEventListener('click', function () {
    const kategori = pilihKategori.value;
    const lokasi = pilihLokasi.value;

    daftarKartu.forEach(function (kartu) {
      const cocokKategori = kategori === 'Semua' || kartu.dataset.kategori === kategori;
      const cocokLokasi = lokasi === 'Semua' || kartu.dataset.lokasi === lokasi;

      if (cocokKategori && cocokLokasi) {
        kartu.style.display = 'block';
      } else {
        kartu.style.display = 'none';
      }
    });
  });

  btnResetFilter.addEventListener('click', function () {
    pilihKategori.value = 'Semua';
    pilihLokasi.value = 'Semua';
    document.getElementById('filterTanggal').value = '';
    daftarKartu.forEach(function (kartu) {
      kartu.style.display = 'block';
    });
  });
}

// 8. Form Ajukan Klaim
const formAjukanKlaim = document.getElementById('formAjukanKlaim');
if (formAjukanKlaim) {
  formAjukanKlaim.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Klaim berhasil dikirim! Silakan pantau di halaman Status Klaim.');
    window.location.href = 'status-klaim.html';
  });
}

// 9. Tombol Konfirmasi Batal di Halaman Status Klaim
const btnYaBatalkan = document.getElementById('btnYaBatalkan');
if (btnYaBatalkan) {
  btnYaBatalkan.addEventListener('click', function () {
    const kartuHelm = document.getElementById('klaimHelm');
    if (kartuHelm) {
      kartuHelm.style.display = 'none';
    }
    alert('Pengajuan klaim berhasil dibatalkan.');
  });
}

// 10. Pilih baris di Halaman Verifikasi Laporan Temuan (Satpam)
const daftarAntrean = document.querySelectorAll('.baris-antrean');
if (daftarAntrean.length > 0) {
  daftarAntrean.forEach(function (baris) {
    baris.addEventListener('click', function () {
      // Hilangkan class active di semua baris
      daftarAntrean.forEach(function (item) {
        item.classList.remove('active');
      });
      // Tambahkan class active di baris yang diklik
      baris.classList.add('active');

      // Update isi detail di panel kanan
      document.getElementById('detailNama').textContent = baris.dataset.nama;
      document.getElementById('detailDeskripsi').textContent = baris.dataset.deskripsi;
      document.getElementById('detailLokasi').textContent = baris.dataset.lokasi;
      document.getElementById('detailResepsionis').textContent = baris.dataset.resepsionis;
      document.getElementById('detailFoto').src = baris.dataset.foto;
    });
  });
}

// 11. Tombol Verifikasi & Simpan ke Resepsionis (Satpam)
const btnVerifikasiSimpan = document.getElementById('btnVerifikasiSimpan');
if (btnVerifikasiSimpan) {
  btnVerifikasiSimpan.addEventListener('click', function () {
    const cekFisik = document.getElementById('cekFisik');
    if (!cekFisik.checked) {
      alert('Centang dulu "Ya, cocok dengan data" sebelum verifikasi.');
      return;
    }
    alert('Laporan berhasil diverifikasi dan disimpan ke Resepsionis!');
  });
}

// 12. Tombol Ya, Tolak Laporan di Modal Tolak (Satpam)
const btnYaTolak = document.getElementById('btnYaTolak');
if (btnYaTolak) {
  btnYaTolak.addEventListener('click', function () {
    const alasan = document.getElementById('inputAlasanTolak').value.trim();
    if (alasan === '') {
      alert('Tuliskan alasan penolakan terlebih dahulu.');
      return;
    }
    alert('Laporan ditolak dengan alasan: ' + alasan);
  });
}

// 13. Tombol Aksi di Halaman Kelola Klaim (Satpam)
const btnSetujuiKlaim = document.getElementById('btnSetujuiKlaim');
if (btnSetujuiKlaim) {
  btnSetujuiKlaim.addEventListener('click', function () {
    alert('Klaim disetujui! Notifikasi dikirim ke mahasiswa.');
  });
}

const btnTolakKlaim = document.getElementById('btnTolakKlaim');
if (btnTolakKlaim) {
  btnTolakKlaim.addEventListener('click', function () {
    alert('Klaim ditolak.');
  });
}

const btnSerahkanBarang = document.getElementById('btnSerahkanBarang');
if (btnSerahkanBarang) {
  btnSerahkanBarang.addEventListener('click', function () {
    alert('Barang berhasil diserahkan dan dicatat ke Riwayat!');
  });
}
