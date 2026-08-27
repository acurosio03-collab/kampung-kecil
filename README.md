# Kampung Kecil Cirebon — Website

Website ini pakai versi baru yang sudah dipisah jadi beberapa "halaman"
dalam satu file (router built-in, ganti halaman tanpa reload penuh).

## Struktur file
- `index.html` — seluruh situs (7 halaman, sudah termasuk router-nya)
- `assets/` — musik latar + 5 foto asli resto + 2 video asli (hero & menu) + 2 poster frame

## Catatan musik
Musik latar autoplay dalam kondisi mute (aturan semua browser), lalu
otomatis nyala begitu pengunjung tap/klik apa pun di halaman pertama kali —
tidak ada tombol suara yang terlihat.

## Catatan foto
Semua 12 foto stok (Unsplash) di halaman Menu, Saung, dan Suasana sudah
diganti:
- 3 foto saung (Kolam Teratai, Bambu Rindang, VIP Ber-AC) &rarr; foto
  kolam/dining/balcony asli.
- Foto "suasana saung" di bagian cerita &rarr; foto kolam malam asli.
- **8 foto menu** (Gurame, Ayam, Bebek, Lele, Pindang, Bancakan, Es Teh)
  &rarr; diganti ilustrasi visual custom per menu (bukan foto asli — kita
  cuma punya satu foto makanan asli, jadi dibuatkan 8 ikon ilustrasi
  bertema, warnanya senada dengan palet situs). Filenya ada di
  `assets/menu/*.svg`. Kalau nanti sudah ada foto asli tiap menu, tinggal
  ganti path `img` di data menu (dalam `index.html`) ke foto aslinya.

## Catatan lain
- File `index.html` cukup besar (±1.5MB) karena berisi seluruh kode aplikasi
  (termasuk gambar-gambar yang sudah ditempel langsung di dalamnya).
- Logo asli (`kampung kecil logo.svg`) dan lagu Sabilulungan asli dari zip
  sebelumnya belum dipakai di versi ini — beri tahu aku kalau mau salah
  satunya dipasang lagi.
