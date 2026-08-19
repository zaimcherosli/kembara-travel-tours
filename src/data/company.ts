export interface CompanyInfo {
  name: string;
  tagline: string;
  motacNo: string;
  ssmNo: string;
  whatsappNumber: string; // e.g. 60123456789
  whatsappDisplay: string;
  phoneDisplay: string;
  email: string;
  address: string;
  officeHours: string;
  socials: {
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "Kembara Travel & Tours Sdn Bhd",
  tagline: "Peneraju Pakej Percutian & Ziarah Terbaik Pilihan Rakyat Malaysia",
  motacNo: "KPL/LN: 8921",
  ssmNo: "201801029384 (1298492-X)",
  whatsappNumber: "601156889201",
  whatsappDisplay: "+60 11-5688 9201",
  phoneDisplay: "+60 3-8922 4500",
  email: "info@kembaratours.com.my",
  address: "Tingkat 2, Menara Kembara, Jalan Medan Pusat Bandar 8, Seksyen 9, 43650 Bandar Baru Bangi, Selangor",
  officeHours: "Isnin - Jumaat: 9:00 AM - 6:00 PM | Sabtu: 9:00 AM - 1:00 PM",
  socials: {
    facebook: "https://facebook.com/kembaratravel",
    instagram: "https://instagram.com/kembaratravel",
    tiktok: "https://tiktok.com/@kembaratravel",
    youtube: "https://youtube.com/@kembaratravel"
  }
};
