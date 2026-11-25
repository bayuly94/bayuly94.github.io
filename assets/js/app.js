(function () {
  "use strict";

  // Detailed portfolio items with full architecture, features, and platform specs
  // Ordered latest first (Permata Auto Garage, Benerin, VetCloud, Dealaja at the top)
  var PORTFOLIO_ITEMS = [
  {
    "title": "Permata Auto Garage",
    "category": "mobile",
    "categoryLabel": "Mobile & Web",
    "platform": "iOS, Android (React.js & Capacitor) & Web Platform",
    "thumbnail": "assets/images/portfolios/permata.png",
    "fullImage": "assets/images/portfolios/permata.png",
    "webLink": "https://permataautogarage.com",
    "playStoreLink": "https://play.google.com/store/apps/details?id=com.permata.autogarage.app&hl=id",
    "appStoreLink": "https://apps.apple.com/jp/app/permata-auto-garage/id6777639969?l=en-US",
    "description": "Aplikasi mobile dan platform web otomotif resmi Permata Auto Garage untuk booking servis bengkel, katalog mobil, riwayat perawatan, dan loyalitas.",
    "fullDesc": "Aplikasi produksi resmi Permata Auto Garage yang dirilis di Google Play Store dan Apple App Store serta terintegrasi dengan portal web admin. Memudahkan pemilik kendaraan melakukan reservasi booking servis bengkel, tracking status pengerjaan secara real-time, melihat katalog unit mobil, serta manajemen poin reward pelanggan.",
    "features": [
      "Rilis resmi live di Apple App Store dan Google Play Store.",
      "Fitur reservasi booking service bengkel dan pemilihan teknisi.",
      "Pelacakan status pengerjaan servis mobil secara berkala.",
      "Katalog kendaraan pilihan dengan rincian spesifikasi dan galeri foto.",
      "Digital service record untuk riwayat penggantian oli dan suku cadang.",
      "Sistem loyalty points pelanggan untuk voucher potongan servis.",
      "Notifikasi berkala pengingat jadwal servis rutin berikutnya."
    ],
    "tags": [
      "React.js",
      "Capacitor",
      "JavaScript",
      "iOS App Store",
      "Google Play Store",
      "Automotive",
      "REST API"
    ],
    "link": "https://permataautogarage.com"
  },
  {
    "title": "Benerin - Jasa Service & Reparasi",
    "category": "mobile",
    "categoryLabel": "Mobile & Web",
    "platform": "iOS, Android (Flutter) & Web Platform",
    "thumbnail": "assets/images/portfolios/benerin.png",
    "fullImage": "assets/images/portfolios/benerin.png",
    "webLink": "https://benerin.co.id",
    "playStoreLink": "https://play.google.com/store/apps/details?id=id.co.benerin.appcustomer&hl=id",
    "appStoreLink": "https://apps.apple.com/id/app/benerin/id6742472214?l=id",
    "description": "Platform marketplace on-demand jasa service, renovasi, dan perbaikan rumah dengan pemesanan tukang profesional, sistem estimasi biaya, dan pelacakan teknisi.",
    "fullDesc": "Benerin merupakan aplikasi marketplace jasa perbaikan dan perawatan rumah tangga di Indonesia. Menghubungkan ribuan teknisi dan tukang berpengalaman dengan pelanggan yang membutuhkan layanan servis AC, kelistrikan, pipa ledeng, elektronik, hingga renovasi hunian dengan sistem pembayaran transparan dan garansi pengerjaan.",
    "features": [
      "Tersedia dan aktif di Google Play Store dan Apple App Store.",
      "Katalog multi-layanan perbaikan (AC, Listrik, Pipa, Bangunan, Elektronik).",
      "Sistem penugasan otomatis dan pelacakan teknisi ke lokasi pelanggan.",
      "Estimasi biaya transparan dan faktur digital otomatis.",
      "Integrasi gerbang pembayaran digital multi-channel aman.",
      "Sistem rating, ulasan kinerja tukang, dan jaminan garansi pengerjaan.",
      "Dashboard operasional admin dan aplikasi teknisi mitra terintegrasi."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "iOS App Store",
      "Google Play Store",
      "On-Demand Service",
      "Geolocation",
      "Payment Gateway"
    ],
    "link": "https://benerin.co.id"
  },
  {
    "title": "VetCloud - Vet Clinic EMR & POS",
    "category": "mobile",
    "categoryLabel": "Mobile & SaaS Web",
    "platform": "iOS, Android (React Native) & Cloud Web System",
    "thumbnail": "assets/images/portfolios/vetcloud.png",
    "fullImage": "assets/images/portfolios/vetcloud.png",
    "webLink": "https://vetcloud.id",
    "playStoreLink": "https://play.google.com/store/apps/details?id=id.web.petclinic.clinic&hl=id",
    "appStoreLink": "https://apps.apple.com/us/app/vetcloud-vet-clinic-emr-pos/id6808703909",
    "description": "Software & Management System Klinik Hewan No. 1 di Indonesia. Mengintegrasikan Rekam Medis Elektronik (SOAP), kasir POS ritel petshop, dan janji temu dokter.",
    "fullDesc": "VetCloud merupakan sistem manajemen praktik kedokteran hewan berbasis cloud (Vet Practice Management System / Vet EMR & POS) terdepan di Indonesia. Melayani rumah sakit hewan, klinik pet, dokter hewan mandiri, petshop, dan pet hotel dengan sistem rekam medis elektronik berstandar SOAP, kasir pembayaran terpadu, serta manajemen inventaris obat dan vaksin.",
    "features": [
      "Live produksi di Apple App Store, Google Play Store, dan Web SaaS Platform.",
      "Rekam Medis Elektronik Terpadu (SOAP Notes, riwayat vaksinasi, tindakan medis).",
      "Sistem Kasir POS Ritel untuk penjualan obat, pakan, dan layanan grooming/inap.",
      "Manajemen janji temu (appointment booking) pasien hewan otomatis.",
      "Kontrol stok obat, notifikasi kedaluwarsa batch, dan kartu stok digital.",
      "Cetak resep dokter, faktur pembayaran, dan kartu riwayat pasien hewan.",
      "Sinkronisasi multi-cabang klinik hewan secara real-time tersentralisasi."
    ],
    "tags": [
      "React Native",
      "JavaScript",
      "iOS App Store",
      "Google Play Store",
      "EMR & Healthcare",
      "POS & Cashier",
      "Cloud SaaS"
    ],
    "link": "https://vetcloud.id"
  },
  {
    "title": "Dealaja - Platform Video & Deals",
    "category": "mobile",
    "categoryLabel": "Mobile & Web",
    "platform": "iOS & Android (Flutter)",
    "thumbnail": "assets/images/portfolios/dealaja.png",
    "fullImage": "assets/images/portfolios/dealaja_full.png",
    "gallery": [
      "assets/images/portfolios/dealaja.png",
      "assets/images/portfolios/dealaja_1.png",
      "assets/images/portfolios/dealaja_2.png",
      "assets/images/portfolios/dealaja_3.png",
      "assets/images/portfolios/dealaja_4.png",
      "assets/images/portfolios/dealaja_5.png"
    ],
    "webLink": null,
    "playStoreLink": "https://play.google.com/store/apps/details?id=com.dealaja.prod&hl=id",
    "appStoreLink": "https://apps.apple.com/us/app/dealaja/id6744938650",
    "description": "Peningkatan fitur Dealaja: optimasi transcoding video HLS adaptive streaming, watermarking dinamis konten, kompresi aset gambar, dan modul akun bisnis merchant.",
    "fullDesc": "Dealaja adalah platform kurasi video penawaran diskon dan deals gaya hidup. Melakukan pengembangan dan peningkatan fitur inti: arsitektur pemrosesan video otomatis dari MP4 menjadi format streaming HLS adaptif, injeksi watermark dinamis branding pada video promosi, kompresi aset gambar multi-resolusi untuk memangkas latency pemuatan feed, serta perancangan modul registrasi dan onboarding akun bisnis merchant.",
    "features": [
      "Tersedia dan aktif di Apple App Store dan Google Play Store.",
      "Pipeline transcoding video otomatis MP4 ke HTTP Live Streaming (HLS) adaptif.",
      "Injeksi dynamic branding watermark pada seluruh konten video kreator/merchant.",
      "Kompresi gambar cerdas berbasis WebP untuk efisiensi transfer data aplikasi.",
      "Modul onboarding dan verifikasi akun bisnis merchant mitra.",
      "Integrasi caching video stream untuk pemutaran mulus tanpa buffering."
    ],
    "tags": [
      "Flutter",
      "iOS App Store",
      "Google Play Store",
      "HLS Video Streaming",
      "Video Transcoding",
      "REST API"
    ],
    "link": "https://apps.apple.com/us/app/dealaja/id6744938650"
  },
  {
    "title": "AsiaGolf Points & Loyalty Ecosystem",
    "category": "mobile",
    "categoryLabel": "Mobile & Store System",
    "platform": "iOS, Android (Flutter) & Internal Store App",
    "thumbnail": "assets/images/portfolios/asiagolf.png",
    "fullImage": "assets/images/portfolios/asiagolf_full.png",
    "gallery": [
      "assets/images/portfolios/asiagolf.png",
      "assets/images/portfolios/asiagolf_1.png",
      "assets/images/portfolios/asiagolf_2.png"
    ],
    "webLink": null,
    "playStoreLink": "https://play.google.com/store/apps/details?id=id.asiagolf.app&hl=id",
    "appStoreLink": "https://apps.apple.com/us/app/asiagolf-points/id6633417013",
    "description": "Ekosistem aplikasi mobile loyalty customer dan operasional internal AsiaGolf berbasis Flutter: membership digital, reward point, scan QR kasir, dan penukaran e-voucher.",
    "fullDesc": "Aplikasi produksi resmi AsiaGolf (AsiaGolf Points & Internal Store Operations) di Google Play Store dan Apple App Store. Berkontribusi aktif dalam rekayasa aplikasi Flutter Customer dan Internal toko: sistem membership digital & akumulasi reward point otomatis per transaksi belanja, katalog perlengkapan golf eksklusif (Bettinardi, J.Lindeberg, dll), pemindaian QR code kasir toko untuk validasi klaim poin, penukaran e-voucher diskon & cashback belanja fisik/online, serta integrasi riwayat transaksi real-time.",
    "features": [
      "Rilis resmi aktif di Apple App Store dan Google Play Store.",
      "Kontribusi pada Flutter App Customer (AsiaGolf Points) dan sistem Internal toko.",
      "Sistem keanggotaan digital & akumulasi reward point belanja otomatis.",
      "Katalog brand perlengkapan golf eksklusif (Bettinardi, J.Lindeberg, dll) & wishlist.",
      "Fitur scan QR / barcode kasir toko untuk validasi transaksi & klaim promo instan.",
      "Katalog penukaran e-voucher diskon belanja, promo cashback toko, dan online.",
      "Pelacakan riwayat transaksi belanja real-time dan notifikasi promo khusus member."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "iOS App Store",
      "Google Play Store",
      "Loyalty & CRM",
      "Retail & E-Commerce",
      "QR Scanner",
      "REST API"
    ],
    "link": "https://apps.apple.com/us/app/asiagolf-points/id6633417013"
  },
  {
    "title": "Lalong Payment - Agen PPOB & FinTech",
    "category": "mobile",
    "categoryLabel": "Mobile & FinTech",
    "platform": "Android (Flutter) & Web Admin (Laravel Octane + Inertia React)",
    "thumbnail": "assets/images/portfolios/lalong.png",
    "fullImage": "assets/images/portfolios/lalong_full.png",
    "gallery": [
      "assets/images/portfolios/lalong.png",
      "assets/images/portfolios/lalong_1.png",
      "assets/images/portfolios/lalong_2.png"
    ],
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Ekosistem aplikasi mobile keagenan PPOB dan pembayaran digital berbasis Flutter: pendaftaran agen, saldo aktif, downline kemitraan, transaksi pulsa/data, dan integrasi biller H2H.",
    "fullDesc": "Aplikasi mobile resmi Lalong Payment untuk pendaftaran dan operasional agen PPOB (Payment Point Online Bank). Mengintegrasikan arsitektur berkinerja tinggi antara mobile client Flutter dan backend Laravel Octane dengan panel web admin Inertia.js React. Mendukung alur bisnis lengkap mulai dari registrasi agen baru, manajemen saldo dompet digital & mutasi real-time, hierarki downline kemitraan, pemesanan kuota data/pulsa/token listrik multi-operator via biller H2H, serta laporan rekapitulasi transaksi otomatis.",
    "features": [
      "Aplikasi Mobile Agen PPOB berbasis Flutter untuk Android.",
      "Sistem pendaftaran agen baru dan manajemen kemitraan jaringan downline.",
      "Saldo aktif dompet digital, riwayat transaksi, dan mutasi saldo real-time.",
      "Fitur transaksi pulsa reguler, promo paket data, token listrik, dompet digital, voucher, dan paket TV.",
      "Integrasi API biller H2H untuk validasi ketersediaan dan eksekusi transaksi otomatis.",
      "Panel admin berbasis Laravel Octane dan Inertia.js React untuk pengelolaan harga dan produk."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Laravel Octane",
      "Inertia.js",
      "React.js",
      "PPOB & FinTech",
      "Biller H2H",
      "REST API"
    ],
    "link": null
  },
  {
    "title": "invme.id - Digital Wedding Invitation Platform",
    "category": "web",
    "categoryLabel": "Website & Platform",
    "platform": "Responsive Web Platform",
    "thumbnail": "assets/images/portfolios/invme.webp",
    "fullImage": "assets/images/portfolios/invme_full.webp",
    "gallery": [
      "assets/images/portfolios/invme.webp",
      "assets/images/portfolios/invme_1.webp",
      "assets/images/portfolios/invme_2.webp",
      "assets/images/portfolios/invme_3.webp",
      "assets/images/portfolios/invme_4.webp"
    ],
    "webLink": "https://www.bridestory.com/id/invme-id",
    "bridestoryLink": "https://www.bridestory.com/id/invme-id",
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Platform pembuatan website undangan pernikahan digital responsif dengan kustomisasi tema, RSVP, buku tamu online, galeri video/foto, dan peta lokasi.",
    "fullDesc": "invme.id merupakan platform layanan pembuatan website undangan pernikahan digital eksklusif (e-wedding invitation) yang dirancang untuk memberikan pengalaman personal, elegan, dan interaktif bagi calon pengantin dan para tamu undangan. Dilengkapi fitur RSVP otomatis, buku tamu digital, integrasi Google Maps untuk navigasi lokasi resepsi, pemutar musik latar, galeri kenangan cinta, serta tata letak responsif optimal di semua perangkat smartphone dan desktop.",
    "features": [
      "Terdaftar dan terverifikasi resmi sebagai vendor wedding invitation di platform Bridestory.",
      "Desain responsif optimal untuk tampilan mobile (smartphone), tablet, dan desktop.",
      "Sistem konfirmasi kehadiran (RSVP) real-time dan buku ucapan/doa tamu digital.",
      "Dukungan custom domain dan tautan undangan personalisasi nama tamu otomatis.",
      "Fitur hitung mundur (countdown timer) interaktif menuju hari bahagia pernikahan.",
      "Galeri foto pra-nikah (prewedding), pemutar video cerita cinta, dan musik latar otomatis.",
      "Navigasi rute terintegrasi Google Maps langsung ke venue akad & resepsi.",
      "Katalog portofolio live: Giovani & Natasya, Bayu & Almira, Khusni & Puji."
    ],
    "tags": [
      "Fullstack Web",
      "Frontend Design",
      "Responsive Web",
      "Bridestory Vendor",
      "UI/UX",
      "Interactive Media"
    ],
    "link": "https://www.bridestory.com/id/invme-id"
  },
  {
    "title": "Ashiaap & Ashiaap Mitra",
    "category": "mobile",
    "categoryLabel": "Mobile",
    "platform": "Android & iOS (Flutter)",
    "thumbnail": "assets/images/portfolios/ashiaap.png",
    "fullImage": "assets/images/portfolios/ashiaap_full.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Super app on-demand multi-layanan untuk transportasi penumpang, pesan antar makanan, layanan kesehatan, dan marketplace terintegrasi.",
    "fullDesc": "Ashiaap merupakan ekosistem aplikasi mobile super app yang menghubungkan pelanggan dengan berbagai mitra layanan lokal. Dibangun dengan arsitektur Flutter modular yang memisahkan aplikasi customer dan mitra driver/merchant, dilengkapi sistem dompet digital, pelacakan kurir live di peta, dan payment gateway aman.",
    "features": [
      "Layanan Transportasi & Antar Penumpang dengan penentuan tarif otomatis berbasis jarak.",
      "Food Delivery & Marketplace belanja kebutuhan harian dari merchant lokal.",
      "Layanan Kesehatan terintegrasi untuk pemesanan konsultasi dan obat.",
      "Sistem Saldo & E-Wallet dengan riwayat transaksi terenkripsi.",
      "Integrasi Payment Gateway Midtrans untuk pembayaran multi-channel otomatis.",
      "Fitur Chat in-app real-time antara pelanggan dan mitra pengemudi."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Midtrans",
      "REST API",
      "OpenStreetMap",
      "WebSockets"
    ],
    "link": null
  },
  {
    "title": "Beceer & Beceer Driver",
    "category": "mobile",
    "categoryLabel": "Mobile",
    "platform": "Android & iOS (Flutter)",
    "thumbnail": "assets/images/portfolios/beceer.png",
    "fullImage": "assets/images/portfolios/beceer_full.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "award": "Juara 1 Dicoding Challenge 2019",
    "awardLink": "https://www.dicoding.com/blog/aplikasi-berbasis-flutter-beceer-sang-juara/",
    "description": "Platform e-groceries belanja pasar tradisional & pengantaran kurir real-time. Dinobatkan sebagai Juara 1 Dicoding Challenge 2019.",
    "fullDesc": "Aplikasi e-groceries kebutuhan dapur segar yang memudahkan ibu rumah tangga dan pelaku kuliner berbelanja bahan pokok dari pedagang pasar tradisional. Dinobatkan sebagai Juara 1 Nasional Dicoding Challenge ('Create Beautiful Apps using Flutter') oleh Dicoding Indonesia karena fungsionalitas maksimal dan dampak sosial nyata bagi pedagang pasar. Terdiri dari aplikasi konsumen untuk belanja dan aplikasi 'Beceer Driver' untuk navigasi kurir.",
    "features": [
      "🏆 Juara 1 Nasional Dicoding Challenge: Create Beautiful Apps using Flutter (Juni 2019).",
      "Katalog bahan pokok terupdate harian dengan penyesuaian harga pasar langsung.",
      "Aplikasi terpisah Beceer Driver dengan kalkulasi rute pengantaran optimal.",
      "Pelacakan kurir real-time dari pasar hingga tiba di depan rumah pelanggan.",
      "Pilihan jadwal pengantaran pagi atau sore sesuai kesiapan konsumen.",
      "Manajemen keranjang belanja cepat dan reorder daftar belanjaan favorit."
    ],
    "tags": [
      "🏆 Juara 1 Dicoding",
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "Geolocation",
      "State Management"
    ],
    "link": "https://www.dicoding.com/blog/aplikasi-berbasis-flutter-beceer-sang-juara/"
  },
  {
    "title": "Event Hunter Indonesia",
    "category": "mobile",
    "categoryLabel": "Mobile",
    "platform": "Android & iOS (Flutter)",
    "thumbnail": "assets/images/portfolios/eventhunter.png",
    "fullImage": "assets/images/portfolios/eventhunter_full.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Platform pencarian event, ticketing online, sistem loyalty point, dan portal bagi event organizer untuk registrasi serta publikasi event nasional.",
    "fullDesc": "Aplikasi mobile resmi Event Hunter Indonesia, pusat informasi dan portal event kepemudaan terbesar di Indonesia. Menjadi wadah bagi jutaan anak muda nasional untuk publikasi dan reservasi tiket event kompetisi, beasiswa, seminar, dan workshop. Mengakomodasi ribuan peserta dengan alur pendaftaran instan, pembayaran tiket otomatis, dan verifikasi e-ticket QR Code di lokasi acara.",
    "features": [
      "Katalog & Kategori Event Nasional (Beasiswa, Seminar, Kompetisi, Expo).",
      "Pemesanan Tiket Online langsung dengan integrasi gerbang pembayaran.",
      "Penerbitan E-Ticket digital berbekal QR Code unik untuk validasi check-in.",
      "Loyalty Point akumulatif dari setiap partisipasi kegiatan.",
      "Portal Organizers untuk pengajuan publikasi dan monitoring kuota peserta.",
      "Fitur Chat bantuan dan notifikasi jadwal mendekati hari-H event."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Payment Gateway",
      "QR Code Engine",
      "REST API"
    ],
    "link": null
  },
  {
    "title": "Kopi Arasta Coffee Ordering",
    "category": "mobile",
    "categoryLabel": "Mobile",
    "platform": "Android & iOS (Flutter)",
    "thumbnail": "assets/images/portfolios/kopiarasta.png",
    "fullImage": "assets/images/portfolios/kopiarasta_full.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Aplikasi pemesanan menu kopi, loyalty stamps digital, promo voucher diskon, dan penukaran reward eksklusif pelanggan outlet.",
    "fullDesc": "Solusi digitalisasi coffee shop outlet Kopi Arasta. Memungkinkan pelanggan memesan dari meja (dine-in table QR), pesan takeaway sebelum tiba di kedai, serta mengumpulkan stempel digital setiap pembelian minuman untuk ditukar dengan reward gratis.",
    "features": [
      "Katalog Menu Interaktif dengan kustomisasi pesanan (sugar level, ice, add-on).",
      "Pemesanan Dine-In (scan meja) dan Takeaway bebas antrean.",
      "Digital Loyalty Stamps & Reward Points pengganti kartu stempel fisik.",
      "Voucher promo otomatis saat perayaan ulang tahun atau event khusus.",
      "Riwayat pesanan dan nota digital langsung tersimpan di aplikasi.",
      "Notifikasi pesanan siap diambil di barista counter."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Mobile POS Integration",
      "REST API",
      "UI/UX"
    ],
    "link": null
  },
  {
    "title": "WN Cafe & Aftobar CRM & POS",
    "category": "mobile",
    "categoryLabel": "Mobile",
    "platform": "Android & iOS (Play Store & App Store)",
    "thumbnail": "assets/images/portfolios/wncafe.png",
    "fullImage": "assets/images/portfolios/wncafe.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Aplikasi Mobile CRM & POS (iOS & Android) di Google Play Store & Apple App Store dengan integrasi Midtrans, Xendit, serta kurir GoSend & GrabExpress.",
    "fullDesc": "Suite aplikasi enterprise untuk PT Wisata Niaga Sejahtera yang mengoperasikan beberapa outlet populer (WN Cafe, Aftobar, dan Lobby Garden). Terdiri dari aplikasi konsumen CRM di App Store & Play Store untuk program loyalitas, pemesanan dine-in/delivery, serta aplikasi kasir POS tablet untuk operasional staf backoffice.",
    "features": [
      "Publikasi resmi di Google Play Store dan Apple App Store.",
      "Integrasi multi gerbang pembayaran online: Midtrans dan Xendit.",
      "Integrasi kurir instan on-demand GoSend dan GrabExpress API untuk delivery.",
      "Manajemen meja reservasi restoran dan pemesanan makanan berbasis QR code.",
      "Modul kasir Point of Sale (POS) tersinkronisasi langsung dengan stok dapur.",
      "Laporan penjualan harian, shift kasir, dan analitik menu terlaris."
    ],
    "tags": [
      "Flutter",
      "iOS App Store",
      "Google Play Store",
      "Midtrans",
      "Xendit",
      "GoSend/Grab"
    ],
    "link": null
  },
  {
    "title": "Nexusnesia Real Estate Marketplace",
    "category": "web",
    "categoryLabel": "Website",
    "platform": "Web App (Next.js & Golang)",
    "thumbnail": "assets/images/portfolios/nexusnesia.png",
    "fullImage": "assets/images/portfolios/nexusnesia.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Marketplace properti jual & sewa dengan pembagian agen per wilayah dan manajemen listing. Frontend Next.js dan backend Golang.",
    "fullDesc": "Platform marketplace real estate berskala besar yang dikembangkan untuk Nexusnesia. Menghubungkan pembeli, penyewa, dan ratusan agen properti di berbagai kota dengan pembagian hak akses terkelola dan mesin pencari properti cepat berbasis Golang.",
    "features": [
      "Frontend modern menggunakan Next.js dengan Server-Side Rendering (SSR) untuk SEO.",
      "Backend berperforma tinggi menggunakan bahasa Golang dan database PostgreSQL.",
      "Manajemen properti jual dan sewa (rumah, tanah, ruko, apartemen).",
      "Sistem keagenan berbasis wilayah (regional agents) untuk posting mandiri.",
      "Filter pencarian canggih berdasarkan rentang harga, lokasi peta, dan spesifikasi unit.",
      "Panel dashboard admin untuk validasi kelayakan listing dan data legalitas."
    ],
    "tags": [
      "Next.js",
      "Golang",
      "PostgreSQL",
      "Tailwind CSS",
      "RESTful API"
    ],
    "link": null
  },
  {
    "title": "HRIS Mobile Application",
    "category": "mobile",
    "categoryLabel": "Mobile",
    "platform": "Android & iOS (Flutter)",
    "thumbnail": "assets/images/portfolios/hris.png",
    "fullImage": "assets/images/portfolios/hris.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Sistem absensi berbasis GPS & foto selfie, pengajuan cuti, lembur, dan slip gaji digital untuk efisiensi operasional human resource.",
    "fullDesc": "Solusi manajemen kehadiran dan operasional karyawan modern. Meminimalisir kecurangan absensi menggunakan verifikasi biometrik wajah/selfie dipadukan dengan radius geofencing GPS akurat lokasi kantor.",
    "features": [
      "Presensi masuk/pulang dengan validasi titik GPS radius geofencing dan kamera selfie.",
      "Formulir pengajuan cuti tahunan, sakit, dan izin dengan lampiran berkas surat dokter.",
      "Pencatatan jam kerja lembur (overtime) lengkap dengan persetujuan atasan bertingkat.",
      "Unduh slip gaji elektronik (e-payslip) bulanan berformat PDF terenkripsi.",
      "Rekap kehadiran personal dan riwayat sisa kuota cuti tahunan.",
      "Notifikasi pengingat absensi pagi dan pengumuman internal perusahaan."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Geolocation & Geofencing",
      "REST API",
      "Clean Architecture"
    ],
    "link": null
  },
  {
    "title": "E-SKP BAKTI KOMINFO",
    "category": "web",
    "categoryLabel": "Website",
    "platform": "Web System (Laravel PHP)",
    "thumbnail": "assets/images/portfolios/eskp.png",
    "fullImage": "assets/images/portfolios/eskp.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Sistem Informasi Sasaran Kinerja Pegawai (E-SKP) untuk BAKTI KOMINFO dengan pengelolaan penilaian kerja berkala dan dashboard KPI berbasis Laravel.",
    "fullDesc": "Sistem manajemen evaluasi dan sasaran kerja aparatur/pegawai yang dibangun bersama Reksa Karya untuk lembaga BAKTI KOMINFO. Memfasilitasi penetapan target tahunan, pencatatan capaian bulanan, dan evaluasi hierarki pimpinan yang akuntabel.",
    "features": [
      "Penyusunan target Sasaran Kinerja Pegawai (SKP) tahunan secara terstruktur.",
      "Pencatatan realisasi kegiatan dan bukti pendukung (evidence log) berkala.",
      "Alur persetujuan bertingkat (atasan langsung dan pejabat penilai).",
      "Dashboard KPI dan kalkulasi otomatis nilai prestasi kerja pegawai.",
      "Cetak dokumen laporan format resmi kedinasan dalam format PDF otomatis.",
      "Manajemen perizinan akses berbasis peran (Super Admin, Verifikator, Pegawai)."
    ],
    "tags": [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Government System"
    ],
    "link": null
  },
  {
    "title": "MAKE (Makan Kenyang)",
    "category": "web",
    "categoryLabel": "Website & Web Platform",
    "platform": "Full Stack (Web & Mobile API)",
    "thumbnail": "assets/images/portfolios/make.png",
    "fullImage": "assets/images/portfolios/make_full.png",
    "gallery": [
      "assets/images/portfolios/make.png",
      "assets/images/portfolios/make_1.png",
      "assets/images/portfolios/make_2.png",
      "assets/images/portfolios/make_3.png"
    ],
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Platform pemetaan titik lokasi pembagian makanan gratis berbasis OpenStreetMap dengan kontribusi publik, navigasi rute, dan validasi admin.",
    "fullDesc": "Inisiatif sosial digital yang memetakan lokasi penyediaan dan pembagian makanan gratis bagi masyarakat yang membutuhkan. Mengintegrasikan teknologi OpenStreetMap untuk menampilkan radius lokasi titik sedekah makan di berbagai wilayah.",
    "features": [
      "Integrasi peta OpenStreetMap interaktif dengan pin penanda lokasi real-time.",
      "Formulir saran kontribusi masyarakat untuk mendaftarkan titik sedekah baru.",
      "Dashboard admin untuk kurasi, verifikasi, dan validasi keaktifan lokasi makan gratis.",
      "Panduan rute navigasi dari posisi pengguna ke lokasi pembagian terdekat.",
      "Antarmuka ringan, ramah kuota, dan mudah diakses dari perangkat mobile."
    ],
    "tags": [
      "Fullstack",
      "OpenStreetMap",
      "Leaflet JS",
      "PHP",
      "REST API"
    ],
    "link": null
  },
  {
    "title": "Sistem Informasi & Jurnal Kelas",
    "category": "web",
    "categoryLabel": "Website",
    "platform": "Web System (Laravel PHP)",
    "thumbnail": "assets/images/portfolios/jurnalkelas.png",
    "fullImage": "assets/images/portfolios/jurnalkelas.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Sistem jurnal kegiatan belajar mengajar, penjadwalan kelas otomatis, dan plotting guru terintegrasi untuk institusi pendidikan.",
    "fullDesc": "Platform tata kelola administrasi akademik sekolah untuk mendokumentasikan agenda harian guru di kelas secara transparan dan akurat. Menggantikan buku jurnal kertas konvensional dengan sistem berbasis web yang bisa dipantau langsung oleh kepala sekolah dan wali murid.",
    "features": [
      "Pencatatan jurnal mengajar harian (materi, kehadiran siswa, catatan khusus).",
      "Matriks jadwal pelajaran mingguan bebas tabrakan (anti-conflict plotting).",
      "Rekap absensi siswa per mata pelajaran otomatis terintegrasi ke buku nilai.",
      "Cetak rekapitulasi kinerja guru dan pemenuhan jam mengajar format Excel/PDF.",
      "Portal pengawasan untuk kepala sekolah dan tim bimbingan konseling."
    ],
    "tags": [
      "Laravel",
      "PHP",
      "MySQL",
      "School Academic System"
    ],
    "link": null
  },
  {
    "title": "E-Database Survey Mobile",
    "category": "mobile",
    "categoryLabel": "Mobile",
    "platform": "Android (Flutter & SQLite)",
    "thumbnail": "assets/images/portfolios/survey.png",
    "fullImage": "assets/images/portfolios/survey.png",
    "webLink": null,
    "playStoreLink": null,
    "appStoreLink": null,
    "description": "Aplikasi mobile survey lapangan multi-wilayah dengan perekaman koordinat GPS, mode offline lokal, dan sinkronisasi data API.",
    "fullDesc": "Aplikasi pengumpulan data dan sensus lapangan yang dirancang untuk surveyor di daerah pelosok dengan konektivitas seluler minim. Mendukung penyimpanan ribuan kuesioner kompleks di penyimpanan lokal perangkat sebelum disinkronkan ke server utama.",
    "features": [
      "Operasional penuh secara offline dengan penyimpanan lokal SQLite terenkripsi.",
      "Perekaman otomatis koordinat GPS dan akurasi ketinggian pada setiap kuesioner.",
      "Kompresi otomatis foto bukti survei sebelum proses sinkronisasi jaringan.",
      "Mekanisme background sync otomatis saat perangkat kembali mendapat sinyal internet.",
      "Validasi logika input kuesioner dinamis untuk mencegah anomali data di lapangan."
    ],
    "tags": [
      "Flutter",
      "Dart",
      "SQLite",
      "REST API",
      "Offline First",
      "GPS Geolocation"
    ],
    "link": null
  }
];

  var HTML2PDF_CDN =
    "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";

  function showToast(message) {
    var toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toast.hidden = true;
    }, 3500);
  }

  // ===== THEME TOGGLE =====
  function initTheme() {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    function syncButton(theme) {
      var isDark = theme === "dark";
      btn.setAttribute("aria-pressed", String(!isDark));
      btn.setAttribute(
        "aria-label",
        isDark ? "Ubah ke mode terang" : "Ubah ke mode gelap"
      );
    }

    syncButton(root.getAttribute("data-theme") || "dark");

    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("profile-theme", next);
      } catch (e) {}
      syncButton(next);
    });
  }

  // ===== MOBILE MENU =====
  function initMobileMenu() {
    var toggle = document.getElementById("menu-toggle");
    var drawer = document.getElementById("mobile-drawer");
    if (!toggle || !drawer) return;

    function closeDrawer() {
      drawer.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      drawer.hidden = expanded;
      toggle.setAttribute("aria-expanded", String(!expanded));
    });

    drawer.addEventListener("click", function (event) {
      if (event.target.matches("a")) {
        closeDrawer();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !drawer.hidden) {
        closeDrawer();
        toggle.focus();
      }
    });
  }

  // ===== INTERACTIVE IMAGE ZOOM LIGHTBOX =====
  var zoomLightbox = {
    lightboxEl: null,
    imageEl: null,
    titleEl: null,
    levelBadge: null,
    currentScale: 1,
    minScale: 0.5,
    maxScale: 4.0,
    panX: 0,
    panY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,

    init: function () {
      this.lightboxEl = document.getElementById("image-zoom-lightbox");
      this.imageEl = document.getElementById("zoom-target-image");
      this.titleEl = document.getElementById("zoom-lightbox-title");
      this.levelBadge = document.getElementById("zoom-level-badge");

      if (!this.lightboxEl || !this.imageEl) return;

      var self = this;

      var inBtn = document.getElementById("zoom-in-btn");
      var outBtn = document.getElementById("zoom-out-btn");
      var fitBtn = document.getElementById("zoom-fit-btn");
      var resetBtn = document.getElementById("zoom-reset-btn");
      var closeBtn = document.getElementById("zoom-close-btn");
      var backdrop = document.getElementById("zoom-lightbox-backdrop");

      if (inBtn) inBtn.addEventListener("click", function () { self.zoom(0.3); });
      if (outBtn) outBtn.addEventListener("click", function () { self.zoom(-0.3); });
      if (fitBtn) fitBtn.addEventListener("click", function () { self.fitToScreen(); });
      if (resetBtn) resetBtn.addEventListener("click", function () { self.resetZoom(); });
      if (closeBtn) closeBtn.addEventListener("click", function () { self.close(); });
      if (backdrop) backdrop.addEventListener("click", function () { self.close(); });

      // Click on image toggles between fit (1.0x) and zoom (2.2x)
      this.imageEl.addEventListener("click", function () {
        if (self.currentScale > 1.2) {
          self.fitToScreen();
        } else {
          self.setScale(2.2);
        }
      });

      // Mouse wheel zoom
      this.lightboxEl.addEventListener("wheel", function (e) {
        e.preventDefault();
        var delta = e.deltaY < 0 ? 0.25 : -0.25;
        self.zoom(delta);
      }, { passive: false });

      // Drag to pan when zoomed
      var stage = document.getElementById("zoom-stage");
      if (stage) {
        stage.addEventListener("mousedown", function (e) {
          if (self.currentScale <= 1.05 && e.target !== self.imageEl) return;
          self.isDragging = true;
          self.startX = e.clientX - self.panX;
          self.startY = e.clientY - self.panY;
          stage.style.cursor = "grabbing";
        });

        window.addEventListener("mousemove", function (e) {
          if (!self.isDragging) return;
          self.panX = e.clientX - self.startX;
          self.panY = e.clientY - self.startY;
          self.applyTransform();
        });

        window.addEventListener("mouseup", function () {
          if (self.isDragging) {
            self.isDragging = false;
            if (stage) stage.style.cursor = self.currentScale > 1 ? "grab" : "zoom-in";
          }
        });
      }

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && self.isOpen()) {
          e.stopPropagation();
          self.close();
        }
      });
    },

    open: function (src, title) {
      if (!this.lightboxEl || !this.imageEl) return;
      this.imageEl.src = src;
      this.imageEl.alt = title || "Pratinjau Resolusi Penuh";
      if (this.titleEl) {
        this.titleEl.textContent = title || "Pratinjau Resolusi Penuh";
      }

      this.lightboxEl.hidden = false;
      this.lightboxEl.setAttribute("aria-hidden", "false");
      this.lightboxEl.classList.add("is-open");
      document.body.classList.add("lightbox-open");
      this.fitToScreen();
    },

    close: function () {
      if (!this.lightboxEl) return;
      this.lightboxEl.classList.remove("is-open");
      this.lightboxEl.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-open");
      var self = this;
      setTimeout(function () {
        self.lightboxEl.hidden = true;
        self.resetZoom();
      }, 250);
    },

    isOpen: function () {
      return this.lightboxEl && !this.lightboxEl.hidden;
    },

    zoom: function (step) {
      this.setScale(this.currentScale + step);
    },

    setScale: function (newScale) {
      this.currentScale = Math.max(this.minScale, Math.min(this.maxScale, newScale));
      if (this.currentScale <= 1.05) {
        this.panX = 0;
        this.panY = 0;
      }
      this.applyTransform();
    },

    fitToScreen: function () {
      this.currentScale = 1.0;
      this.panX = 0;
      this.panY = 0;
      this.applyTransform();
    },

    resetZoom: function () {
      this.currentScale = 1.0;
      this.panX = 0;
      this.panY = 0;
      this.applyTransform();
    },

    applyTransform: function () {
      if (!this.imageEl) return;
      this.imageEl.style.transform =
        "translate(" + this.panX + "px, " + this.panY + "px) scale(" + this.currentScale + ")";
      if (this.levelBadge) {
        this.levelBadge.textContent = Math.round(this.currentScale * 100) + "%";
      }
      var stage = document.getElementById("zoom-stage");
      if (stage) {
        stage.style.cursor = this.currentScale > 1 ? "grab" : "zoom-in";
      }
    }
  };

  // ===== PROJECT MODAL CONTROLLER =====
  var activeModal = null;
  var currentModalItem = null;

  function openProjectModal(item) {
    currentModalItem = item;
    var modal = document.getElementById("project-modal");
    if (!modal) return;

    var modalImage = document.getElementById("modal-image");
    var modalCategory = document.getElementById("modal-category");
    var modalPlatform = document.getElementById("modal-platform");
    var modalTitle = document.getElementById("modal-title");
    var modalDesc = document.getElementById("modal-desc");
    var modalFeaturesList = document.getElementById("modal-features-list");
    var modalTags = document.getElementById("modal-tags");
    var modalContactLink = document.getElementById("modal-contact-link");
    var modalMedia = document.getElementById("modal-media");
    var modalZoomTrigger = document.getElementById("modal-zoom-trigger");
    var modalLinksRow = document.getElementById("modal-links-row");

    if (modalCategory) {
      modalCategory.textContent = item.categoryLabel;
    }
    if (modalPlatform) {
      modalPlatform.textContent = "Platform: " + (item.platform || (item.category === "mobile" ? "Android & iOS (Mobile)" : "Web Application"));
    }
    if (modalImage) {
      modalImage.src = item.thumbnail || "";
      modalImage.alt = item.title;
    }
    if (modalTitle) {
      modalTitle.textContent = item.title;
    }
    if (modalDesc) {
      modalDesc.textContent = item.fullDesc || item.description;
    }

    var modalGalleryRow = document.getElementById("modal-gallery-row");
    var activeZoomSrc = item.fullImage || item.thumbnail;

    if (modalGalleryRow) {
      modalGalleryRow.innerHTML = "";
      if (item.gallery && item.gallery.length > 1) {
        modalGalleryRow.hidden = false;
        item.gallery.forEach(function (gSrc, idx) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "modal-gallery-thumb" + (idx === 0 ? " is-active" : "");
          btn.setAttribute("aria-label", "Tampilkan tangkapan layar " + (idx + 1));
          var thumbImg = document.createElement("img");
          thumbImg.src = gSrc;
          thumbImg.alt = "Tangkapan layar " + (idx + 1);
          btn.appendChild(thumbImg);

          btn.addEventListener("click", function () {
            var allThumbs = modalGalleryRow.querySelectorAll(".modal-gallery-thumb");
            allThumbs.forEach(function (t) { t.classList.remove("is-active"); });
            btn.classList.add("is-active");
            if (modalImage) modalImage.src = gSrc;
            activeZoomSrc = gSrc;
          });

          modalGalleryRow.appendChild(btn);
        });
      } else {
        modalGalleryRow.hidden = true;
      }
    }

    // Set up interactive zoom trigger
    function triggerZoom(e) {
      if (e) e.stopPropagation();
      var targetSrc = activeZoomSrc || item.fullImage || item.thumbnail;
      if (targetSrc) {
        zoomLightbox.open(targetSrc, item.title + " (Resolusi Penuh)");
      }
    }

    if (modalMedia) {
      modalMedia.onclick = triggerZoom;
    }
    if (modalZoomTrigger) {
      modalZoomTrigger.onclick = triggerZoom;
    }

    // Populate official links (Website, Play Store, App Store)
    if (modalLinksRow) {
      modalLinksRow.innerHTML = "";
      var hasLinks = false;

      if (item.webLink && !item.bridestoryLink) {
        hasLinks = true;
        var webBtn = document.createElement("a");
        webBtn.className = "store-btn store-btn-web";
        webBtn.href = item.webLink;
        webBtn.target = "_blank";
        webBtn.rel = "noopener noreferrer";
        webBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> <span>Kunjungi Website</span>';
        modalLinksRow.appendChild(webBtn);
      }

      if (item.bridestoryLink) {
        hasLinks = true;
        var bsBtn = document.createElement("a");
        bsBtn.className = "store-btn store-btn-web";
        bsBtn.href = item.bridestoryLink;
        bsBtn.target = "_blank";
        bsBtn.rel = "noopener noreferrer";
        bsBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> <span>Profil Bridestory</span>';
        modalLinksRow.appendChild(bsBtn);
      }

      if (item.playStoreLink) {
        hasLinks = true;
        var playBtn = document.createElement("a");
        playBtn.className = "store-btn store-btn-play";
        playBtn.href = item.playStoreLink;
        playBtn.target = "_blank";
        playBtn.rel = "noopener noreferrer";
        playBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.793 12 3.61 22.186A2.22 2.22 0 0 1 3 20.613V3.387c0-.596.222-1.168.609-1.573zm11.603 11.604l2.585 2.585-11.43 6.57a2.27 2.27 0 0 1-.954.227l9.799-9.382zm0-2.836L5.413 1.2a2.27 2.27 0 0 1 .954.227l11.43 6.57-2.585 2.585zm1.414 1.418l3.473-1.996a1.94 1.94 0 0 1 0 3.392l-3.473-1.996z"/></svg> <span>Google Play Store</span>';
        modalLinksRow.appendChild(playBtn);
      }

      if (item.appStoreLink) {
        hasLinks = true;
        var iosBtn = document.createElement("a");
        iosBtn.className = "store-btn store-btn-apple";
        iosBtn.href = item.appStoreLink;
        iosBtn.target = "_blank";
        iosBtn.rel = "noopener noreferrer";
        iosBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.87.96-2.96-.93.04-2.07.62-2.73 1.39-.58.67-1.09 1.77-.95 2.83 1.04.08 2.1-.51 2.72-1.26z"/></svg> <span>Apple App Store</span>';
        modalLinksRow.appendChild(iosBtn);
      }

      if (item.awardLink) {
        hasLinks = true;
        var awardBtn = document.createElement("a");
        awardBtn.className = "store-btn store-btn-award";
        awardBtn.href = item.awardLink;
        awardBtn.target = "_blank";
        awardBtn.rel = "noopener noreferrer";
        awardBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.5-6.2-4.6-6.2 4.6 2.4-7.5-6.2-4.5h7.6z"/></svg> <span>Liputan Juara Dicoding</span>';
        modalLinksRow.appendChild(awardBtn);
      }

      var linksSection = document.querySelector(".modal-links-section");
      if (linksSection) {
        linksSection.hidden = !hasLinks;
      }
    }

    if (modalFeaturesList) {
      modalFeaturesList.innerHTML = "";
      var features = item.features || [
        "Pengembangan arsitektur kode terstruktur dan performa tinggi.",
        "Integrasi sistem backend dan antarmuka responsif ramah pengguna.",
        "Pengujian fungsionalitas dan optimalisasi alur proses bisnis."
      ];
      features.forEach(function (f) {
        var li = document.createElement("li");
        li.textContent = f;
        modalFeaturesList.appendChild(li);
      });
    }

    if (modalTags) {
      modalTags.innerHTML = "";
      (item.tags || []).forEach(function (tag) {
        var li = document.createElement("li");
        li.textContent = tag;
        modalTags.appendChild(li);
      });
    }

    if (modalContactLink) {
      modalContactLink.href = "https://www.linkedin.com/in/bayuly94/";
      modalContactLink.target = "_blank";
      modalContactLink.rel = "noopener noreferrer";
    }

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    activeModal = modal;
  }

  function closeProjectModal() {
    var modal = document.getElementById("project-modal");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeModal = null;
    currentModalItem = null;

    setTimeout(function () {
      modal.hidden = true;
    }, 280);
  }

  function initModalEvents() {
    var modal = document.getElementById("project-modal");
    var closeBtn = document.getElementById("modal-close-btn");
    var dismissBtn = document.getElementById("modal-dismiss-btn");

    if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);
    if (dismissBtn) dismissBtn.addEventListener("click", closeProjectModal);

    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          closeProjectModal();
        }
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && activeModal && (!zoomLightbox.isOpen())) {
        closeProjectModal();
      }
    });
  }

  // ===== PORTFOLIO FILTER & RENDER =====
  function initPortfolio() {
    var grid = document.getElementById("portfolio-grid");
    var statusBox = document.getElementById("portfolio-status");
    var tabs = Array.prototype.slice.call(
      document.querySelectorAll(".filter-tabs .tab-btn")
    );
    var countAll = document.getElementById("count-all");
    var countMobile = document.getElementById("count-mobile");
    var countWeb = document.getElementById("count-web");

    if (!grid || !tabs.length) return;

    var mobileCount = PORTFOLIO_ITEMS.filter(function (item) {
      return item.category === "mobile";
    }).length;
    var webCount = PORTFOLIO_ITEMS.filter(function (item) {
      return item.category === "web";
    }).length;

    if (countAll) countAll.textContent = String(PORTFOLIO_ITEMS.length);
    if (countMobile) countMobile.textContent = String(mobileCount);
    if (countWeb) countWeb.textContent = String(webCount);
    var tabWeb = document.getElementById("tab-web");
    if (tabWeb) {
      tabWeb.style.display = webCount === 0 ? "none" : "";
    }

    function render(filter) {
      var filtered =
        filter === "all"
          ? PORTFOLIO_ITEMS
          : PORTFOLIO_ITEMS.filter(function (item) {
              return item.category === filter;
            });

      grid.innerHTML = "";

      if (!filtered.length) {
        if (statusBox) {
          statusBox.textContent = "Belum ada proyek pada kategori ini.";
          statusBox.hidden = false;
        }
        return;
      }

      if (statusBox) {
        statusBox.hidden = true;
      }

      filtered.forEach(function (item) {
        var card = document.createElement("article");
        card.className = "project-card";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", "Lihat detail proyek " + item.title);

        var thumb = document.createElement("div");
        thumb.className = "project-thumb";

        var badge = document.createElement("span");
        badge.className = "project-category";
        badge.textContent = item.categoryLabel;

        if (item.thumbnail) {
          var img = document.createElement("img");
          img.src = item.thumbnail;
          img.alt = item.title;
          img.loading = "lazy";
          thumb.appendChild(img);
        } else {
          var placeholderLabel = document.createElement("span");
          placeholderLabel.className = "project-placeholder-label";
          placeholderLabel.textContent = "[Cuplikan Proyek]";
          thumb.appendChild(placeholderLabel);
        }
        thumb.appendChild(badge);

        if (item.award) {
          var awardPill = document.createElement("span");
          awardPill.className = "card-award-badge";
          awardPill.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.5-6.2-4.6-6.2 4.6 2.4-7.5-6.2-4.5h7.6z"/></svg> <span>Juara 1</span>';
          thumb.appendChild(awardPill);
        }

        var body = document.createElement("div");
        body.className = "project-body";

        var title = document.createElement("h3");
        var titleLink = document.createElement("a");
        titleLink.href = item.webLink || "https://bayuly94.github.io";
        titleLink.target = "_blank";
        titleLink.rel = "noopener noreferrer";
        titleLink.style.color = "inherit";
        titleLink.style.textDecoration = "none";
        titleLink.textContent = item.title;
        titleLink.addEventListener("click", function (e) {
          e.stopPropagation();
        });
        title.appendChild(titleLink);

        var desc = document.createElement("p");
        desc.textContent = item.description;

        var tagList = document.createElement("ul");
        tagList.className = "tag-list";
        item.tags.forEach(function (tag) {
          var li = document.createElement("li");
          li.textContent = tag;
          tagList.appendChild(li);
        });

        // Direct store action icons on card (Web, Play Store, App Store only icons)
        var cardStoreIcons = document.createElement("div");
        cardStoreIcons.className = "card-store-icons";

        if (item.webLink && !item.bridestoryLink) {
          var webIcon = document.createElement("a");
          webIcon.className = "card-icon-btn";
          webIcon.href = item.webLink;
          webIcon.target = "_blank";
          webIcon.rel = "noopener noreferrer";
          webIcon.title = "Kunjungi Website (" + item.title + ")";
          webIcon.setAttribute("aria-label", "Website: " + item.title);
          webIcon.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
          webIcon.addEventListener("click", function (e) {
            e.stopPropagation();
          });
          cardStoreIcons.appendChild(webIcon);
        }

        if (item.bridestoryLink) {
          var bsIcon = document.createElement("a");
          bsIcon.className = "card-icon-btn";
          bsIcon.href = item.bridestoryLink;
          bsIcon.target = "_blank";
          bsIcon.rel = "noopener noreferrer";
          bsIcon.title = "Lihat di Bridestory (" + item.title + ")";
          bsIcon.setAttribute("aria-label", "Bridestory: " + item.title);
          bsIcon.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
          bsIcon.addEventListener("click", function (e) {
            e.stopPropagation();
          });
          cardStoreIcons.appendChild(bsIcon);
        }

        if (item.playStoreLink) {
          var playIcon = document.createElement("a");
          playIcon.className = "card-icon-btn";
          playIcon.href = item.playStoreLink;
          playIcon.target = "_blank";
          playIcon.rel = "noopener noreferrer";
          playIcon.title = "Google Play Store (" + item.title + ")";
          playIcon.setAttribute("aria-label", "Google Play Store: " + item.title);
          playIcon.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.793 12 3.61 22.186A2.22 2.22 0 0 1 3 20.613V3.387c0-.596.222-1.168.609-1.573zm11.603 11.604l2.585 2.585-11.43 6.57a2.27 2.27 0 0 1-.954.227l9.799-9.382zm0-2.836L5.413 1.2a2.27 2.27 0 0 1 .954.227l11.43 6.57-2.585 2.585zm1.414 1.418l3.473-1.996a1.94 1.94 0 0 1 0 3.392l-3.473-1.996z"/></svg>';
          playIcon.addEventListener("click", function (e) {
            e.stopPropagation();
          });
          cardStoreIcons.appendChild(playIcon);
        }

        if (item.appStoreLink) {
          var appIcon = document.createElement("a");
          appIcon.className = "card-icon-btn";
          appIcon.href = item.appStoreLink;
          appIcon.target = "_blank";
          appIcon.rel = "noopener noreferrer";
          appIcon.title = "Apple App Store (" + item.title + ")";
          appIcon.setAttribute("aria-label", "Apple App Store: " + item.title);
          appIcon.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.87.96-2.96-.93.04-2.07.62-2.73 1.39-.58.67-1.09 1.77-.95 2.83 1.04.08 2.1-.51 2.72-1.26z"/></svg>';
          appIcon.addEventListener("click", function (e) {
            e.stopPropagation();
          });
          cardStoreIcons.appendChild(appIcon);
        }

        if (item.awardLink) {
          var awardIcon = document.createElement("a");
          awardIcon.className = "card-icon-btn";
          awardIcon.href = item.awardLink;
          awardIcon.target = "_blank";
          awardIcon.rel = "noopener noreferrer";
          awardIcon.title = "Liputan Juara Dicoding (" + item.title + ")";
          awardIcon.setAttribute("aria-label", "Liputan Dicoding: " + item.title);
          awardIcon.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.5-6.2-4.6-6.2 4.6 2.4-7.5-6.2-4.5h7.6z"/></svg>';
          awardIcon.addEventListener("click", function (e) {
            e.stopPropagation();
          });
          cardStoreIcons.appendChild(awardIcon);
        }

        // Hint row with store icons
        var hintRow = document.createElement("div");
        hintRow.className = "project-card-footer";
        
        var hint = document.createElement("a");
        hint.className = "project-hint";
        hint.href = "https://bayuly94.github.io";
        hint.target = "_blank";
        hint.rel = "noopener noreferrer";
        hint.innerHTML = "Lihat Selengkapnya &rarr;";
        hint.title = "Buka versi interaktif di https://bayuly94.github.io";
        hint.addEventListener("click", function (e) {
          e.stopPropagation();
        });
        hintRow.appendChild(hint);

        if (cardStoreIcons.children.length > 0) {
          hintRow.appendChild(cardStoreIcons);
        }

        body.appendChild(title);
        body.appendChild(desc);
        body.appendChild(tagList);
        body.appendChild(hintRow);
        card.appendChild(thumb);
        card.appendChild(body);

        // Click to open detail modal
        card.addEventListener("click", function () {
          openProjectModal(item);
        });

        card.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProjectModal(item);
          }
        });

        grid.appendChild(card);
      });
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        render(tab.getAttribute("data-filter") || "all");
      });

      tab.addEventListener("keydown", function (event) {
        var targetIndex = -1;
        if (event.key === "ArrowRight") {
          targetIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft") {
          targetIndex = (index - 1 + tabs.length) % tabs.length;
        }
        if (targetIndex >= 0) {
          event.preventDefault();
          tabs[targetIndex].focus();
          tabs[targetIndex].click();
        }
      });
    });

    render("all");
  }

  // ===== PDF DOWNLOAD =====
  function initPdfDownload() {
    var btn = document.getElementById("download-pdf");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var cvDirectPath = "assets/Bayu_Lukman_Yusuf_CV.pdf";
      var a = document.createElement("a");
      a.href = cvDirectPath;
      a.download = "CV_Bayu_Lukman_Yusuf.pdf";
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("Mengunduh CV resmi Bayu Lukman Yusuf (PDF)...");
    });
  }

  // ===== CONTACT FORM =====
  function initContactForm() {
    var form = document.getElementById("contact-form");
    var feedback = document.getElementById("contact-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("contact-name") || {}).value || "";
      var email = (document.getElementById("contact-email") || {}).value || "";
      var message =
        (document.getElementById("contact-message") || {}).value || "";

      name = name.trim();
      email = email.trim();
      message = message.trim();

      feedback.className = "form-feedback";
      feedback.hidden = false;

      if (!name || !email || !message) {
        feedback.classList.add("is-error");
        feedback.textContent = "Gagal: mohon lengkapi nama, email, dan pesan.";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        feedback.classList.add("is-error");
        feedback.textContent = "Gagal: format alamat email tidak valid.";
        return;
      }

      var subject = encodeURIComponent("Kontak Profil dari " + name);
      var body = encodeURIComponent(
        "Nama: " + name + "\nEmail: " + email + "\n\n" + message
      );
      window.location.href = "mailto:bayuly94@gmail.com?subject=" + subject + "&body=" + body;

      feedback.classList.add("is-success");
      feedback.textContent =
        "Berhasil: aplikasi email Anda dibuka untuk mengirim pesan.";
      form.reset();
    });
  }

  // ===== INIT =====
  document.addEventListener("DOMContentLoaded", function () {
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
    initTheme();
    initMobileMenu();
    // Award Banner and Beceer project shortcut
    var awardBanner = document.getElementById("award-banner-trigger");
    if (awardBanner) {
      awardBanner.addEventListener("click", function () {
        zoomLightbox.open(
          "assets/images/awards/dicoding_beceer_award.webp",
          "Juara 1 Dicoding Challenge 2019: Beceer sang Juara"
        );
      });
      awardBanner.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          awardBanner.click();
        }
      });
    }

    var beceerBtn = document.getElementById("view-beceer-project-btn");
    if (beceerBtn) {
      beceerBtn.addEventListener("click", function () {
        var beceerItem = PORTFOLIO_ITEMS.find(function (it) {
          return it.title.indexOf("Beceer") !== -1;
        });
        if (beceerItem) {
          openProjectModal(beceerItem);
        }
      });
    }

    initPortfolio();
    initModalEvents();
    zoomLightbox.init();
    initPdfDownload();
    initContactForm();
  });
})();
