export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Bagaimanakah cara untuk membuat tempahan pakej pelancongan?",
    answer: "Anda boleh memilih pakej di laman web ini, kemudian klik butang 'Tempah Melalui WhatsApp' atau isi borang pertanyaan rasmi. Pegawai khidmat pelanggan kami akan menghubungi anda dalam masa 15 minit untuk pengesahan tarikh, butiran peserta, dan pengeluaran invois rasmi.",
    category: "Tempahan"
  },
  {
    question: "Berapakah bayaran deposit yang diperlukan dan bila baki perlu dijelaskan?",
    answer: "Deposit adalah serendah RM200 - RM1,000 seorang (bergantung kepada pakej domestik atau antarabangsa). Baki penuh bayaran boleh dibuat secara ansuran atau diselesaikan selewat-lewatnya 45 hari sebelum tarikh perlepasan.",
    category: "Pembayaran"
  },
  {
    question: "Adakah makanan yang disediakan 100% Halal?",
    answer: "Ya, sudah pasti! Semua pakej Kembara Travel & Tours memastikan sajian makanan adalah 100% Halal disahkan atau Mesra Muslim (Muslim-Friendly) di restoran terpilih. Waktu solat juga sentiasa dipelihara sepanjang lawatan.",
    category: "Makanan & Solat"
  },
  {
    question: "Adakah Kembara Travel & Tours mempunyai lesen sah dari Kementerian Pelancongan (MOTAC)?",
    answer: "Ya! Kami adalah agensi pelancongan berdaftar yang sah di bawah Kementerian Pelancongan, Seni dan Budaya Malaysia (MOTAC) dengan nombor lesen KPL/LN: 8921 serta ahli berdaftar MATTA.",
    category: "Keselamatan"
  },
  {
    question: "Apakah syarat tempoh sah pasport antarabangsa?",
    answer: "Untuk perjalanan antarabangsa dan Umrah, pasport anda mestilah mempunyai tempoh sah laku sekurang-kurangnya 6 bulan dari tarikh kepulangan ke Malaysia dengan sekurang-kurangnya 4 muka surat kosong.",
    category: "Dokumen"
  },
  {
    question: "Bolehkah saya meminta pakej percutian 'Custom / Private Tour' untuk keluarga atau syarikat?",
    answer: "Boleh! Kami menyediakan pakej Private & Custom Tour untuk percutian keluarga besar, rombongan sekolah, serta percutian korporat / Hari Keluarga (Teambuilding) syarikat mengikut bajet dan tarikh pilihan anda.",
    category: "Khas & Korporat"
  }
];
