export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string; // e.g. "Sarapan, Makan Tengah Hari, Makan Malam"
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'antarabangsa' | 'domestik' | 'umrah' | 'pulau';
  categoryLabel: string;
  destination: string;
  country: string;
  duration: string; // e.g. "8 Hari 6 Malam"
  price: number;
  originalPrice?: number;
  deposit: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  badge?: string;
  featured?: boolean;
  highlights: string[];
  flightIncluded: boolean;
  hotelRating: string; // e.g. "4 Bintang" / "5 Bintang"
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  nextDepartureDates: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "switzerland-alps-dream",
    slug: "switzerland-alps-dream",
    title: "Switzerland & French Alps Explorer",
    subtitle: "Nikmati Keindahan Panorama Pergunungan Alps, Tasik Sejuk & Kereta Api Panoramik",
    category: "antarabangsa",
    categoryLabel: "Antarabangsa",
    destination: "Zurich, Interlaken, Lucerne, Zermatt",
    country: "Switzerland",
    duration: "8 Hari 6 Malam",
    price: 8490,
    originalPrice: 9290,
    deposit: 1000,
    rating: 4.9,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Paling Laris",
    featured: true,
    highlights: [
      "Naik Titlis Rotair Cable Car & Cliff Walk",
      "Lawatan ke Lembah Lauterbrunnen (72 Air Terjun)",
      "Pemandangan Gunung Matterhorn di Zermatt",
      "Pelayaran Tasik Lucerne dengan Tasik Biru Sejuk",
      "Pemandu Pelancong Muslim Fasih Bahasa Melayu"
    ],
    flightIncluded: true,
    hotelRating: "4 Bintang Tempatan",
    inclusions: [
      "Tiket Penerbangan Antarabangsa Pergi-Balik (Emirates / Qatar / Saudia)",
      "Penginapan Hotel 4 Bintang (Twin/Double Sharing) dengan Sarapan Halal / Mesra Muslim",
      "Tiket Cable Car Mount Titlis & Kereta Api Zermatt",
      "Pengangkutan Bas Persiaran Berhawa Dingin Eksklusif",
      "Makan tengah hari & malam mengikut jadual (100% Halal Certified / Muslim Friendly)",
      "Tips Pemandu & Tour Leader Profesional",
      "Insuran Perjalanan Takaful Komprehensif"
    ],
    exclusions: [
      "Perbelanjaan peribadi & lebihan bagasi",
      "Aktiviti pilihan (Optional Tours)",
      "Caj caj perkhidmatan hotel peribadi (Room Service/Minibar)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kuala Lumpur ke Zurich",
        description: "Berkumpul di KLIA 4 jam sebelum penerbangan. Berlepas ke Zurich melalui transit. Rehat dalam penerbangan yang selesa.",
        meals: "Makan dalam pesawat"
      },
      {
        day: 2,
        title: "Tiba Zurich – Rhine Falls – Tasik Lucerne",
        description: "Ketibaan di Lapangan Terbang Antarabangsa Zurich. Lawatan ke Air Terjun Rhine (terbesar di Eropah). Berlepas ke Lucerne dan lawatan ke Chapel Bridge & Lion Monument. Daftar masuk hotel.",
        meals: "Makan Malam Halal"
      },
      {
        day: 3,
        title: "Lucerne – Puncak Gunung Titlis (Salji Abadi) – Interlaken",
        description: "Pengembaraan mendaki Gunung Titlis menggunakan Rotair kabel berpusing 360 darjah. Lawatan ke Ice Grotto & Cliff Walk. Sebelah petang bergerak ke kota peranginan Interlaken.",
        meals: "Sarapan Hotel, Makan Tengah Hari, Makan Malam Halal"
      },
      {
        day: 4,
        title: "Interlaken – Lembah Lauterbrunnen – Tasik Brienz",
        description: "Meneroka keajaiban perkampungan Lauterbrunnen dengan latar air terjun Staubbach yang mempesona. Seterusnya ke tasik Iseltwald (lokasi penggambaran Crash Landing on You) dan Tasik Brienz.",
        meals: "Sarapan Hotel, Makan Tengah Hari, Makan Malam Halal"
      },
      {
        day: 5,
        title: "Interlaken – Zermatt & Ikonik Matterhorn",
        description: "Perjalanan ke perkampungan bebas kenderaan bermotor Zermatt. Pemandangan menakjubkan Gunung Matterhorn (Ikon Coklat Toblerone). Masa bebas untuk membeli-belah cenderamata kraf Swiss.",
        meals: "Sarapan Hotel, Makan Malam Halal"
      },
      {
        day: 6,
        title: "Bern Ibu Negara Bersejarah – Geneva",
        description: "Melawat bandar warisan dunia UNESCO Bern (Old Town & Jam Zytglogge). Bertolak ke Geneva, melawat Jet d'Eau dan Ibu Pejabat PBB (United Nations).",
        meals: "Sarapan Hotel, Makan Tengah Hari, Makan Malam Halal"
      },
      {
        day: 7,
        title: "Geneva Shopping & Berlepas Pulang ke Malaysia",
        description: "Masa bebas terakhir untuk membeli coklat Swiss terbaik dan cenderamata. Bertolak ke Lapangan Terbang Geneva untuk penerbangan pulang ke Kuala Lumpur.",
        meals: "Sarapan Hotel, Makan dalam pesawat"
      },
      {
        day: 8,
        title: "Selamat Tiba di Kuala Lumpur",
        description: "Tiba di KLIA dengan memori manis percutian Switzerland yang tidak dapat dilupakan.",
        meals: "Makan dalam pesawat"
      }
    ],
    nextDepartureDates: ["15 Okt 2026", "02 Nov 2026", "18 Dis 2026", "20 Jan 2027"]
  },
  {
    id: "japan-autumn-sakura-golden-route",
    slug: "japan-autumn-sakura-golden-route",
    title: "Japan Golden Route (Tokyo, Fuji & Kyoto)",
    subtitle: "Pakej Impian Jepun: Tokyo SkyTree, Gunung Fuji, Fushimi Inari & Shinkansen Bullet Train",
    category: "antarabangsa",
    categoryLabel: "Antarabangsa",
    destination: "Tokyo, Mount Fuji, Kyoto, Osaka",
    country: "Jepun",
    duration: "7 Hari 5 Malam",
    price: 6390,
    originalPrice: 6990,
    deposit: 800,
    rating: 4.95,
    reviewCount: 218,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Paling Popular",
    featured: true,
    highlights: [
      "Pengalaman Naik Kereta Api Laju Shinkansen",
      "Oshino Hakkai & Panorama Gunung Fuji",
      "Kuil Ribuan Gerbang Merah Fushimi Inari Taisha",
      "Shopping Syurga Shibuya Crossing & Shinjuku",
      "Makanan Halal Jepun & Solat Terjaga Sepanjang Lawatan"
    ],
    flightIncluded: true,
    hotelRating: "4 Bintang Strategik",
    inclusions: [
      "Tiket Penerbangan Terus (Malaysia Airlines / ANA / JAL)",
      "Tiket Shinkansen Tokyo ke Kyoto",
      "Penginapan Hotel 4 Bintang Pusat Bandar",
      "Bas Pelancongan Persendirian Berhawa Dingin",
      "Sarapan & Makanan Halal Disahkan (Wagyu Halal, Ramen Muslim-Friendly, Bento)",
      "Tiket Masuk Semua Tarikan dalam Jadual",
      "Pemandu Pelancong Berlesen Fasih Melayu & Jepun"
    ],
    exclusions: [
      "Perbelanjaan peribadi, sewaan kimono peribadi",
      "Lebihan bagasi penerbangan"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kuala Lumpur ke Tokyo (Haneda / Narita)",
        description: "Berkumpul di KLIA dan berlepas ke Tokyo. Tiba di Tokyo, disambut oleh tour leader dan bertolak ke hotel untuk rehat.",
        meals: "Makan dalam pesawat"
      },
      {
        day: 2,
        title: "Tokyo City Tour – Asakusa – Shibuya",
        description: "Melawat Kuil Asakusa Sensoji & Nakamise Shopping Street. Bergambar di Tokyo Skytree, seterusnya ke Shibuya Crossing yang terkenal dan patung Hachiko.",
        meals: "Sarapan Hotel, Makan Tengah Hari Halal, Makan Malam Halal"
      },
      {
        day: 3,
        title: "Gunung Fuji – Oshino Hakkai – Gotemba Premium Outlets",
        description: "Menuju ke kawasan Tasik Kawaguchiko untuk pemandangan memukau Gunung Fuji. Melawat perkampungan air mata air Oshino Hakkai, kemudian berbelanja barangan berjenama di Gotemba.",
        meals: "Sarapan Hotel, Makan Tengah Hari Halal BBQ, Makan Malam Halal"
      },
      {
        day: 4,
        title: "Pengalaman Bullet Train Shinkansen ke Kyoto – Arashiyama Bamboo Grove",
        description: "Menaiki kereta api laju Shinkansen ke Kyoto. Melawat Hutan Buluh Arashiyama dan Jambatan Togetsukyo yang tenang dan memukau.",
        meals: "Sarapan Hotel, Bento Halal Shinkansen, Makan Malam Halal"
      },
      {
        day: 5,
        title: "Kyoto Fushimi Inari – Osaka Castle & Dotonbori",
        description: "Bergambar di lorong ribuan torii gates Fushimi Inari. Berlepas ke Osaka, melawat Istana Osaka dan shopping makanan street food di Dotonbori & Shinsaibashi.",
        meals: "Sarapan Hotel, Makan Tengah Hari Halal, Makan Malam Halal Yakiniku"
      },
      {
        day: 6,
        title: "Osaka – Rinku Premium Outlets – Lapangan Terbang Kansai",
        description: "Shopping saat akhir di Rinku Town sebelum ke Lapangan Terbang Kansai untuk penerbangan pulang ke tanah air.",
        meals: "Sarapan Hotel, Makan dalam pesawat"
      },
      {
        day: 7,
        title: "Selamat Tiba di Kuala Lumpur",
        description: "Mendarat di KLIA dengan kenangan terindah dari bumi matahari terbit.",
        meals: "Makan dalam pesawat"
      }
    ],
    nextDepartureDates: ["10 Okt 2026", "24 Nov 2026", "15 Dis 2026", "08 Mac 2027"]
  },
  {
    id: "umrah-vip-musim-sejuk",
    slug: "umrah-vip-musim-sejuk",
    title: "Pakej Umrah VIP & Ziarah Musim Sejuk",
    subtitle: "Ibadah Penuh Ketenangan Bersama Bimbingan Mutawwif Berpengalaman & Hotel Dekat",
    category: "umrah",
    categoryLabel: "Umrah & Ziarah",
    destination: "Makkah Al-Mukarramah & Madinah Al-Munawwarah",
    country: "Arab Saudi",
    duration: "12 Hari 10 Malam",
    price: 7890,
    originalPrice: 8490,
    deposit: 1000,
    rating: 4.98,
    reviewCount: 380,
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Hotel Depan Masjid",
    featured: true,
    highlights: [
      "Hotel Makkah: Pulman Zamzam / Swissotel Clock Tower (0m)",
      "Hotel Madinah: Pullman Zamzam / Front Taiba (<100m)",
      "Penerbangan Terus (Direct Flight) Saudia / Malaysia Airlines",
      "Bimbingan Mutawwif Siswazah Universiti Islam Madinah / Al-Azhar",
      "Set Beg Kembara Eksklusif, Kain Ihram / Telekung & Air Zamzam 5L Percuma"
    ],
    flightIncluded: true,
    hotelRating: "5 Bintang Depan Dataran",
    inclusions: [
      "Tiket Penerbangan Terus Pergi-Balik Kelas Ekonomi",
      "Visa Umrah & Insuran Kesihatan Kerajaan Arab Saudi",
      "Penginapan 5 Bintang di Makkah & Madinah (Full Board Buffet Melayu/Arab)",
      "Kereta Api Laju Haramain Speed Train (Madinah ke Makkah)",
      "Ziarah Madinah & Ziarah Makkah (Jabal Uhud, Masjid Quba, Jabal Thaur, Arafah)",
      "Pengisian Rohani & Kursus Umrah Praktikal Sebelum Berlepas",
      "Set Beg Bagasi, Beg Galas, Beg Kasut, Buku Panduan Doa & Air Zamzam"
    ],
    exclusions: [
      "Permintaan bilik perseorangan (Single Room Supplement)",
      "Perbelanjaan dobi dan panggilan telefon peribadi"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kuala Lumpur ke Madinah Al-Munawwarah",
        description: "Penerbangan terus ke Madinah. Tiba di Lapangan Terbang Madinah, urusan imigresen dan bertolak ke hotel. Ziarah dalaman Masjid Nabawi & Raudhah.",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 2,
        title: "Ziarah Luar Kota Madinah",
        description: "Melawat Masjid Quba (solat sunat 2 rakaat fadhilat seperti Umrah), Jabal Uhud dan Makam Syuhada, Ladang Kurma, dan Masjid Qiblatain.",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 3,
        title: "Memperbanyakkan Ibadah di Masjid Nabawi & Raudhah",
        description: "Pengisian rohani dan bimbingan ziarah maqam Rasulullah SAW dan para sahabat serta slot ibadah di Raudhah mengikut slot permit Nusuk.",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 4,
        title: "Madinah ke Makkah Mukarramah via Haramain Train",
        description: "Mandi sunat ihram dan berniat di Bir Ali (Miqat). Menaiki kereta api laju Haramain ke Makkah. Tiba di Makkah, daftar masuk hotel dan menyempurnakan Umrah Pertama.",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 5,
        title: "Ibadah Bebas di Masjidil Haram",
        description: "Memperbanyakkan tawaf sunat, solat berjemaah di hadapan Kaabah dan tadabbur Al-Quran.",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 6,
        title: "Ziarah Manasik Haji & Umrah Kedua (Ja'ranah)",
        description: "Melawat Jabal Thaur, Padang Arafah, Muzdalifah, Mina, dan Jabal Nur. Mengambil Miqat di Ja'ranah untuk Umrah Kedua.",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 7,
        title: "Ziarah Taif Sejuk (Pilihan Eksklusif)",
        description: "Lawatan ke Kota Sejuk Taif, Masjid Abdullah Ibn Abbas, Kilang Wangian Mawar Taif, menaiki Cable Car Taif dan Miqat Qarnul Manazil untuk Umrah ke-3.",
        meals: "Full Board Buffet Hotel & Makan Nasi Mandy Taif"
      },
      {
        day: 8,
        title: "Ibadah & Muhasabah di Masjidil Haram",
        description: "Masa lapang untuk memperbanyakkan doa di tempat mustajab (Multazam, Hijr Ismail, Rukun Yamani).",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 9,
        title: "Tawaf Wada' & Bertolak ke Jeddah",
        description: "Menyempurnakan Tawaf Wada' (selamat tinggal) sebelum bertolak ke Jeddah. Lawatan ringkas ke Corniche Jeddah dan Masjid Terapung.",
        meals: "Full Board Buffet Hotel"
      },
      {
        day: 10,
        title: "Penerbangan Pulang Jeddah ke Kuala Lumpur",
        description: "Urusan daftar masuk di Lapangan Terbang Antarabangsa King Abdulaziz Jeddah dan penerbangan pulang.",
        meals: "Makan dalam pesawat"
      },
      {
        day: 11,
        title: "Selamat Kembali ke Tanah Air",
        description: "Tiba di KLIA dengan membawa gelaran Umrah yang Mabrur, insya-Allah.",
        meals: "Makan dalam pesawat"
      }
    ],
    nextDepartureDates: ["05 Nov 2026", "20 Nov 2026", "08 Dis 2026", "15 Jan 2027"]
  },
  {
    id: "sabah-kundasang-kota-kinabalu",
    slug: "sabah-kundasang-kota-kinabalu",
    title: "Pesona Kundasang & Pulau Kota Kinabalu",
    subtitle: "Pemandangan Ala New Zealand Desa Dairy Farm, Ranau Hot Spring & Snorkeling Pulau Manukan",
    category: "domestik",
    categoryLabel: "Domestik",
    destination: "Kundasang, Ranau, Kota Kinabalu, Manukan Island",
    country: "Malaysia",
    duration: "4 Hari 3 Malam",
    price: 990,
    originalPrice: 1250,
    deposit: 200,
    rating: 4.88,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Pakej Jimat",
    featured: true,
    highlights: [
      "Desa Cattle Dairy Farm Kundasang (New Zealand Malaysia)",
      "Jambatan Gantung Tamparuli & Rumah Terbalik",
      "Kolam Air Panas Poring & Fish Spa Luanti",
      "Island Hopping & Snorkeling Pulau Manukan / Sapi",
      "Makan Seafood Segar Pasar Filipina Kota Kinabalu"
    ],
    flightIncluded: false,
    hotelRating: "Resort Kundasang & Hotel 4 Bintang KK",
    inclusions: [
      "Penginapan 1 Malam di Resort Sejuk Kundasang + 2 Malam di Pusat Bandar KK",
      "Pengangkutan Van Pelancongan Persendirian Berhawa Dingin",
      "Semua Tiket Masuk Tempat Lawatan",
      "Tiket Bot Laju Island Hopping + Peralatan Snorkeling & Life Jacket",
      "Makan Sarapan & Makanan Tempatan Mengikut Itinerary Termasuk Dinner Seafood",
      "Pemandu Mesra & Berpengalaman Berdaftar"
    ],
    exclusions: [
      "Tiket Penerbangan KL-KK-KL (Boleh dibeli sekali atas permintaan)",
      "Aktiviti sukan air seperti Parasailing / Sea Walking"
    ],
    itinerary: [
      {
        day: 1,
        title: "Ketibaan KK – Jambatan Tamparuli – Nabalu – Kundasang",
        description: "Ketibaan di KKIA, disambut pemandu. Berlepas ke Kundasang. Singgah di Jambatan Tamparuli dan Pekan Nabalu untuk bergambar latar belakang Gunung Kinabalu. Daftar masuk resort sejuk.",
        meals: "Makan Malam Steamboat Sejuk Kundasang"
      },
      {
        day: 2,
        title: "Desa Dairy Farm – Poring Hot Spring – Fish Spa – Kota Kinabalu",
        description: "Melawat ladang lembu Desa Cattle (minum susu segar & aiskrim). Ke Poring Hot Spring, Canopy Walkway dan Fish Spa Ikan Kelah di Kampung Luanti. Bergerak pulang ke KK.",
        meals: "Sarapan Resort, Makan Tengah Hari, Makan Malam Seafood Pasar Filipina"
      },
      {
        day: 3,
        title: "Island Hopping Pulau Manukan & Sapi – Sunset Tanjung Aru",
        description: "Menaiki bot ke Taman Tunku Abdul Rahman. Aktiviti mandi laut, snorkeling dan santai pantai. Petang menyaksikan matahari terbenam paling cantik di Pantai Tanjung Aru.",
        meals: "Sarapan Hotel, Makan Tengah Hari Pulau, Makan Malam"
      },
      {
        day: 4,
        title: "Shopping Pasar Kraftangan & Mutiara – Berlepas Pulang",
        description: "Membeli mutiara asli Sabah, kraftangan, keropok amplang dan buah tarap sebelum dihantar ke Lapangan Terbang KKIA.",
        meals: "Sarapan Hotel"
      }
    ],
    nextDepartureDates: ["Setiap Hari (Min 2 Pax)", "Cuti Sekolah Oktober 2026", "Disember 2026"]
  },
  {
    id: "vietnam-hanoi-sapa-halong-bay",
    slug: "vietnam-hanoi-sapa-halong-bay",
    title: "Vietnam: Hanoi, Sapa Misty Mountain & Cruise Halong Bay",
    subtitle: "Puncak Fansipan Rooftop of Indochina, Sawah Bertingkat Sapa & Pelayaran 5 Bintang Teluk Halong",
    category: "antarabangsa",
    categoryLabel: "Antarabangsa",
    destination: "Hanoi, Sapa Valley, Fansipan Peak, Halong Bay",
    country: "Vietnam",
    duration: "6 Hari 5 Malam",
    price: 2890,
    originalPrice: 3390,
    deposit: 500,
    rating: 4.89,
    reviewCount: 164,
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Nilai Terbaik",
    featured: false,
    highlights: [
      "Naik Cable Car ke Puncak Fansipan (3,143m)",
      "Pelayaran Mewah Cruise 5 Bintang di Halong Bay UNESCO",
      "Perkampungan Etnik Cat Cat Village Sapa",
      "Kereta Api Khas Melalui Jalanan Kereta Api Hanoi (Train Street)",
      "100% Halal Food Restaurant & Pemandu Pelancong Muslim"
    ],
    flightIncluded: true,
    hotelRating: "4 & 5 Bintang",
    inclusions: [
      "Tiket Penerbangan Pergi-Balik (AirAsia / Vietnam Airlines)",
      "Penginapan 4 Bintang Sapa + 4 Bintang Hanoi + 1 Malam Cruise Halong Bay",
      "Tiket Cable Car & Monorail Fansipan",
      "Semua Makanan Halal Disahkan Mengikut Jadual",
      "Bas Pelancongan VIP Limousine",
      "Insuran Perjalanan Asas"
    ],
    exclusions: [
      "Perbelanjaan peribadi, sewa kostum tradisional",
      "Aktiviti kayak peribadi tambahan"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kuala Lumpur ke Hanoi – Perjalanan ke Sapa",
        description: "Tiba di Hanoi Noi Bai Airport. Menaiki van VIP Limousine terus menuju ke bandar berkabus Sapa dengan melalui lebuhraya pemandangan bukit.",
        meals: "Makan Malam Halal di Sapa"
      },
      {
        day: 2,
        title: "Puncak Tertinggi Indochina Fansipan – Cat Cat Village",
        description: "Menaiki kabel car terpanjang di dunia ke Puncak Fansipan. Petang melawat Cat Cat Village dan melihat air terjun pergunungan.",
        meals: "Sarapan Hotel, Makan Tengah Hari Halal, Makan Malam Halal"
      },
      {
        day: 3,
        title: "Moana Sapa – Bertolak ke Hanoi – Old Quarter",
        description: "Spot bergambar di Moana Sapa (patung Moana & piano awan). Bertolak ke Hanoi, bersiar di Tasik Hoan Kiem dan 36 Jalanan Kuno.",
        meals: "Sarapan Hotel, Makan Tengah Hari, Makan Malam Halal Hanoi"
      },
      {
        day: 4,
        title: "Hanoi ke Teluk Halong (Halong Bay Cruise)",
        description: "Daftar masuk Cruise 5 Bintang di Halong Bay. Menikmati hidangan makanan laut halal, meneroka Gua Sung Sot dan berkayak di Luon Cave.",
        meals: "Sarapan Hotel, Makan Tengah Hari Cruise, Makan Malam BBQ Seafood Cruise"
      },
      {
        day: 5,
        title: "Tai Chi Halong Bay – Kembali ke Hanoi Train Street",
        description: "Senaman Tai Chi atas dek kapal pada waktu subuh. Pelayaran pulang ke jeti dan kembali ke Hanoi. Minum kopi telur Halal di Hanoi Train Street.",
        meals: "Sarapan Ringan & Brunch Cruise, Makan Malam Halal"
      },
      {
        day: 6,
        title: "Shopping Pasar Dong Xuan & Pulang ke Malaysia",
        description: "Membeli telekung Vietnam, beg, kopi Vietnam dan sutera sebelum ke lapangan terbang.",
        meals: "Sarapan Hotel"
      }
    ],
    nextDepartureDates: ["12 Okt 2026", "08 Nov 2026", "22 Dis 2026", "10 Feb 2027"]
  },
  {
    id: "semporna-mabul-kapalai-island",
    slug: "semporna-mabul-kapalai-island",
    title: "Syurga Bawah Laut Semporna & Mabul Water Bungalow",
    subtitle: "Air Laut Sejernih Kristal, Penginapan Atas Air Eksklusif Mabul & Pulau Bohey Dulang",
    category: "pulau",
    categoryLabel: "Pulau & Percutian Santai",
    destination: "Semporna, Pulau Mabul, Kapalai, Bohey Dulang",
    country: "Malaysia",
    duration: "4 Hari 3 Malam",
    price: 1390,
    originalPrice: 1750,
    deposit: 300,
    rating: 4.92,
    reviewCount: 245,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    badge: "Water Chalet",
    featured: false,
    highlights: [
      "Penginapan Atas Air (Water Bungalow) Mabul yang Memukau",
      "Mendaki Puncak Kawah Gunung Berapi Purba Bohey Dulang",
      "Snorkeling bersama Penyu Gergasi & Coral Garden di Kapalai",
      "Pengalaman Melawat Perkampungan Bajau Laut (Sea Gypsies)",
      "Set BBQ Seafood Segar Semporna"
    ],
    flightIncluded: false,
    hotelRating: "Water Resort Mabul & Hotel Semporna",
    inclusions: [
      "Penginapan 2 Malam di Resort Atas Air Mabul + 1 Malam di Pekan Semporna",
      "Pengangkutan Bot Laju Pergi-Balik Pulau & Pengangkutan Darat Tawau-Semporna",
      "Peralatan Snorkeling Lengkap & Permit Taman Marin Sabah",
      "Semua Makanan Penuh (Sarapan, Makan Tengah Hari Buffet Pulau, Dinner Seafood)",
      "Krew Profesional & Jurugambar Bawah Air (Underwater GoPro)"
    ],
    exclusions: [
      "Tiket Penerbangan KL-Tawau-KL",
      "Aktiviti Scuba Diving (Boleh tambah lesen Discovery Scuba)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tawau ke Semporna – Pindah ke Mabul Water Resort",
        description: "Dijemput di Lapangan Terbang Tawau, bertolak ke Jeti Semporna. Menaiki bot laju ke Pulau Mabul. Daftar masuk Water Bungalow. Santai menyaksikan matahari terbenam.",
        meals: "Makan Tengah Hari & Dinner BBQ Seafood di Resort"
      },
      {
        day: 2,
        title: "Snorkeling Pulau Kapalai & Mabul Discovery",
        description: "Snorkeling di Kapalai Sandbar melihat hidupan marin eksotik dan penyu. Petang bergambar di jeti resort atas air dan aktiviti kayak lutsinar.",
        meals: "Sarapan, Makan Tengah Hari & Dinner Resort"
      },
      {
        day: 3,
        title: "Island Hopping Bohey Dulang, Mantabuan & Sibuan",
        description: "Hiking puncak Bohey Dulang untuk panorama 360 darjah laguna biru. Snorkeling bersama ikan pari di Mantabuan dan pulau pasir putih Sibuan.",
        meals: "Sarapan Resort, Packed Lunch Pulau, Dinner Pekan Semporna"
      },
      {
        day: 4,
        title: "Pasar Ikan Masin Semporna ke Lapangan Terbang Tawau",
        description: "Membeli hasil laut kering dan cenderamata sebelum dihantar ke Airport Tawau untuk penerbangan pulang.",
        meals: "Sarapan Hotel"
      }
    ],
    nextDepartureDates: ["Setiap Minggu (Jumaat - Isnin)", "Pakej Honeymoon & Keluarga Tersedia"]
  }
];
